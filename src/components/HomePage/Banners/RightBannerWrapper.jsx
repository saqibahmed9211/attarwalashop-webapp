import React, { Component } from 'react';
import { BANNER_ITEMS_RIGHT } from '../../../utils/constants';
import RightBannerItem from './RightBannerItem';

class RightBannerWrapper extends Component {
  render() {
    return (
      <div className='col-lg-4 banner-wrapp right-banner-display'>
        {BANNER_ITEMS_RIGHT.map(item => {
          return (
            <RightBannerItem details={item}/>
          )
        })}
      </div>
    );
  }
}

export default RightBannerWrapper;