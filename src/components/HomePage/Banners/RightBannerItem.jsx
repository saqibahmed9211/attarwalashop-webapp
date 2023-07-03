import React, { Component } from 'react';

class RightBannerItem extends Component {
  render() {
    let {details} = this.props;
    return (
      <div class="banner">
        <div class="item-banner style7">
          <div class="inner" style={{backgroundImage: `url(${details.imageUrl})`, backgroundSize: 'cover'}}>
            <div class="banner-content">
              <h3 class="title">{details.title}</h3>
              <div class="description">
                {details.description}
              </div>
              <a href="#" class="button btn-lets-do-it">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightBannerItem;