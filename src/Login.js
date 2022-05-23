import { useState } from "react";
import { TiSocialGooglePlus } from "react-icons/fa";
import digiologo from "./images/digio_logo.jpg";
import validator from "validator";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [emailError, setEmailError] = useState("");
    const [btnstate, setBtnState] = useState(true);
    let navigate = useNavigate();
    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            //here valid this is valid email
            setEmailError("");
            setBtnState(false);
        } else {
            setEmailError("Enter valid Email!");
            setBtnState(true);
        }
    };
    //handle click on continue button

    const handleContinue = () => {
        let path = `/register`;
        navigate(path);
    };
    return (
        <div className="login-container">
            <div className="top-login">
                <div className="user-cont">
                    <p>sankit@digio.in uses Gmail?</p>
                    <p>login using google</p>
                </div>
                <div className="btn-cont">
                    <button className="google-btn">
                        {/* <TiSocialGooglePlus /> */}
                        Google
                    </button>
                </div>
            </div>
            <div className="bottom-login">
                <div className="btm-input">
                    <p>Processed with your email address</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => validateEmail(e)}
                    />
                    <span
                        style={{
                            color: "red",
                        }}
                    >
                        {emailError}
                    </span>
                </div>
                <div className="bottom-continue-btn">
                    <p>By continueing I confirm to terms and services</p>
                    <p>and privacy policy of Digio.in</p>
                    <button
                        className="bottom-btn"
                        disabled={btnstate}
                        onClick={handleContinue}
                    >
                        CONTINUE
                    </button>
                </div>
            </div>
            <div className="login-footer">
                <div className="login-footer-img">
                    <img src={digiologo} />
                    <div>
                        <p>powered by </p>
                        <p>www.digio.in</p>
                    </div>
                </div>
                <div className="login-footer-right">
                    <h1>1</h1>
                    <p>/3 steps</p>
                </div>
            </div>
        </div>
    );
};
export default Login;
