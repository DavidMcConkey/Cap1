import os
from flask import Flask,render_template, request,session,g, redirect, jsonify,abort
import pyrebase
from flask_session import Session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db,connect_db,User
from flask_bcrypt import bcrypt
CURR_USER_KEY = 'curr_user'



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','postgresql:///resteast')
app.config['SECRET_KEY']=os.environ["SECRET_KEY", "secretsecretsecret"]
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

bcrypt = Bcrypt(app)
server_session = Session(app)

CORS(app, supports_credentials=True)

app.app_context().push()
connect_db(app)

@app.route('/@me')
def get_current_user():
    user_id = session.get('user_id')

    if not user_id:
        return jsonify({'error': "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        'id':user.id,
        "email":user.email
    })

@app.route('/signup',methods=["POST"])
def register_user():
    email = request.json['email']
    password = request.json['password']

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        abort(409)
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password = hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
        'id':new_user.id,
        "email":new_user.email
    })
@app.route('/login', methods=['POST'])
def login_user():
    email = request.json['email']
    password = request.json['password']

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({'error': "Unauthorized"}), 401
    
    if not bcrypt.check_password_hash(password, user.password):
        return jsonify({'error': "Unauthorized"}), 401

    session['user_id'] = user.id

    return jsonify({
        'id':user.id,
        "email":user.email
    })
if __name__ == "__main__":
    app.run(debug=True)


