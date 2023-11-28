import React from "react";
import img1 from "../../assets/images/review/thumb2.png";

function Review() {
  // const [viewPortEntered, setViewPortEntered] = useState(false);

  // const onVWEnter = () => {
  //   setViewPortEntered(true);
  // };

  return (
    <section className="inner-review-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="wd-review-job thumb2 widget-counter stc">
              <div className="thumb">
                <img src={img1} alt="Women Helpline" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 wow fadeInRight">
            <div className="wd-review-job contentbox1 page-text stc">
              <h3>About Us</h3>
              <p>
                Women Helpline is a social initiative of HRhelpdesk Trust, a
                public charitable trust registered in March 2018. The NGO is
                focused at various Women empowerment related matters, we have
                educated, trained, provided advise, funded and rescued women. We
                are here to make a change. You can know more about us by
                visiting our Website, writing to us or just calling us.
                <br />
                <br />
              </p>
              <h4 className="creden">Our credentials are as follows</h4>
              <br />
              <p>
                1. The NGO is registered in 2018 in New Delhi as a Public
                Charitable Trust bearing registration number 339 with the legal
                name HRhelpdesk Trust 2. Approval has been granted by Income Tax
                department for 12AA via document number AABTH8589GE2021201 dated
                24 September 2021 3. Approval has been granted by Income Tax
                department for 80G via document number AABTH8589GF2021001 dated
                24 September 2021 4. The NGO is registered in Darpan portal and
                also has CSR 1 form from MCA
              </p>

              <br />
              <p>
                1. The NGO is registered in 2018 in New Delhi as a Public
                Charitable Trust bearing registration number 339 with the legal
                name HRhelpdesk Trust <br/><br/>2. Approval has been granted by Income Tax
                department for 12AA via document number AABTH8589GE2021201 dated
                24 September 2021 <br/><br/>3. Approval has been granted by Income Tax
                department for 80G via document number AABTH8589GF2021001 dated
                24 September 2021 <br/><br/>4. The NGO is registered in Darpan portal and
                also has CSR 1 form from MCA
              </p>
              <br />
              <p>
                If you would like to make donations, please visit the site
                www.mahilabol.org and click to Donate button, as of today our
                systems and processes do not allow to take donations that are in
                Cash or are in Foreign Currency. If you would like to make
                donation by cheque or a direct bank transfer, please do write to
                us at empower@mahilabol.org and we would be happy to talk to
                you.
              </p>
              <br/>
              <strong>Do write to us and let us know how we can enhance our contribution to the society.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
