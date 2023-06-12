import React from "react";
import { navLinks } from "./data";
import NavComponent from "./NavComponent";
import IconComponent from "./IconComponent";
const Footer = () => {
  return (
    <footer className="section footer">
      <NavComponent
        parentClassName="footer-links"
        childClassName="footer-link"
      />
      <IconComponent parentClassName="footer-icons" childClassName="footer-icon" />
      <ul className="footer-icons">
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer-icon"
          >
            <i className="fab fa-squarespace" />
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright © 2020 Prateek Shrestha
        <span id="date" /> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
