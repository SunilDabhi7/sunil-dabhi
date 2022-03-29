import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">Sunil Dabhi</div>
        <div>
          <ul className="nav-list">
            <li className="active">HOME</li>
            <li className="un-active">ABOUT</li>
            <li className="un-active">CONTACT</li>
            <li className="un-active">THINGS I LIKE TO SHARE!</li>
          </ul>
        </div>
        <div className="ham-icn">
          <a href="#nav-menu">
            <img
              src="https://cdn-icons-png.flaticon.com/512/812/812847.png"
              alt="icn"
            />
          </a>
        </div>
        <div id="nav-menu">
          <div className="menu-cls-btn">
            <span>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6318/6318560.png"
                  icn="alt"
                />
              </a>
            </span>
          </div>
          <div className="src-container">
            <div className="src-inp">
              <input type="text" placeholder="Enter something..." />
            </div>
            <div className="src-btn">Find</div>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: 20,
              borderBottom: "1px solid white",
            }}
          />
          <div className="nav-menu-list">
            <ul>
              <li>About Me</li>
              <li>Contact</li>
              <li>Things i like to share!</li>
            </ul>
          </div>
          <div className="nav-scl-icn">
            <ul>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt="icn"
                />
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="icn"
                />
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                  alt="icn"
                />
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="icn"
                />
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111450.png"
                  alt="icn"
                />
              </li>
            </ul>
          </div>
          <div
            style={{ width: 100, margin: "auto", marginTop: 20 }}
            className="cprt-name"
          >
            &#169;<span>Sunil Dabhi</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
