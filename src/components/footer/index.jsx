import React from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';

Footer.propTypes = {};

function Footer() {


  const [state, handleSubmit] = useForm("xyyqaklz");
  if (state.succeeded) {
      return <p className="thanks">Thank you for subscribing.<span>!</span></p>;
  }
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <div className="footer-logo">
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="images"
                />
              </div>
            </div>
            <div className="col-lg-10 col-md-8">
              <div className="wd-social d-flex aln-center">
                <span>Follow Us:</span>
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
      </div>

      <div className="inner-footer">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-cl-1">
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
                      <Link to="tel:0123456678">0124-4007444</Link>
                    </h6>
                  </div>
                </div>
                <p>A Helpline for women!</p>
                <div className="ft-icon">
                  {" "}
                  <i className="icon-map-pin"></i> Lajpat Nagar 3, New
                  Delhi-110024 , India
                </div>
                <form id="subscribe-form" onSubmit={handleSubmit} >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required=""
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <button
                    className="tf-button"
                    type="submit"
                    id="subscribe-button"
                    disabled={state.submitting}
                  >
                    <i className="icon-paper-plane-o"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="bt-left">
                <div className="copyright">
                  ©2023 HRHelpdesk Trust. All Rights Reserved.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="menu-bottom d-flex aln-center">
                <li>
                  <Link to="/termsofuse">Terms Of Use</Link>{" "}
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>{" "}
                </li>
                <li>
                  <Link to="/cookiespolicy">Cookie Policy</Link>{" "}
                </li>
                <li>
                  <Link to="/login">Login</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
