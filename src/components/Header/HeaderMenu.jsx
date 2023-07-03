import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_MENU } from '../../utils/constants';
import HeaderMenuItem from './HeaderMenuItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleCategoryMenu } from '../../redux/Navigation/actions';
import AllCategoryDropdown from './AllCategoryDropdown';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {showAllCatagories: false}
  }

  toggleShowAllCatagories() {
    const {toggleCategoryMenu} = this.props;
    toggleCategoryMenu();
  }

  render() {
    const {showCategoryMenu} = this.props.navigationStore
    return (
      <div>
        <div className="header-nav-container rows-space-20">
          <div className="container">
            <div className="header-nav-wapper main-menu-wapper">
              <div className={`vertical-wapper block-nav-categori ${showCategoryMenu ? 'active' : ''}`} onClick={() => this.toggleShowAllCatagories()}>
                <div className="block-title">
                  <span className="icon-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="text">All Categories</span>
                </div>
                <AllCategoryDropdown/>
              </div>
              <div className="header-nav">
                <div className="container-wapper">
                  <ul className="stelina-clone-mobile-menu stelina-nav main-menu " id="menu-main-menu">
                    {Object.keys(HEADER_MENU).map(item => {
                      let hasChildren = HEADER_MENU[item] && HEADER_MENU[item].subMenu && HEADER_MENU[item].subMenu.length;
                      return (
                        <Fragment>
                          <li className={`menu-item ${hasChildren ? 'menu-item-has-children' : ''}`}>
                            <Link to={`${HEADER_MENU[item].location}`} className="stelina-menu-item-title" title={item}>{item}</Link>
                            <span className="toggle-submenu"></span>
                            <HeaderMenuItem menuItems = {HEADER_MENU[item]}/>
                          </li>
                        </Fragment>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);