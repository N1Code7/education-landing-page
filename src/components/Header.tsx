import ArrowDown from "../assets/svg/ArrowDown";
import Logo from "../assets/svg/Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <Logo />

      <nav>
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
