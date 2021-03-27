import React , {useState} from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  function clickFun(){
    setClick(!click);
  }
  return (
    <>
      <section className="main-nav">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <div className="logo-con">
                <img
                  src={process.env.PUBLIC_URL + "images/startup-logo.png"}
                  alt="logo"
                  className="img-fluid"
                />
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              onClick={clickFun}
            >
              {click ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
              
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto custom-ul">
                <li className="nav-item">
                  <NavLink  to="/" activeClassName="active" exact>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="/about" activeClassName="active" exact>
                    about us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="/packages" activeClassName="active" exact>
                    packages
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink   to="/contact" activeClassName="active" exact>
                    contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Navbar;
