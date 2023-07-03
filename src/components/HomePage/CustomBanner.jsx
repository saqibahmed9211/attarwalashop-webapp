import React, { Component } from 'react';

class CustomBanner extends Component {
  render() {
    return (
      <div className='banner-wrapp rows-space-65'>

        <div className="container">
          <div className="banner">
            <div className="item-banner style17">
              <div className="inner">
                <div className="banner-content">
                  <h3 className="title">Collection Arrived</h3>
                  <div className="description">
                    You have no items &amp; Are you ready to use? come &amp; shop with us!
                  </div>
                  <div className="banner-price">
                    Price from:
                    <span className="number-price">$45.00</span>
                  </div>
                  <a href="#" className="button btn-shop-now">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomBanner;