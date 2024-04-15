"use client";
import "./signup.css";
import { Button } from "@mui/material";

export default function SignupPage() {
  return (
    <div className="signup-page-container">
      <div className="signup-container">
        <div className="signup">Sign Up</div>
        <div className="department-container">
          <input type="text" placeholder="Department" />
        </div>
        <div className="email-container">
          <input type="email" placeholder="Email" />
        </div>
        <div className="username-container">
          <input type="text" placeholder="Username" />
        </div>
        <div className="two-password-containers">
          <div className="password-container">
            <input type="password" placeholder="Password" />
          </div>
          <div className="confirmpassword-container">
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>
        <Button className="signup-button">Sign Up</Button>
        <div className="already-have-account">
          <span>
            Already have an account?{" "}
            <a href="/login" className="login-here">
              Log in
            </a>
          </span>
        </div>
        <div className="signup-line-container">
          <div className="signup-line"></div>
          <span className="signup-or">or</span>
          <div className="signup-line"></div>
        </div>
        <a href="/" className="signup-back-home">
          Back Home
        </a>
      </div>
      <div className="signup-red-container">
        <div className="signup-scorecard-container"></div>
        <p className="signup-scorecard-text">
          <span>Track </span>
          <span className="signup-yellow-letter">key metrics</span>
          <span>
            , analyze trends, and make informed decisions to drive success.
          </span>
        </p>
        <div className="signup-swot-container"></div>
        <p className="signup-scorecard-text">
          <span>Identify </span>
          <span className="signup-yellow-letter">
            strength, weaknesses, opportunities, and threats{" "}
          </span>
          <span>to your business.</span>
        </p>
        <div className="signup-strategy-container"></div>
        <p className="signup-scorecard-text">
          <span>Define </span>
          <span className="signup-yellow-letter">objectives</span>
          <span>, outline initiatives, and map out your path to success.</span>
        </p>
      </div>
    </div>
  );
}
