import React, { Component } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePageContainer from '../components/HomePage/HomePageContainer';
import ProductListContainer from '../components/Product/ProductListContainer';
class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route exact path='/' Component={HomePageContainer} />
        <Route exact path='/perfumes' Component={ProductListContainer} />
      </Routes>
    );
  }
}

export default Routing;