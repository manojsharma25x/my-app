import React from 'react';
import PropTypes from 'prop-types';
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";



export default function Navbar(props) {




    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/about.js">About</a>
                        </li> */}

                    </ul>
                    <div className="form-check form-switch ms-auto">
                        <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === "light" ? `dark` : `light`}`} htmlFor="switch">Enable {props.mode === "light" ? `dark` : `light`} Mode</label>
                    </div>

                </div>

            </div>
        </nav>
    )
}
// Specifies the default values for propsTypes:
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};
// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Stranger'
};




