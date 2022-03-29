import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left-main">
          <p>Welcome</p>
          <p>to the</p>
          <p>
            <span className="wlcm-name">Sunil Dabhi</span>
          </p>
          <p>website!</p>
          <div className="abt-btn">KNOW ABOUT ME</div>
        </div>

        <div className="alt-left-main">
          <p>Welcome</p>
          <p>to the</p>
          <p>
            <span className="wlcm-name">Sunil Dabhi</span>
          </p>
          <p>website!</p>
          <div className="abt-btn">KNOW ABOUT ME</div>
        </div>

        <div className="right-main">
          <img src="https://i.postimg.cc/4dW8t9yX/profile.jpg" alt="img" />
        </div>
      </div>
    );
  }
}

export default Main;
