import Facebook from "../assets/svg/Facebook";
import Insta from "../assets/svg/Insta";
import LinkedIn from "../assets/svg/LinkedIn";
import Logo from "../assets/svg/Logo";
import Twitter from "../assets/svg/Twitter";

const Footer = () => {
  return (
    <footer>
      <Logo />

      <div className="networks">
        <h3>Follow us</h3>
        <div>
          <Twitter />
          <LinkedIn />
          <Facebook />
          <Insta />
        </div>
      </div>

      <div className="links">
        <h3>Useful Links</h3>
        <ul>
          <li>Our Projects</li>
          <li>FAQ's</li>
          <li>News and Updates</li>
        </ul>
      </div>

      <div className="contact">
        <h3>Contacts</h3>
        <p>Address: 4-5 Main road, Delhi</p>
        <p>Email: educare@gmail.com</p>
        <p>Phone Number: +91 4533433265</p>
      </div>

      <div className="copyright">© All Copyrights reserved</div>
    </footer>
  );
};

export default Footer;
