import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import logo from "../../assets/images/logo-white.png";
import logo2 from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

Header.propTypes = {
  handleMobile: PropTypes.func.isRequired,
};

function Header({ handleMobile }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);
  
  return (
    <header
      id="header"
      className={`header header-default style-absolute header-fixed ${
        scroll ? "is-fixed is-small" : ""
      }`}
    >
      <div className="tf-container ct2">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src={logo}
                      alt="Women Helpline"
                    />
                    <img
                      className="logo-none"
                      id="trans-logo"
                      src={logo2}
                      alt="Women Helpline"
                    />
                  </Link>
                </div>
                <div className="categories">
                  <Link to="#">
                    <span className="icon-grid"></span>Issues
                  </Link>
                  <div className="sub-categorie">
                    <ul className="pop-up">
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-8"></span>
                          Crime
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Crimes</h6>
                            <ul>
                              <li>
                                <Link to="/search?keyword=rape&pageNumber=1">
                                  Rape
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Sexual Harassment&pageNumber=1">
                                  Sexual Harassment
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Dowry Harrasment&pageNumber=1">
                                  Dowry Harassment
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Suicidal Tendicies&pageNumber=1">
                                  Suicidal Tendicies
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Stalking&pageNumber=1">
                                  Stalking
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/search?keyword=Cyberbullying&pageNumber=1">
                                  Cyberbullying
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Bullying&pageNumber=1">
                                  Bullying
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Death Threat&pageNumber=1">
                                  Death Threat
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Blackmailing&pageNumber=1">
                                  Blackmailing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-8"></span>
                          Business and Career
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Business and Career</h6>
                            <ul>
                              <li>
                                <Link to="/search?keyword=Career counselling&pageNumber=1">
                                  Career counselling
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Workplace issues&pageNumber=1">
                                  Workplace issues
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Maternity Related&pageNumber=1">
                                  Maternity Related
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Salary, Wage, Benefits, Leave&pageNumber=1">
                                  Salary, Wage, Benefits, Leave
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-2"></span>
                          Family related
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Family related</h6>
                            <ul>
                              <li>
                                <Link to="/search?keyword=Relationship&pageNumber=1">
                                  Relationship
                                </Link>
                              </li>
                              <li>
                                <Link to="/search?keyword=Cheating or Adultary&pageNumber=1">
                                  Cheating or Adultary
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            {" "}
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>

                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="#"></span>
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* blank */}
                      <li>
                        <Link to="#">
                          <span className="#"></span>
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <ul>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                              <li>
                                <Link to="/#"></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* blank */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-ct-center">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li>
                        <Link to="/">Home </Link>
                      </li>
                      <li>
                        <Link to="/search">Helpline Numbers </Link>
                      </li>

                      {/* about */}
                      <li>
                        <Link to="/aboutus">About Us</Link>
                      </li>

                      <li>
                        <Link to="/contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <button className="select-language">Choose Language</button>
              <div className="nav-filter" onClick={handleMobile}>                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
