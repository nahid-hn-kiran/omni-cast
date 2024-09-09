import { Link } from "react-router-dom";
import Logo from "../../assets/images/footer-logo.png";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-5 gap-x-16 footer-top">
          <div className="footer-logo-area">
            <Link to="/">
              <img src={Logo} alt="Footer Logo" />
            </Link>
            <p className="common-text mt-4 text-omni-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
          </div>
          <div className="footer-menu-area col-span-4 grid grid-cols-4">
            <div className="footer-menu">
              <h3 className="footer-menu-title">Support Us</h3>
              <ul className="mt-6">
                <li>
                  <Link to="/">Donate</Link>
                </li>
                <li>
                  <Link to="/">Become a member</Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h3 className="footer-menu-title">Quicklimes activates</h3>
              <ul className="mt-6">
                <li>
                  <Link to="/">Episodes</Link>
                </li>
                <li>
                  <Link to="/">List</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Subscribe</Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h3 className="footer-menu-title">Podcast</h3>
              <ul className="mt-6">
                <li>
                  <Link to="/">Popular</Link>
                </li>
                <li>
                  <Link to="/">Latest</Link>
                </li>
                <li>
                  <Link to="/">Recommended</Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h3 className="footer-menu-title">Social Media</h3>
              <p className="common-text text-omni-white mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
              <div className="footer-social-media flex gap-x-4 mt-6">
                <p className="footer-social">
                  <Link to="/">
                    <FaFacebookF />
                  </Link>
                </p>
                <p className="footer-social">
                  <Link to="/">
                    <FaXTwitter />
                  </Link>
                </p>
                <p className="footer-social">
                  <Link to="/">
                    <FaLinkedinIn />
                  </Link>
                </p>
                <p className="footer-social">
                  <Link to="/">
                    <FaYoutube />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright */}
        <p className="footer-copyright text-omni-white text-center pt-6 pb-11">
          &copy;{thisYear} All rights reserved by OmniCast
        </p>
      </div>
    </footer>
  );
};

export default Footer;
