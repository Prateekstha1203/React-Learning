import React from "react";
import { socialLinks } from "./data";

const IconComponent = ({ parentClassName, childClassName }) => {
  return (
    <ul className={parentClassName} id={parentClassName}>
      {socialLinks.map((socialLink) => {
        return (
          <li key={socialLink.id}>
            <a
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              className={childClassName}
            >
              <i className={socialLink.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default IconComponent;
