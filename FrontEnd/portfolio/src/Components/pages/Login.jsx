import React from "react";
import "../css/Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Login = () => {
  let history = useHistory();

  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useState(true);

  const loginSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const payload = await response.json();

    if (response.status >= 400) {
      setAuth(false);
    } else {
      setAuth(true);
      sessionStorage.setItem("token", payload.token);
      history.push("/submissions");
    }
  };

  return (
    <>
      <video
        className="login-video"
        src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
      ></video>
      <Navbar />
      <section id="login" className="login">
        {!auth && (
          <div className="container">
            <Card className="text-white bg-primary my-5 py-4  text-center">
              <Card.Body>
                <Card.Text className="text-white m-0">
                  Invalid credentials, please try again
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
        <h1 className="login-heading">LOGIN</h1>
        <span className="login-divider"></span>
        <div className="login-form-wrapper">
          <form className="login-form" id="form" onSubmit={loginSubmit}>
            <label className="login-label" for="username">
              UserName
            </label>
            <input
              type="text"
              name="username"
              id="usernameEntry"
              className="login-input"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoComplete="off"
            />

            <label className="login-label" for="username">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="passwordEntry"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Valid password"
              autoComplete="off"
            />

            <button
              type="submit"
              value="SUBMIT"
              className="login-btn"
              id="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
