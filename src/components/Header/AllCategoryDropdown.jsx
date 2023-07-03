import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ALL_CATEGORY_MENU_ITEMS } from '../../utils/constants';

class AllCategoryDropdown extends Component {
  render() {
    const {showCategoryMenu} = this.props.navigationStore
    return (
      <div className={`block-content verticalmenu-content ${showCategoryMenu ? 'show-up' : ''} `}>
        <ul className="stelina-nav-vertical vertical-menu stelina-clone-mobile-menu">
          {ALL_CATEGORY_MENU_ITEMS.map(item => (<li className="menu-item">
            <a title={item.title} href={item.location} className="stelina-menu-item-title">{item.title}</a>
          </li>))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navigationStore: state.navigation
  }
}

export default connect(mapStateToProps, null)(AllCategoryDropdown);