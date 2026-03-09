import React, { useState } from "react";
import "./Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "../firebase";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [membership, setMembership] = useState("");
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        setEmail("");
        setPassword("");
        setError("");
        navigate("/"); // Navigate to the main page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code:", errorCode, "Error message:", errorMessage);
        setError(
          errorCode === "auth/email-already-in-use"
            ? "This email is already registered. Please use another email."
            : "Login failed: " + errorMessage
        );
      });
  };

  const Googlelogin = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google user signed in:", user);
        setError("");
        navigate("/"); // Navigate to the main page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code:", errorCode, "Error message:", errorMessage);
        setError("Login failed: " + errorMessage);
      });
  };

  const handleInputChange = (type, value) => {
    if (type === "email") setEmail(value);
    else if (type === "phone") setPhone(value);
    else if (type === "membership") setMembership(value);
    handleValidation();
  };

  const handleValidation = () => {
    if (activeTab === "email" && validateEmail(email)) {
      setIsValidInput(true);
    } else if (activeTab === "mobile" && phone.length >= 10) {
      setIsValidInput(true);
    } else if (activeTab === "membership" && membership.trim().length > 0) {
      setIsValidInput(true);
    } else {
      setIsValidInput(false);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const closeloginpage = () => {
    navigate(location.state?.from || "/");
  };

  return (
    <div className="main-login-page">
      <div className="login-header">
        <div className="logo-login-header">
          <img
            className="imge-taj-login"
            src="https://cdn.sanity.io/images/ocl5w36p/prod5/5bc445d632d83571807495a20965af52dc068075-100x88.png"
            alt=""
            width={55.54}
            height={46.5}
          />
        </div>
        <i className="fa-sharp fa-solid fa-xmark" onClick={closeloginpage}></i>
      </div>
      <div className="second-login-page">
        <div className="JoinNow">
          <div className="heading-text">
            <h2>NOT A MEMBER? JOIN NOW</h2>
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod2/045e2745bbdab00e21ad2c5e8232c23ed7868b0f-201x43.png"
              alt=""
            />
            <h6>MEMBER BENEFITS</h6>
          </div>

          <div className="box-imges">
            <div className="box-1">
              <img
                src="https://cdn.sanity.io/images/ocl5w36p/prod5/a9f62fe5c3de35934c6f1f7443d59915ed9055fa-480x240.jpg"
                alt=""
              />
              <p>Exclusive Member Rates</p>
            </div>
            <div className="box-1">
              <img
                src="https://cdn.sanity.io/images/ocl5w36p/prod5/938fba81bbfe03a175ba2d3cc59013bef11bff3b-480x240.jpg"
                alt=""
              />
              <p>Special Offers for Dining & Spas</p>
            </div>
            <div className="box-1">
              <img
                src="https://cdn.sanity.io/images/ocl5w36p/prod5/0e17d0b6fd12d3192f998142a9c2e892677e4c5b-480x240.jpg"
                alt=""
              />
              <p>Minimum 4% NeuCoins</p>
            </div>
            <div className="box-1">
              <img
                src="https://cdn.sanity.io/images/ocl5w36p/prod5/6ebadc2923edc19bcabca5550950d14e31f99f18-480x240.jpg"
                alt=""
              />
              <p>Earn & Redeem across Stays, Dining, Spas and more</p>
            </div>
          </div>
          <button className="join-button-login">JOIN NOW</button>
        </div>
        <hr className="border-middle" />

        <div className="login-container">
          <div className="LOGIN">
            <h2>LOGIN/Join</h2>
          </div>

          <ul className="nav nav-tabs justify-content-center mt-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "mobile" ? "active" : ""}`}
                onClick={() => setActiveTab("mobile")}
              >
                MOBILE NUMBER
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "email" ? "active" : ""}`}
                onClick={() => setActiveTab("email")}
              >
                EMAIL ADDRESS
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "membership" ? "active" : ""
                }`}
                onClick={() => setActiveTab("membership")}
              >
                MEMBERSHIP NUMBER
              </button>
            </li>
          </ul>

          <div className="form-container">
            {activeTab === "mobile" && (
              <div className="input-group mt-4">
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(value) => {
                    setPhone(value);
                    handleValidation();
                  }}
                  placeholder="Enter your mobile number"
                  containerClass="phone-input-container"
                  inputClass="phone-input-field"
                  buttonClass="phone-input-flag"
                />
              </div>
            )}

            {activeTab === "email" && (
              <div className="input-group mt-4" id="email-paswoed">
                {/* Email input */}
                <input
                  type="email"
                  className="form-control-email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    handleInputChange("email", e.target.value);
                    handleValidation();
                  }}
                />
                <br />
                {/* Password input */}
                <input
                  id="pasword-input"
                  type="password"
                  className="form-control-email"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleValidation();
                  }}
                />
              </div>
            )}

            {activeTab === "membership" && (
              <div className="input-group mt-4">
                <input
                  id="memrship"
                  type="text"
                  className="form-control-membership"
                  placeholder="Enter your membership number"
                  value={membership}
                  onChange={(e) => {
                    handleInputChange("membership", e.target.value);
                    handleValidation();
                  }}
                />
              </div>
            )}

            {error && <p className="text-danger mt-1">{error}</p>}

            <div className="form-check-box mt-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="agree"
                checked={agree}
                onChange={() => setAgree(!agree)}
                disabled={!isValidInput}
              />
              <label className="form-check-label" htmlFor="agree">
                By continuing you agree to our{" "}
                <span className="terms">Terms of Use</span> and{" "}
                <span className="terms">Privacy Policy</span>
              </label>
            </div>

            <div className="form-submit">
              <button
                className={`btn-login ${
                  isValidInput && agree ? "btn-enabled" : "btn-disabled"
                }`}
                onClick={handleSubmit}
                disabled={!isValidInput || !agree}
              >
                CONTINUE
              </button>
            </div>

            <p className="or-login">Or login using</p>

            <div className="google-login">
              <button className="google-button" onClick={Googlelogin}>
                <i className="fa-brands fa-google"></i>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
// logine / logout
