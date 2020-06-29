import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import FeaturedSources from "../components/Home/FeaturedSources";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import RegisterFormContainer from "../components/Register/RegisterFormContainer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <MainBanner />
        <FeaturedSources />
        <FunFactsTwo />
        <RegisterFormContainer />
      </React.Fragment>
    );
  }
}

export default Home;
