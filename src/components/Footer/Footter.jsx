import './Footer.css'
import { BsGlobe } from "react-icons/bs";


const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="footer__top">
          <div className="footer-container1">
            <div className='footer-logo-container'>

              <a href="/global/" class="footer-logo-link">
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
                <h3 class="footer__title-container">
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

                <div className='emai-svg'>

                  <div className='email-enter'>
                    <input type='email' placeholder='E-mail address'></input>
                  </div>

                  <button type="submit" class="newsletter__submit" formtarget="_blank" aria-label="Send" fdprocessedid="mx0yg">
                    <svg><use xlink:href="#icon-send"></use></svg>
                  </button>
                </div>




              </div>
              <div className='email-rightPart'>
                <h3>Engage with us on:</h3>
                <div className="social social--inv">
                  <ul className="social__list">
                    <li className="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="linkedin"><svg><use xlink:href="#icon-linkedin" focusable="false"></use></svg></a>
                    </li>
                    <li className="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="youtube"><svg><use xlink:href="#icon-youtube" focusable="false"></use></svg></a>
                    </li>
                    <li className="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="facebook"><svg><use xlink:href="#icon-facebook" focusable="false"></use></svg></a>
                    </li>
                    <li className="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="instagram"><svg><use xlink:href="#icon-instagram" focusable="false"></use></svg></a>
                    </li>

                  </ul>
                </div>


                {/* <div className='social-app'>
                  <ul class="social__list">
                    <li class="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="linkedin"><svg><use xlink:href="#icon-linkedin" focusable="false"></use></svg></a>
                    </li>
                    <li class="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="youtube"><svg><use xlink:href="#icon-youtube" focusable="false"></use></svg></a>
                    </li>
                    <li class="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="facebook"><svg><use xlink:href="#icon-facebook" focusable="false"></use></svg></a>
                    </li>
                    <li class="social__item">
                      <a href="" target="_blank" rel="noreferrer noopener" aria-label="instagram"><svg><use xlink:href="#icon-instagram" focusable="false"></use></svg></a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default Footer