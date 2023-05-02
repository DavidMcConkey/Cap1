import React from "react";
import Button from "@mui/material/Button";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <h1>RestEasy</h1>
      <Button
        href="/login"
        variant="contained"
        className="btn btn-primary mt-2"
      >
        Login
      </Button>
      <Button
        href="/sign-up"
        variant="contained"
        className="btn btn-primary mt-2"
      >
        Sign-Up
      </Button>
    </div>
  );
};

export default Home;
