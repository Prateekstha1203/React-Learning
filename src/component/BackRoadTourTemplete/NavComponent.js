import React from "react";
import { navLinks } from "./data";
const NavComponent = ({parentClassName,childClassName}) => {
  return (
    <ul className={parentClassName} id={parentClassName}>
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <a href={navLink.href} className={childClassName}>
            {navLink.content}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavComponent;
