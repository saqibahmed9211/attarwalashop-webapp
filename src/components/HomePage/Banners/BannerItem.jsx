import React, { Component } from 'react';

class BannerItem extends Component {
  render() {
    let {banner} = this.props; 
    return (
      <div className="slider-item style9 slick-slide banner-image-width" style={{backgroundImage: `url(${banner.imageUrl})`, backgroundSize: 'cover', width: '-webkit-fill-available'}}>
        <div className="slider-inner equal-element banner-item-height">
          <div className="slider-infor">
            <h5 className="title-small">
              {banner.smallTitle}
            </h5>
            <h3 className="title-big">
              {banner.bigTitle}
            </h3>
            <div className="price">
              New Price:
              <span className="number-price">
                {banner.price}
              </span>
            </div>
            <a href="#" className="button btn-chekout" tabIndex="-1">Shop now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerItem;