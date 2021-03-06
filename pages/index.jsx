import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import FeaturedSources from "../components/Home/FeaturedSources";
import ContactCTA from "../components/Common/ContactCTA";
import RegisterFormContainer from "../components/Register/RegisterFormContainer";
// import News from "../components/News/News";
import Mission from "../components/Home/Mission";
import DownloadCTA from "../components/Common/DownloadCTA";
import CANBanner from "../components/Common/CANBanner";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <CANBanner />
        <MainBanner />
        <Mission className="bg-grey" />
        <FeaturedSources />
        <DownloadCTA className="bg-grey" />
        <RegisterFormContainer />
        <ContactCTA className="bg-grey" />
      </React.Fragment>
    );
  }
}

export default Home;
