import React from "react";
import './header.css'
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";


export const Header = () => {
  return (
    <div className="header style7">
      <div className='top-bar'>
        <div className='container'>
          <div className='top-bar-left'>
            <div class="header-message">
              Welcome to Attarwala Shop online store!
            </div>
          </div>
          <div class="top-bar-right">
            <ul class="header-user-links">
                <li>
                  <a href="login.html">Login or Register</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-header">
          <div className="row">
            <div className="col-lg-2 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
              <div className="logo">
                  <a href="index.html">
                    <img src="../../../assets/logo.png" alt="img"/>
                  </a>
              </div>
            </div>
            <HeaderSearch/>
            <div className="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
              <div className="header-control">
                <div className="block-minicart stelina-mini-cart block-header stelina-dropdown">
                  <a href="javascript:void(0);" className="shopcart-icon" data-stelina="stelina-dropdown">
                    <span className="count">0</span>
                  </a>
                </div>
                <div className="block-account block-header stelina-dropdown">
                  <a href="javascript:void(0);" data-stelina="stelina-dropdown">
                      <span className="flaticon-user"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderMenu/>
    </div>
  )
}
