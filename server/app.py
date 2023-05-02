import os
from flask import Flask,render_template, request,g,session, redirect, jsonify,abort
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db,User
from flask_bcrypt import bcrypt



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','postgresql:///resteasy')
app.config['SECRET_KEY']=os.environ.get("SECRET_KEY","secretsecretsecret")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)
CURR_USER_KEY = "curr_user"
with app.app_context():
    db.create_all()

@app.before_request
def add_user_to_g():
    """If logged in, add user to Flask global"""
    if CURR_USER_KEY in session:
        g.user = User.query.get(session[CURR_USER_KEY])
    else:
        g.user =None

def do_login(user):
    """logs user in"""
    session[CURR_USER_KEY] = user.id

def do_logout():
    """Logs out user"""
    if CURR_USER_KEY in session:
        del session[CURR_USER_KEY]

@app.route('/sign-up',methods=["POST"])
def register_user():
    email = request.json['email']
    password = request.json['password']
    name = request.json['name']

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify ({'error':'Email already exists!'}),409
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email,name=name, password = hashed_password.decode("utf-8"))
    db.session.add(new_user)
    db.session.commit()

    do_login(new_user)
    return jsonify({
        'id':new_user.id,
        "email":new_user.email,
        'name':new_user.name
    })
@app.route('/login', methods=['POST'])
def login_user():
    email = request.json['email']
    password = request.json['password']

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({'error': "Unauthorized"}), 401
    
    if not bcrypt.check_password_hash(user.password,password):
        return jsonify({'error': "Unauthorized"}), 401

    do_login(user)

    return jsonify({
        'id':user.id,
        "email":user.email
    })

@app.route('/sign-out')
def logout():
    """Handles logout of user"""
    do_logout()
if __name__ == "__main__":
    app.run(debug=True)
    app.secret_key = "very secret key"
    app.config['SESSION_TYPE'] = 'filesystem'


