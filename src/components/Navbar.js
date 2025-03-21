import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="demo">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.tMode("primary");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.tMode("success");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.tMode("danger");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.tMode("warning");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
             <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.tMode("light");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
             <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                props.tMode("dark");
              }}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            ></div>
          </div> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.tMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

// Navbar.defaultProps = { title: "Set title here"};
