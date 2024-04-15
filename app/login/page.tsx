import React from "react";
import "./login.css";
import { Button } from "@mui/material";

export default function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-container">
        <div className="login">Login</div>
        <div className="username-container">
          <div className="usernamelogo"></div>
          <input type="text" placeholder="Username" />
        </div>
        <div className="password-container">
          <div className="passwordlogo"></div>
          <input type="password" placeholder="Password" />
        </div>
        <Button className="login-button">Login</Button>
        <div className="dont-have-an-account-click-here">
          <span>
            Don't have an account?{" "}
            <a href="/signup" className="click-here">
              Click here!
            </a>
          </span>
        </div>
        <div className="line-container">
          <div className="line-11"></div>
          <span className="or">or</span>
          <div className="line-11"></div>
        </div>
        <a href="/" className="back-home">
          Back Home
        </a>
      </div>
      <div className="red-container">
        <div className="scorecard-container"></div>
        <p className="scorecard-text">
          <span>Track </span>
          <span className="yellow-letter">key metrics</span>
          <span>
            , analyze trends, and make informed decisions to drive success.
          </span>
        </p>
        <div className="swot-container"></div>
        <p className="scorecard-text">
          <span>Identify </span>
          <span className="yellow-letter">strength, weaknesses, opportunities, and threats </span>
          <span>
            to your business.
          </span>
        </p>
        <div className="strategy-container"></div>
        <p className="scorecard-text">
          <span>Define </span>
          <span className="yellow-letter">objectives</span>
          <span>
            , outline initiatives, and map out your path to success.
          </span>
        </p>
      </div>
    </div>
  );
}
