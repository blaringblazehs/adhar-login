import logo from "./images/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <h3 className="nav-text">Sign document using</h3>
                <p className="nav-text">sankit@digio.in</p>
            </div>

            <div className="logo">
                <img src={logo} />
                {/* <Link to="/">Home</Link>
                <Link to="/create-blog">New Blog</Link> */}
            </div>
        </nav>
    );
};
export default Navbar;
