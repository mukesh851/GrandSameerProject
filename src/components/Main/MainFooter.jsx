
import './MainFooter.css'

const MainFooter = () => {
  return (
    <div className='main-footer-And-widget'>
      {/* Main Footer Content */}
      <div className='main-footer'>
        <div className='main-footer-container'>
          <div className='main-footer1'>
            <p className="hero__featured__title">LATEST NEWS</p>
            <p className="hero__featured__text">
              Double Gold Win for Losberger De Boer at EMPORIA Awards
            </p>
            <a href="/global/news/" id="footer-anchor1" className="link">
              News overview
            </a>
          </div>

          <div className='main-footer2'>
            <p className="hero__featured__title">PRODUCT HIGHLIGHT</p>
            <p className="hero__featured__text">
              Elevate your business with Losberger De Boer’s Levo
            </p>
            <a href="/global/products-services/event-space/levo/" id="footer-anchor2" className="link">
              The Levo
            </a>
          </div>
        </div>
      </div>

      {/* Widget Section */}
      <div className='widget'>
        <div className='widget-container'>
          <div className='widget-inner'>
            <h2 className="widget__title">How can we help you?</h2>
            <ol className="quickaccess__list">
              <li><a href="/global/solutions/commercial-space/" id="widget-commercial" className="widget-button">Design Your Own Warehouse</a></li>
              <li><a href="/global/configurator/" id="widget-design" className="widget-button">Political & Government Events</a></li>
              <li><a href="/global/solutions/event-space-sales/" id="widget-buy" className="widget-button">Corporate Events</a></li>
              <li><a href="/global/solutions/event-space-rental/" id="widget-rent" className="widget-button">Concerts & Grand Weddings</a></li>
              <li><a href="/global/solutions/event-space-rental/" id="widget-cultural" className="widget-button">Cultural and religious gathering</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFooter



