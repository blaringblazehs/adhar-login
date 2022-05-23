import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { TiSocialGooglePlus } from "react-icons/fa";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            {/* <Login /> */}
        </div>
    );
}

export default App;
