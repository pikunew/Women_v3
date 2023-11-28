import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Cookies() {
  return (
    <section className="term-section">
      <div className="tf-container">
        <Tabs className="row tf-tab">
          <div className="col-lg-4">
            <TabList className="menu-tab tab-term po-sticky">
              <Tab className="ct-tab">1. INRODUCTION </Tab>
              <Tab className="ct-tab">2. WHAT ARE COOKIES? </Tab>
              <Tab className="ct-tab">3. HOW WE USE COOKIES</Tab>
              <Tab className="ct-tab">4. YOUR CONSENT</Tab>
              <Tab className="ct-tab">5. MANAGING COOKIES</Tab>
              <Tab className="ct-tab">6. CHANGES TO THIS POLICY</Tab>
              <Tab className="ct-tab">7. CONTACT US</Tab>
            </TabList>
          </div>
          <div className="col-lg-8">
            <div className="content-tab">
              <TabPanel className="term-content animation-tab">
                <h6>1. Introduction </h6>
                <p>
                  Welcome to womenhelpline.in (the &quot;Website&quot;). This Cookie
                  Policy is designed to help you understand how and why we use
                  cookies and similar technologies on our website. By using our
                  website, you consent to the use of cookies in accordance with
                  this policy.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>2. What are Cookies?</h6>
                <p>
                  Cookies are small text files that are stored on your device
                  (computer, tablet, mobile phone) when you visit a website.
                  They are widely used to make websites work more efficiently,
                  improve user experience, and provide information to website
                  owners.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>3. How We Use Cookies</h6>
                <p>
                  <h6 className="cookie"> We use cookies for various purposes, including but not limited
                  to:</h6>
                  <br />
                  <ul>
                    <li>
                      <p>
                        Essential Cookies: These are necessary for the proper
                        functioning of our website. They enable core
                        functionality, such as security, network management, and
                        accessibility.
                      </p>
                    </li>
                    <li>
                      <p>
                        Analytical/Performance Cookies: These cookies help us
                        understand how visitors interact with our website by
                        collecting and reporting information anonymously. We use
                        this information to improve our website and enhance user
                        experience.
                      </p>
                    </li>
                    <li>
                      <p>
                        Functionality Cookies: These cookies enable personalized
                        features, such as remembering user preferences and
                        settings.
                      </p>
                    </li>
                    <li>
                      <p>
                        Targeting Cookies: These cookies may be set through our
                        site by our advertising partners. They may be used to
                        build a profile of your interests and show you relevant
                        ads on other sites.
                      </p>
                    </li>
                  </ul>
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>4. Your Consent</h6>
                <p>
                  By using our website, you consent to the use of cookies in
                  accordance with this Cookie Policy. If you do not agree to the
                  use of cookies, you may disable or manage cookies through your
                  browser settings. Please note that disabling certain cookies
                  may impact the functionality of our website.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>5. Managing Cookies</h6>
                <p>
                  Most web browsers allow you to control cookies through their
                  settings. You can configure your browser to accept or reject
                  all cookies, or notify you when a cookie is set. For more
                  information on how to manage cookies, visit the help pages of
                  your browser.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>6. Changes to This Policy</h6>
                <p>
                  We may update our Cookie Policy from time to time. Any changes
                  will be posted on this page with an updated revision date. We
                  encourage you to review this policy periodically for any
                  changes.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>7. Contact Us</h6>
                <p>
                  If you have any questions or concerns about our Cookie Policy,
                  please contact us at [empower@mahilabol.org]. This Cookie
                  Policy is part of our Privacy Policy, which provides more
                  information about how we collect, use, and protect your data.
                </p>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Cookies;
