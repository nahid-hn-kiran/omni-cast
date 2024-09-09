import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { navMenu } from "../../constants/constants";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="grid grid-cols-3 gap-4 py-6 items-center">
          <div className="logo-area">
            <Link to="/">
              <img src={Logo} alt="Omni cast Logo" />
            </Link>
          </div>
          <div className="menu-area col-span-2 grid grid-cols-3">
            <div className="nav-menu col-span-2">
              <nav>
                <ul className="flex gap-x-5">
                  {navMenu.map((menu, i) => (
                    <li key={i}>
                      <Link to="/" className="uppercase">
                        {menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="search-bar flex items-center gap-x-5">
              <Link to="/" className="primary-btn">
                Donate
              </Link>
              <div className="search">
                <FaSearch />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
