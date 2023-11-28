import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Privacy() {
  return (
    <section className="term-section">
      <div className="tf-container">
        <Tabs className="row tf-tab">
          <div className="col-lg-4">
            <TabList className="menu-tab tab-term po-sticky">
              <Tab className="ct-tab">
                1. WHAT DO WE DO WITH YOUR INFORMATION?{" "}
              </Tab>
              <Tab className="ct-tab">2. CONSENT </Tab>
              <Tab className="ct-tab">3. GENERAL CONDITIONS</Tab>
              <Tab className="ct-tab">4. DISCLOSURE</Tab>
              <Tab className="ct-tab">5. PAYMENT</Tab>
              <Tab className="ct-tab">6. THIRD-PARTY SERVICES</Tab>
              <Tab className="ct-tab">7. SECURITY</Tab>
              <Tab className="ct-tab">8. COOKIES</Tab>
              <Tab className="ct-tab">9. AGE OF CONSENT</Tab>
              <Tab className="ct-tab">10. CHANGES TO THIS PRIVACY POLICY</Tab>
              <Tab className="ct-tab">11. NO LIABILITY</Tab>
              
            </TabList>
          </div>
          <div className="col-lg-8">
            <div className="content-tab">
              <TabPanel className="term-content animation-tab">
                <h6>1. WHAT DO WE DO WITH YOUR INFORMATION? </h6>
                <p>
                  When you make a payment to us, as part of the donation, buying
                  and selling process, we collect the personal information you
                  give us such as your name, address, and email address. When
                  you browse our website, we also automatically receive your
                  computer’s internet protocol (IP) address in order to provide
                  us with information that helps us learn about your browser and
                  operating system. Email marketing (if applicable): With your
                  permission, we may send you emails about our work, new
                  products, and other updates.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>2. CONSENT</h6>
                <p>
                  How do you get my consent? When you provide us with personal
                  information to complete a transaction, verify your credit
                  card, place an order, arrange for a delivery, make a donation
                  or return a purchase, we imply that you consent to our
                  collecting it and using it for that specific reason only. If
                  we ask for your personal information for a secondary reason,
                  like marketing, we will either ask you directly for your
                  expressed consent or provide you with an opportunity to say
                  no, every email marketing update has an unsubscribe option,
                  while we try not to spam you or send unsolicited mail, please
                  do unsubscribe should you get it and we promise, once
                  unsubscribed, you will not get it again, as we manage our
                  updates through a third-party provider. How do I withdraw my
                  consent? If after you opt-in, you change your mind, you may
                  withdraw your consent for us to contact you, for the continued
                  collection, use, or disclosure of your information, at any
                  time, by unsubscribing
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>3. GENERAL CONDITIONS</h6>
                <p>
                  We reserve the right to refuse service to anyone at any time.
                  You acknowledge that your content may be transferred
                  unencrypted and may involve transmissions over various
                  networks. You agree not to reproduce, duplicate, copy, sell,
                  or exploit any part of the service without our express written
                  permission. .
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>4.DISCLOSURE</h6>
                <p>
                  We may disclose your personal information (including PAN
                  number) if we are required by law to do so or if you violate
                  our Terms of Service.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>5. PAYMENT</h6>
                <p>
                  We use Razorpay for processing payments. We/Razorpay do not
                  store your card data on their servers. The data is encrypted
                  through the Payment Card Industry Data Security Standard
                  (PCI-DSS) when processing payment. Your purchase transaction
                  data is only used as long as is necessary to complete your
                  purchase transaction. After that is complete, your purchase
                  transaction information is not saved. Our payment gateway
                  adheres to the standards set by PCI-DSS as managed by the PCI
                  Security Standards Council, which is a joint effort of brands
                  like Visa, MasterCard, American Express, and Discover. PCI-DSS
                  requirements help ensure the secure handling of credit card
                  information by our store and its service providers. For more
                  insight, you may also want to read the terms and conditions of
                  Razorpay on https://razorpay.com
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>6. THIRD-PARTY SERVICES</h6>
                <p>
                  In general, the third-party providers used by us will only
                  collect, use, and disclose your information to the extent
                  necessary to allow them to perform the services they provide
                  to us. However, certain third-party service providers, such as
                  payment gateways and other payment transaction processors,
                  have their own privacy policies with respect to the
                  information we are required to provide to them for your
                  purchase-related transactions. For these providers, we
                  recommend that you read their privacy policies so you can
                  understand the manner in which your personal information will
                  be handled by these providers. In particular, remember that
                  certain providers may be located in or have facilities that
                  are located in a different jurisdiction than either you or us.
                  So if you elect to proceed with a transaction that involves
                  the services of a third-party service provider, then your
                  information may become subject to the laws of the
                  jurisdiction(s) in which that service provider or its
                  facilities are located. Once you leave our website or are
                  redirected to a third-party website or application, you are no
                  longer governed by this Privacy Policy or our website’s Terms
                  of Service. Links When you click on links on our website, they
                  may direct you away from our site. We are not responsible for
                  the privacy practices of other sites and encourage you to read
                  their privacy statements.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>7. SECURITY</h6>
                <p>
                  To protect your personal information, we take reasonable
                  precautions and follow industry best practices to make sure it
                  is not inappropriately lost, misused, accessed, disclosed,
                  altered, or destroyed
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>8. COOKIES</h6>
                <p>
                  We use cookies to maintain the session of your user. It is not
                  used to personally identify you on other websites.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>9. AGE OF CONSENT</h6>
                <p>
                  By using this site, you represent that you are at least the
                  age of majority in your state or province of residence, or
                  that you are the age of majority in your state or province of
                  residence and you have given us your consent to allow any of
                  your minor dependents to use this site.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>10. CHANGES TO THIS PRIVACY POLICY</h6>
                <p>
                  We reserve the right to modify this privacy policy at any
                  time, so please review it frequently. Changes and
                  clarifications will take effect immediately upon their posting
                  on the website. If we make material changes to this policy, we
                  will notify you here that it has been updated, so that you are
                  aware of what information we collect, how we use it, and under
                  what circumstances, if any, we use and/or disclose it. If our
                  website is acquired or merged with another company, your
                  information may be transferred to the new owners so that we
                  may continue to sell products to you.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>11. NO LIABILITY</h6>
                <p>
                  We take no liability and shall not indemnify you should there
                  be any damage to you, your network or computer systems, due
                  care has been taken to protect our website from harming
                  visitors and to protect from spreading malware, however, it
                  shall be your responsibility in case of any such damage is
                  caused to you whether directly or indirectly associate with
                  our websites. QUESTIONS AND CONTACT INFORMATION If you would
                  like to: access, correct, amend or delete any personal
                  information we have about you, register a complaint, or simply
                  want more information contact our Privacy Compliance Officer
                  at empower@mahilabol.org
                </p>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Privacy;
