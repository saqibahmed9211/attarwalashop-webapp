import React, { Component } from 'react';
import Product from '../../Product/Product';

class DealsSection extends Component {
  render() {
    return (
      <div className="slider-owl owl-slick equal-container nav-center slick-initialized slick-slider flex-row" role="toolbar">
          <div aria-live="polite" className="slick-list draggable">
            <div className="flex-row" role="listbox">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
          </div>
        </div>
    );
  }
}

export default DealsSection;