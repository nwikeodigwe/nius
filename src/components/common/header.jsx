import React from "react";
import { NavLink } from "react-router";

const navItems = [
  {
    label: "Home",
    to: "/",
  },

  {
    label: "About",
    to: "/about",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Community",
    to: "/community",
  },
  {
    label: "Constitution",
    to: "/constitution",
  },

  {
    label: "Contact Us",
    to: "/contact",
  },
];

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <nav>
          <ul>
            {navItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/signup" className="btn btn-primary">
            Sign up
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
