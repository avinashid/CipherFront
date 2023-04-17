import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaInstagram,
} from "react-icons/fa";

const OnTheWeb = () => {
  return (
    <div className="onWeb">
      <div className="onWebWrap">
        <div className="head">
          <div className="title">ON THE WEB</div>
          <div className="editBtn">
            <button>Edit</button>
          </div>
        </div>
        <div className="inputWrapper">
          <div className="inputContain">
            <div className="text">LinkedIn</div>
            <div className="inputElem">
              <FaLinkedin />
              <input type="text" placeholder="LinkedIn" />
            </div>
          </div>
          <div className="inputContain">
            <div className="text">Github</div>
            <div className="inputElem">
              <FaGithub />
              <input type="text" placeholder="Github" />
            </div>
          </div>
          <div className="inputContain">
            <div className="text">Twitter</div>
            <div className="inputElem">
              <FaTwitter />
              <input type="text" placeholder="Twitter" />
            </div>
          </div>
          <div className="inputContain">
            <div className="text">Facebook</div>
            <div className="inputElem">
              <FaFacebook />
              <input type="text" placeholder="Facebook" />
            </div>
          </div>
          <div className="inputContain">
            <div className="text">Instagram</div>
            <div className="inputElem">
              <FaInstagram />
              <input type="text" placeholder="Instagram" />
            </div>
          </div>
          <div className="inputContain">
            <div className="text">Website</div>
            <div className="inputElem">
              <FaGlobe />
              <input type="text" placeholder="Your Website" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnTheWeb;
