import './MainFooter.css'

const MainFooter = () => {
  return (
    <div className='main-footer-And-widget'>
      <div className='main-footer'>
        <div className='main-footer-container'>
          <div className='main-footer1'>
            <p class="hero__featured__title">LATEST NEWS</p>
            <p class="hero__featured__text">Double Gold Win for Losberger De Boer at EMPORIA Awards</p>
            <a href="/global/news/" id="footer-anchor1" class="link">
              News overview
              <svg class="link__icon-icon--arrow" data-direction="right" focusable="false"><use xlink:href="#icon-arrow"></use></svg>
            </a>
          </div>
          <div className='main-footer2'>
            <p class="hero__featured__title">PRODUCT HIGHLIGHT</p>
            <p class="hero__featured__text">Elevate your business with Losberger De Boer’s Levo</p>
            <a href="/global/products-services/event-space/levo/" id="footer-anchor2" class="link">
              The Levo
              <svg class="link__icon-icon--arrow" data-direction="right" focusable="false"><use xlink:href="#icon-arrow"></use></svg>
            </a>
          </div>
        </div>
      </div>

      <div className='widget'>
        <div className='widget-container'>
          <div className='widget-inner'>
            <h2 class="widget__title">How can we help you?</h2>
            <ol class="quickaccess__list">
              <li><a href="/global/solutions/commercial-space/" id="widget-commercial" class="widget-button">Commercial Space</a></li>
              <li><a href="/global/configurator/" id="widget-design" class="widget-button">Design your own warehouse</a></li>
              <li><a href="/global/solutions/event-space-sales/" id="widget-buy" class="widget-button">Buy Event Space</a></li>
              <li><a href="/global/solutions/event-space-rental/" id="widget-rent" class="widget-button">Rent Event Space</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFooter