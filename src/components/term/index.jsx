import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Term() {
  return (
    <section className="term-section">
      <div className="tf-container">
        <Tabs className="row tf-tab">
          <div className="col-lg-4">
            <TabList className="menu-tab tab-term po-sticky">
              <Tab className="ct-tab">1. TERMS </Tab>
              <Tab className="ct-tab">2. ONLINE TERMS </Tab>
              <Tab className="ct-tab">3. GENERAL CONDITIONS</Tab>
              <Tab className="ct-tab">4. ACCURACY, COMPLETENESS, AND TIMELINESS OF INFORMATION</Tab>
              <Tab className="ct-tab">5. MODIFICATIONS TO THE SERVICE AND PRICES</Tab>
              <Tab className="ct-tab">6. ACCURACY OF BILLING AND ACCOUNT INFORMATION</Tab>
              <Tab className="ct-tab">7. OPTIONAL TOOLS</Tab>
              <Tab className="ct-tab">8. THIRD-PARTY LINKS</Tab>
              <Tab className="ct-tab">9. USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS</Tab>
              <Tab className="ct-tab">10. PERSONAL INFORMATION</Tab>
              <Tab className="ct-tab">11. ERRORS, INACCURACIES, AND OMISSIONS</Tab>
              <Tab className="ct-tab">12. PROHIBITED USES</Tab>
              <Tab className="ct-tab">13. DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</Tab>
              <Tab className="ct-tab">14. INDEMNIFICATION</Tab>
              <Tab className="ct-tab">15. SEVERABILITY</Tab>
              <Tab className="ct-tab">16. TERMINATION</Tab>
        
            </TabList>
          </div>
          <div className="col-lg-8">
            <div className="content-tab">
              <TabPanel className="term-content animation-tab">
                <h4>Terms of use</h4>
                <h6>1. Terms </h6>
                <p>
                This site is operated by HRhelpdesk Trust. Throughout this site, the terms &quot;we,&quot;&quot;us,&quot; and &quot;our&quot; refer to HRhelpdesk Trust. By using this website, you agree to the following Terms of Service. Please carefully read these terms before accessing or using our website. If you do not agree to these terms, refrain from accessing the website or using any of our services.
                </p>

                
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6>2. ONLINE TERMS</h6>
                <p>
                By accessing or using any part of the site, you confirm that you are of legal age in your state or province, or that you have given consent for any minor dependents to use the site. The use of our services for any illegal or unauthorized purpose is strictly prohibited. Any breach of these terms will result in the immediate termination of services.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                
              <h6>3. GENERAL CONDITIONS</h6>
                <p>
                We reserve the right to refuse service to anyone at any time. You acknowledge that your content may be transferred unencrypted and may involve transmissions over various networks. You agree not to reproduce, duplicate, copy, sell, or exploit any part of the service without our express written permission.
.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6>4.ACCURACY, COMPLETENESS, AND TIMELINESS OF INFORMATION</h6>
                <p>
                We do not guarantee the accuracy, completeness, or timeliness of information on this site. The material provided is for general information only, and we reserve the right to modify the content without obligation to update it.

                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6>5. MODIFICATIONS TO THE SERVICE AND PRICES</h6>
                <p>
                Prices for products are subject to change without notice. We reserve the right to modify or discontinue the service at any time without notice. We are not liable for any modification, price change, suspension, or discontinuance of the service.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> ACCURACY OF BILLING AND ACCOUNT INFORMATION</h6>
                <p>
                You agree to provide accurate and complete information for all purchases. We reserve the right to refuse any order, limit quantities, or cancel orders at our discretion.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> OPTIONAL TOOLS</h6>
                <p>
                We may provide access to third-party tools, but we have no control over their content. Your use of these tools is at your own risk.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> THIRD-PARTY LINKS</h6>
                <p>
                Certain content, products, and services may include materials from third parties. We are not responsible for third-party materials or websites.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6>USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS</h6>
                <p>
                You agree that we may use, without restriction, any submissions you provide. We are not obligated to maintain confidentiality or respond to comments.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> PERSONAL INFORMATION</h6>
                <p>
                Your submission of personal information is governed by our Privacy Policy.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> ERRORS, INACCURACIES, AND OMISSIONS</h6>
                <p>
                We are not responsible for errors, inaccuracies, or omissions in information. We reserve the right to correct errors and update information without prior notice.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> PROHIBITED USES</h6>
                <p>
                You are prohibited from using the site for any unlawful or prohibited purposes.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h6>
                <p>
                We do not guarantee uninterrupted, timely, secure, or error-free service. We are not liable for any damages arising from your use of the service.

                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> INDEMNIFICATION</h6>
                <p>
                You agree to indemnify and hold us harmless from any claims or demands arising from your breach of these Terms of Service.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> SEVERABILITY</h6>
                <p>
                If any provision of these terms is deemed unlawful, void, or unenforceable, that provision will be severed, and the remaining provisions will remain valid and enforceable.

                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
              <h6> TERMINATION</h6>
                <p>
                The obligations and liabilities incurred prior to termination will survive. We may terminate these Terms of Service at any time without notice.

                </p>
              </TabPanel>
              
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Term;
