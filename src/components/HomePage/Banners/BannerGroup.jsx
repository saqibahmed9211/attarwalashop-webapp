import React, { Component } from 'react';
import MainBanner from './MainBanner';
import RightBannerWrapper from './RightBannerWrapper';

class BannerGroup extends Component {
  render() {
    return (
      <div>
        <MainBanner/>
        <RightBannerWrapper/>
      </div>
    );
  }
}

export default BannerGroup;