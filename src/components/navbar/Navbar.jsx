import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./Sidebar";
import "./navbar.css";
import { Mail, GitHub } from "@material-ui/icons";

const Navbar = () => {
  const [sideBar, setsideBar] = useState(false);
  const showSideBar = () => setsideBar(!sideBar);
  return (
    <>
      <div className="navbar sticky-nav">
        <div className="left">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSideBar} />
          </Link>
        </div>
        <div className="right">
          <div className="item">
              <a href="https://github.com/shalaka-kapure" target="_blank" rel="noreferrer">
            <div>
              <GitHub className="icon" />
              <div>shalaka-kapure</div>
            </div>
              </a>
            <div>
              <Mail className="icon" />
              <div>shalakakapure@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
