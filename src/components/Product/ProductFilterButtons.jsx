import React, { Component } from 'react';

class ProductFilterButtons extends Component {
  render() {
    return (
      <div className='container'>
        <div class="tab-head">
          <ul class="tab-link">
            <li class="active">
              <a data-toggle="tab" aria-expanded="true" href="#bestseller">Bestseller</a>
            </li>
            <li class="">
              <a data-toggle="tab" aria-expanded="true" href="#new_arrivals">New Arrivals </a>
            </li>
            <li class="">
              <a data-toggle="tab" aria-expanded="true" href="#top-rated">Top Rated</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductFilterButtons;