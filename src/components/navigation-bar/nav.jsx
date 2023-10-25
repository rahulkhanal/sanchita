import NavCss from "./Navigation.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "none",
      color: isActive ? "#ed1c22" : "",
    };
  };
  return (
    <>
      <nav className={NavCss.Navigation}>
        <div className={NavCss.allignResponsive}>
          <div className={NavCss.Logo}>
            <h1>HelloWorld</h1>
          </div>
          <div className={NavCss.HamBurger}>
            <RxHamburgerMenu size={25} onClick={() => setShowMenu(true)} />
          </div>
        </div>
        <ul className={showMenu ? NavCss.body2 : NavCss.body}>
          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            About
          </NavLink>
          <NavLink
            to="/organization"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Organization
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Services
          </NavLink>
          <NavLink
            to="/our projects"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Our projects
          </NavLink>
          <NavLink
            to="/publication"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Publication
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/notice"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Notice
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          >
            Contact us
          </NavLink>
          <TiDelete
            size={35}
            className={NavCss.crossBtn}
            onClick={() => setShowMenu(false)}
            style={navLinkStyle}
          />
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
