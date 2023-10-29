import { useState } from "react";
import ArrowDown from "../assets/svg/ArrowDown";
import Logo from "../assets/svg/Logo";
import Button from "./Button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <Logo />

      <button
        className={`burger ${openMenu ? "active" : ""}`}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`${openMenu ? "active" : null}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            Courses <ArrowDown />
          </li>
          <li>
            Blog <ArrowDown />
          </li>
        </ul>

        <Button type="primary">Contact us</Button>
      </nav>
    </header>
  );
};

export default Header;
