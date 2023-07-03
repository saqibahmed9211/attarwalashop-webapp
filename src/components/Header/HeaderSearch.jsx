import React, { Component } from 'react';

class HeaderSearch extends Component {
  render() {
    return (
      <div className="col-lg-8 col-sm-8 col-md-6 col-xs-5 col-ts-12">
        <div className="block-search-block">
          <form className="form-search form-search-width-category">
            <div className="form-content">
              <div className="category">
                <div className="inner">
                  <input type="text" className="input" name="s" value="" placeholder="Search here"/>
                </div>
              </div>
              <button className="btn-search" type="submit">
                <span className="icon-search"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default HeaderSearch;