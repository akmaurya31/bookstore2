import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer" className="section-footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-3">
              <h5>Office Address</h5>
              <ul className="list-unstyled quick-links">
                <li className="mb-1"><a href="https://www.google.com/maps/place/BFC+Publications+Private+Limited/@26.851438,81.027157,17z/data=!4m5!3m4!1s0x0:0x91ec369254659c77!8m2!3d26.8514383!4d81.027157?hl=en" target="_blank"><i className="fa fa-map-marker mr-2" aria-hidden="true" /> BFC Publications Pvt Ltd, CP-61, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</a></li>
                <li className="mb-1"><a href="tel:05223514141"><i className="fa fa-phone mr-2" aria-hidden="true" /> +915223514141 </a> </li>
                <li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=support@bfcpublications.com&cc=support@bfcpublications.com&bcc=support@bfcpublications.com&su=SUBJECT&body=BODY&tf=1"><i className="fa fa-envelope mr-2" aria-hidden="true" /> support@bfcpublications.com </a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="home"><i className="fa fa-angle-double-right" aria-hidden="true" />Home</a></li>
                {/* <li><a href="about.html"><i className="fa fa-angle-double-right" aria-hidden="true" />About</a></li> */}
                <li><a href="https://bfcpublications.com/contact-us"><i className="fa fa-angle-double-right" aria-hidden="true" />Contact Us</a></li>
                <li><a href="home"><i className="fa fa-angle-double-right" aria-hidden="true" />Book Store</a></li>
                <li><a href="https://bfcpublications.com/packages"><i className="fa fa-angle-double-right" aria-hidden="true" />Packages</a></li>
                <li><a href="https://bfcpublications.com/services"><i className="fa fa-angle-double-right" aria-hidden="true" />Services</a></li>
                <li><a href="faq.html"><i className="fa fa-angle-double-right" aria-hidden="true" />FAQs</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <h5>Legal</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="https://bfcpublications.com/term-condition"><i className="fa fa-angle-double-right" aria-hidden="true" /> Terms and Conditions</a></li>
                <li><a href="https://bfcpublications.com/privacy-policy"><i className="fa fa-angle-double-right" aria-hidden="true" /> Privacy Policy</a></li>
                <li><a href="https://bfcpublications.com/legal-desclimer"><i className="fa fa-angle-double-right" aria-hidden="true" /> Legal Disclaimer</a></li>
                <li><a href="https://bfcpublications.com/refund-cancellation"><i className="fa fa-angle-double-right" aria-hidden="true" /> Refund and Cancellation Policy</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <h5>Downloads</h5>
              <ul className="list-unstyled quick-links">
                <li className="mb-2 mt-1"><a href="#" className><img src="http://pubweb.bfcgroup.in/images/fevicon/android-store-40.png" className="rounded" /></a></li>
                <li><a href="#" className><img src="http://pubweb.bfcgroup.in/images/fevicon/apple-store.png" className="rounded" /></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://www.facebook.com/BFC-Publications-663170264296179" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/BfcPublications" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/bfc_publications/"><i className="fa fa-instagram" target="_blank" aria-hidden="true" /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/company/bfc-publications/ " target="_blank"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                <li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=support@bfcpublications.com&cc=support@bfcpublications.com&bcc=support@bfcpublications.com&su=SUBJECT&body=BODY&tf=1" target="_blank"><i className="fa fa-envelope" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-light">
              {/*<p class="text-light"><u><a href="#">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>*/}
              <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://bfcpublications.com/" target="_blank">BFC Publications</a></p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
