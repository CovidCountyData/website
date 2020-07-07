import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import FeaturedSources from "../components/Home/FeaturedSources";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import RegisterFormContainer from "../components/Register/RegisterFormContainer";
import News from "../components/News/News";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <MainBanner />
        <FeaturedSources />
        <RegisterFormContainer />
        <News />
        <FunFactsTwo />
      </React.Fragment>
    );
  }
}

export default Home;
