import React, { Component } from 'react';
import ProductFilterButtons from '../Product/ProductFilterButtons';
import BannerGroup from './Banners/BannerGroup';
import CustomBanner from './CustomBanner';
import DealsSection from './DealSeaction/DealsSection';
import DelivaryInfo from './DelivaryInfo';

class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <div className='fullwidth-template'>
          <div className='container banner-mb'>
            <div className='row10'>
              <BannerGroup />
            </div>
          </div>
          <div className='stelina-product produc-featured rows-space-65'>
            <div className='container'>
              <h3 class="custommenu-title-blog">
                Deal of the day
              </h3>
              <DealsSection />
            </div>
          </div>
          <CustomBanner />
          <div className='stelina-product produc-featured rows-space-65 stelina-tabs default rows-space-40 best-seller-product-padding'>
            <div className='container'>
              <ProductFilterButtons/>
              <DealsSection />
            </div>
          </div>
          <DelivaryInfo/>
        </div>
      </div>
    );
  }
}

export default HomePageContainer;