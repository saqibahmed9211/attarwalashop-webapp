import React from "react";
import Footer from "./components/footer/footer";
import { Header } from "./components/Header/Header";
import MobileHeaderComponent from "./components/Header/MobileHeaderComponent";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import Routing from "./Routing";
import './index.css';

const App = () => {
  return (
    <div>
      <Header/>
      <MobileHeaderComponent/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
