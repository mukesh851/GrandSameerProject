import './Footer.css'
import { BsGlobe } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="footer__top">
          <div className="footer-container1">
            <div className='footer-logo-container'>

              <a href="/global/" className="footer-logo-link">
                <div className='footer-logo-main'>
                  <div className='footer-logo-shape'>
                    <BsGlobe className="footer-global-logo" />
                  </div>
                  <div className='footer-logo-heading'>
                    <h2>Grand Sameer Events Pvt. Ltd.</h2>
                  </div>
                </div>

              </a>
            </div>





          </div>

          <div className='footer-container2'>
            <div className='footer-innner'>
              <div className='footer-navigation'>
                <h3 className="footer__title">
                  <a href="/global/solutions/">Our Solutions</a>
                </h3>
                <ul className="accordion__collapse">
                  <li>
                    <a href="/global/solutions/event-space-sales/">Event Space Sales
                    </a>
                  </li>
                  <li>
                    <a href="/global/solutions/event-space-rental/">Event Space Rent</a>
                  </li>
                  <li>
                    <a href="/global/solutions/commercial-space/">Commercial Space</a>
                  </li>
                </ul>
              </div>
            </div>


            <div className='footer-innner'>
              <div className="footer__navigation">
                <h3 className="footer__title " >
                </h3>

                <ul className="accordion__collapse ">
                  <li>
                    <a href="/global/solutions/event-space-rental/sport-events/">Sport Events</a>
                  </li>
                  <li>
                    <a href="/global/solutions/commercial-space/warehousing-storage/">Warehousing &amp; Storage</a>
                  </li>
                  <li>
                    <a href="/global/solutions/event-space-rental/exhibitions-congresses/">Exhibitions &amp; Congresses</a>
                  </li>
                  <li>
                    <a href="/global/solutions/rapid-deployment-space/emergency-housing/">Emergency Housing</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='footer-innner'>
              <div className="footer__navigation">
                <h3 className="footer__title" >
                  <a href="/global/products-services/">Products Services</a>
                </h3>

                <ul className="accordion__collapse">
                  <li>
                    <a href="/global/products-services/event-space/">Event Space Products</a>
                  </li>
                  <li>
                    <a href="/global/products-services/commercial-space/">Commercial Space Products</a>
                  </li>
                  <li>
                    <a href="/global/cases/">Inspiring Cases</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='footer-innner'>
              <div className="footer__navigation">
                <h3 className="footer__title">
                  <a href="/global/solutions/">Our Expertise</a>
                </h3>

                <ul className="accordion__collapse">
                  <li>
                    <a href="/global/why-losberger-de-boer/">Why LDB</a>
                  </li>
                  <li>
                    <a href="/global/about-us/">About us</a>
                  </li>
                  <li>
                    <a href="/global/insights/">Professional Insights</a>
                  </li>
                  <li>
                    <a href="/global/news/">News Overview</a>
                  </li>

                </ul>
              </div>
            </div>

            <div className='footer-innner2' id='footer-innerID'>
              <div className='footer-inner-container'>
                <h3 className="footer__title-container">
                  Contact details
                </h3>
                <address className='accordian-address'>
                  <p>
                    Grand Sameer Events Pvt. Ltd.
                  </p>
                  {/* <br></br> */}
                  <a href="tel: +31725400444">+31 72 5400444</a>
                  <br></br>
                  <br></br>
                  <span>
                    Losberger GmbH
                    {/* <br></br> */}
                    <br></br>
                    <a href="tel: +4970669800">+49 7066 980-0</a>
                    <br></br>
                  </span>
                </address>
              </div>
            </div>

          </div>

          <div className='footer-container3'>
            <div className='email-part-container'>

              <div className='email-container'>
                <div className='email-details'>
                  <h3>Sign up for the newsletter</h3>
                  <p>You will receive an e-mail every month</p>
                </div>

                <div className='email-svg'>
                  <div className='email-enter'>
                    <input type='email' placeholder='E-mail address'></input>
                  </div>

                  <button type="submit" className="newsletter__submit" >
                    <GiPlayButton className="email-submit-icon"/>
                  </button>
                </div>


              </div>
              <div className='email-rightPart'>
                <h3>Engage with us on:</h3>
                <div className="social social--inv">
                  <ul className= "social__list">
                    <li className="social__item">
                      <a href="">
                        <FaLinkedinIn className="social-media-icon" />
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="">
                        <FaYoutube className="social-media-icon" />
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="" >
                        <FaFacebookF className="social-media-icon" />
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="" >
                        <FaInstagram className="social-media-icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </footer>
    </div>

  )
}

export default Footer

