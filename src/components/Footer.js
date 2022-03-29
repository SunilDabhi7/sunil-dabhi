import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="ft-header">
          <ul className="">
            <li className="ft-hdr-img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1251/1251142.png"
                alt="icn"
              />
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className="cnt-form">
          <div className="form-left">
            <input type="text" placeholder="Your Name" />
            <br />
            <input type="email" placeholder="Your Email" />
            <br />
            <textarea rows="2" cols="40" placeholder="Your Message" />
            <div className="form-btn">Send Message</div>
          </div>
          <div className="form-right">
            <p>Get in Touch</p>
            <div className="cnt-dtls">
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1053/1053515.png"
                  alt="icn"
                />
              </span>
              <span style={{ marginLeft: 10 }}>
                Jamjodhpur, Gujarat, India, 360530
              </span>
            </div>
            <div className="cnt-dtls">
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1177/1177460.png"
                  alt="icn"
                />
              </span>
              <span style={{ marginLeft: 10 }}>+91-7567555402</span>
            </div>
            <div className="cnt-dtls">
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1177/1177437.png"
                  alt="icn"
                />
              </span>
              <span style={{ marginLeft: 10 }}>sunildabhi.78@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="ftr-sociel-icn">
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
                src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
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
        <div className="cprt-name">
          &#169;<span>Sunil Dabhi</span>
        </div>
      </div>
    );
  }
}

export default Footer;
