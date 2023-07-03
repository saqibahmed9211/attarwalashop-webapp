import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className='product-item style-5 slick-slide slick-current slick-active first-slick flex-column'>
        <div className='product-inner equal-element'>
          <div className="product-top">
            <div className="flash">
              <span className="onnew">
                <span className="text">
                  new
                </span>
              </span>
            </div>
          </div>
          <div className="product-thumb">
            <div className="thumb-inner">
              <a href="#" tabindex="0">
                <img src='http://ledthanhdat.vn/html/stelina/assets/images/product-item-17.jpg' alt="img" />
              </a>
              {/* <div className="thumb-group">
                <div className="yith-wcwl-add-to-wishlist">
                  <div className="yith-wcwl-add-button">
                    <a href="#" tabindex="0">Add to Wishlist</a>
                  </div>
                </div>
                <a href="#" className="button quick-wiew-button" tabindex="0">Quick View</a>
                <div className="loop-form-add-to-cart">
                  <button className="single_add_to_cart_button button" tabindex="0">Add to cart</button>
                </div>
              </div> */}
            </div>
            {/* <div className="product-count-down">
              <div className="stelina-countdown is-countdown" data-y="2021" data-m="10" data-w="4" data-d="10" data-h="20" data-i="20" data-s="60"><span className="box-count day"><span className="number">00</span> <span className="text">Days</span></span><span className="box-count hrs"><span className="number">00</span> <span className="text">Hrs</span></span><span className="box-count min"><span className="number">00</span> <span className="text">Mins</span></span><span className="box-count secs"><span className="number">00</span> <span className="text">Secs</span></span></div>
            </div> */}
            <button className="single_add_to_cart_button button" tabindex="0">Add to cart</button>
          </div>
          <div className="product-info">
            <h5 className="product-name product_title">
              <a href="#" tabindex="0">Glorious Eau</a>
            </h5>
            <div className="group-info">
              <div className="stars-rating">
                <div className="star-rating">
                  <span className="star-3"></span>
                </div>
                <div className="count-star">
                  (3)
                </div>
              </div>
              <div className="price">
                <del>
                  $65
                </del>
                <ins>
                  $45
                </ins>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;