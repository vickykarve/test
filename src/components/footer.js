import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../index.css"


const Footer = () => {
  const isBackgroundRed = true;
  return (
    <div className="footer" >
       <div  >
      <footer class="py-3 bg-light text-dark">
      <div class="container text-justify">
       
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="footer-widget">
                        <h4>About Barber's Choice</h4>
                        <p>This web application is an initiative to help Barber's directly connect to  providers and vice versa.</p>
                        <p>The main objective behind developing this application is to reduce the involvement of wholesalers in the middle due to which the goods reaching consumers are over-rated.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="footer-link">
                        <h4>Terms and Conditions</h4>
                        <ul>
                          <li
                          >
                            <Link class="nav-link" to="/terms-and-conditions">
                              Terms &amp; Conditions
                            </Link>
                          </li>

                          <li
                          >
                            <Link class="nav-link" to="/privacy-policy">
                              Privacy Policy
                            </Link>
                          </li>

                          
                        </ul>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="footer-link-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <p><i class="fas fa-map-marker-alt"></i>Address:<br/>Borivli, Mumbai,<br/>Maharashtra, India</p>
                            </li>
                            <li>
                                <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+91-8600619570">+91-9172356224</a></p>
                            </li>
                            <li>
                                <p><i class="fas fa-envelope"></i>Email: <a href="mailto:Barber's_Choice@gmail.com">barber's_choice@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default Footer;