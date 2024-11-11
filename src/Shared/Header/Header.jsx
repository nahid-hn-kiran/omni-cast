import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { navMenu } from "../../constants/constants";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ user }) => {
  const [show, setShow] = useState(false);
  const showMenuHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <header>
      <div className="container">
        <nav className="flex justify-between gap-4 py-6 items-center">
          <div className="logo-area">
            <Link to="/">
              <img src={Logo} alt="Omni cast Logo" />
            </Link>
          </div>
          <div className="menu-area flex gap-x-6 items-center">
            <div className="nav-menu col-span-2 hidden lg:block">
              <nav>
                <ul className="flex gap-x-5 items-center">
                  {navMenu.map((menu, i) => (
                    <li key={i}>
                      <Link to={menu.url} className="uppercase">
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                  {user ? (
                    <li>
                      {user?.data?.role === "super-admin" ? (
                        <Link to={`/admin/dashboard`} className="primary-btn">
                          Dashboard
                        </Link>
                      ) : (
                        <Link to={`/my-profile`} className="primary-btn">
                          My Profile
                        </Link>
                      )}
                      <button
                        className="primary-btn ml-2"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </li>
                  ) : (
                    <Link to="/login" className="primary-btn">
                      Login
                    </Link>
                  )}
                </ul>
              </nav>
            </div>
            <div className="search-bar flex items-center gap-x-5">
              <div className="search">
                <FaSearch />
              </div>
            </div>
            {/* Mobile Menu  */}
            <div className="mobile-menu lg:hidden relative">
              <div className="show-menu text-end">
                <button
                  onClick={showMenuHandler}
                  className="mobile-menu-toggler"
                >
                  {show ? <IoMdClose /> : <FaBars />}
                </button>
              </div>
              <div
                className={`${
                  show ? "block" : "hidden"
                } mobile-nav-menu absolute top-8 right-0 bg-omni-yellow p-4 z-10 transition-opacity duration-300 ease-in-out`}
              >
                <nav>
                  <ul className="flex flex-col gap-y-3 items-center">
                    {navMenu.map((menu, i) => (
                      <li key={i}>
                        <Link
                          to={menu.url}
                          className="uppercase text-omni-gray"
                        >
                          {menu.name}
                        </Link>
                      </li>
                    ))}
                    {user ? (
                      <li>
                        {user?.data?.role === `super-admin` || `admin` ? (
                          <Link to={`/admin/dashboard`} className="primary-btn">
                            Dashboard
                          </Link>
                        ) : (
                          <Link to={`/my-profile`} className="primary-btn">
                            My Profile
                          </Link>
                        )}
                        <button
                          className="primary-btn mt-2 w-full"
                          onClick={() => handleLogout()}
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <Link to="/login" className="primary-btn">
                        Login
                      </Link>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  error: PropTypes.string,
};

export default Header;
