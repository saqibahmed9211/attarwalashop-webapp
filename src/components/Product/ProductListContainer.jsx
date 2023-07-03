import React, { Component } from 'react';
import Product from './Product';
import Select from 'react-select';
import SelectComponent from '../common/Select';

class ProductListContainer extends Component {
  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <div className='main-content main-content-product no-sidebar'>
        <div className='container'>
          <div className='row'>
            <div className='site-main'>
              <h3 class="custom_blog_Ítitle">
                Products
              </h3>
              <div className="shop-top-control">
                <div style={{flex: '0 0 20%'}}>
                  <form className="select-item select-form" style={{display: 'inline-flex', alignItems: 'center'}}>
                    <span className="title">Sort</span>
                    <SelectComponent options={options}/>
                  </form>
                </div>
              </div>
              <div className='row'>
                <div className='flex-wrap'>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                  <Product/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListContainer;