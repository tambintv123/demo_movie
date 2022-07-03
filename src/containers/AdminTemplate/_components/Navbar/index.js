import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <NavLink className="navbar-brand" to="/admin/dashboard">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "my-active nav-link" : "nav-link"
                  }
                  to="/admin/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "my-active nav-link" : "nav-link"
                  }
                  to="/admin/add-movie"
                >
                  Add Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "my-active nav-link" : "nav-link"
                  }
                  to="/admin/add-user"
                >
                  Add User
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
