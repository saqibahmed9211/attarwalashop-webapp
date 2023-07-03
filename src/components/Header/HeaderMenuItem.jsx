import React, { Component, Fragment } from 'react';

class HeaderMenuItem extends Component {
  render() {
    let {menuItems} = this.props; 
    return (
        <Fragment>
          {menuItems?.subMenu?.length && (
            <ul className="submenu">
            {menuItems.subMenu.map(item => {
              return (
                <li className="menu-item">
                  <a href="#">{item.label}</a>
                </li>
              )
            })}
            </ul>
          ) || null}
        </Fragment>
    );
  }
}

export default HeaderMenuItem;