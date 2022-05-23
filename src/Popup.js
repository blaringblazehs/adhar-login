import { useState } from "react";
import "./popup.css";
import text from "./images/text.png";
import adhar from "./images/adhar.png";

const Popup = (props) => {
    // create state `open` with default as false
    const [open, setOpen] = useState(false);
    const [otp, setOtp] = useState(false);
    const [num, setnum] = useState("");
    const [otpState, setOtpState] = useState("");
    const [dis, setDisable] = useState(true);

    const validateNum = (e) => {
        var num = e.target.value.toString();
        if (num.length == 12) setnum(num);
        else setOtp("");
    };
    const handleOtp = () => {
        if (num.length == 12) {
            setOtp(true);
        } else {
            setOtp(false);
            setnum("");
        }
    };
    //validate otp field
    const validateOTP = (e) => {
        if (e.target.value.toString().length == 6) {
            setOtpState(e.target.value.toString());
        } else {
            setOtpState("");
        }
    };
    const checkOTP = () => {
        if (otpState === "123456") {
            setOpen(false);
            setDisable(!dis);
        }
    };

    return (
        <div className="p-cont">
            <div className="add-button">
                <img src={text} />
                {dis ? (
                    <div className="p-btn">
                        <button
                            className="pop-btn"
                            onClick={() => setOpen(!open)}
                        >
                            Request OTP to Sign
                        </button>
                    </div>
                ) : (
                    <div className="success"> Successful </div>
                )}
            </div>

            {/* If open is true show your <div /> */}
            {open && (
                <div className="hide">
                    <div className="p-top">
                        <img src={adhar} />

                        <div>
                            <input
                                type="number"
                                placeholder="enter 12 digit adhar number"
                                onChange={(e) => validateNum(e)}
                            />
                        </div>
                        <button
                            className="p-button"
                            onClick={() => handleOtp()}
                        >
                            Verify
                        </button>
                    </div>
                    {otp && (
                        <div className="p-btm">
                            <input
                                type="number"
                                placeholder="enter 6 digit OTP"
                                onChange={(e) => validateOTP(e)}
                            />
                            <button className="p-button-btm" onClick={checkOTP}>
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default Popup;
