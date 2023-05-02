import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Dashboard from "./components/pages/Dash/Dash";
import Inbox from "./components/pages/Inbox/Inbox";
import BookOffs from "./components/pages/BookOffs/BookOffs";
import Schedule from "./components/pages/Schedule/Schedule";
import SignupForm from "./components/auth/SignUpform";
import LoginForm from "./components/auth/Loginform";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/bookoffs" element={<BookOffs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<h1>Error! Page does not exist.</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
