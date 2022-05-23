import "./register.css";
import Popup from "./Popup";
const Register = () => {
    return (
        <div className="register-container">
            <div className="reg-nav">
                <h1>Register</h1>
            </div>
            <div className="reg-body">
                <Popup />
            </div>
        </div>
    );
};

export default Register;
