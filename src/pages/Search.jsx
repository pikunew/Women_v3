import React, { useEffect, useState } from "react";
import Header4 from "../components/header/Header4";
import Footer from "../components/footer";
import { Link, useLocation } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import logo from "../assets/images/logo.png";
import JobSec1 from "../components/search/JobSec1";


function Search() {
  // const { data } = props;

  const location = useLocation();
  const searchKeyword = new URLSearchParams(location.search).get("keyword");
  const searchLocation = new URLSearchParams(location.search).get("location");
  const pageNumber =
    new URLSearchParams(location.search).get("pageNumber") || 1;
  const searchKey = searchKeyword ? `keyword=${searchKeyword}` : "";
  const locationKey = searchLocation ? `&location=${searchLocation}` : "";
  const [dataJobs, setDataJobs] = useState([]);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint URL
    setLoading((prev) => (!prev ? true : prev));

    const apiUrl = `https://womenhelpline-backend.onrender.com/api/helplines/show?${searchKey}${locationKey}&pageNumber=${pageNumber}`;

    // Make a GET request to the API
    fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Something went wrong...");
      return response.json();
    })
    .then((data) => {
      setDataJobs(data.helplines);
      setCount(data.count);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      setLoading(false);
    });
}, [searchLocation, searchKeyword, pageNumber, searchKey, locationKey]);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        ...toggle,
        status: false,
      });
    } else {
      setToggle({
        key,
        status: true,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Women Helpline" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab">
              <Tab className="user-tag">Menu</Tab>
              <Tab className="user-tag">Categories</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="">
                        <Link
                          to="/"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/search"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          Helpline Numbers
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/aboutus"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          About Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/contactus"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("pages");
                          }}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>

              <TabPanel className="categories animation-tab">
                <div className="sub-categorie-mobile">
                  <ul className="pop-up">
                    <li className="categories-mobile">
                      <Link to="/Search">Crime</Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/Search">Business and Career</Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/Search">Family related</Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </div>
          </Tabs>

          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <Link to="tel:01244007444">0124-4007444</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="https://www.facebook.com/MahilaBol/">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>

                <li>
                  <Link to="https://twitter.com/amar_hrhelpdesk?lang=en">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>

                <li>
                  <Link to="https://www.instagram.com/hrhelpdesk/">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/@hrhelpdeskdotin/videos">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Header4 clname="actJob1" handleMobile={handleMobile} />

      {dataJobs.length > 0 && (
      <JobSec1
        data={dataJobs}
        count={count}
        searchKey={searchKey}
        locationKey={locationKey}
        loading={loading}
      />
    )}

      <Footer />
      {/* <Gotop /> */}
    </>
  );
}

export default Search;
