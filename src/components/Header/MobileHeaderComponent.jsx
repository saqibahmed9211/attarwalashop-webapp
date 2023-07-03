import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleCategoryMenu } from '../../redux/Navigation/actions';
import AllCategoryDropdown from './AllCategoryDropdown';

class MobileHeaderComponent extends Component {

  toggleShowAllCatagories() {
    const { toggleCategoryMenu } = this.props;
    toggleCategoryMenu();
  }

  render() {
    return (
      <div className="header-device-mobile">
        <div className="wapper">
          <div className="item mobile-logo">
            <div className="logo">
              <a href="#">
                <img src="../../../assets/logo.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="item item mobile-search-box has-sub">
            <a href="#">
              <span className="icon">
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </a>
            <div className="block-sub">
              <a href="#" className="close">
                <i className="fa fa-times" aria-hidden="true" />
              </a>
              <div className="header-searchform-box">
                <form className="header-searchform">
                  <div className="searchform-wrap">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Enter keywords to search..."
                    />
                    <input
                      type="submit"
                      className="submit button"
                      defaultValue="Search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="item mobile-settings-box has-sub">
            <a href="#">
              <span className="icon">
                <i className="fa fa-cog" aria-hidden="true" />
              </span>
            </a>
            <div className="block-sub">
              <a href="#" className="close">
                <i className="fa fa-times" aria-hidden="true" />
              </a>
              <div className="block-sub-item">
                <h5 className="block-item-title">Currency</h5>
                <form className="currency-form stelina-language">
                  <ul className="stelina-language-wrap">
                    <li className="active">
                      <a href="#">
                        <span>English (USD)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>French (EUR)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Japanese (JPY)</span>
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <div className="item menu-bar">
            <div className=" mobile-navigation  menu-toggle" onClick={() => this.toggleShowAllCatagories()}>
              <span />
              <span />
              <span />
            </div>
            <AllCategoryDropdown/>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigationStore: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleCategoryMenu: toggleCategoryMenu
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileHeaderComponent);