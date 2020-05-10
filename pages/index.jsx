import React, { Component } from "react";
import NavbarThree from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import FeaturedSources from "../components/Home/FeaturedSources";
// import CaseStudies from "../components/Home/CaseStudies";
// import FeedbackTwo from "../components/Common/FeedbackTwo";
// import BestServices from "../components/Home/BestServices";
// import Partner from "../components/Common/Partner";
// import Feedback from "../components/Common/Feedback";
// import Portfolio from "../components/Home/Portfolio";
// import TeamStyleFour from "../components/Common/TeamStyleFour";
import FunFactsTwo from "../components/Common/FunFactsTwo";
// import WorkProcess from "../components/Home/WorkProcess";
// import PricingStyleThree from "../components/Pricing/PricingStyleThree";
// import LatestNews from "../components/Common/LatestNews";
// import Newsletter from "../components/Common/Newsletter";
// import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarThree />
        <MainBanner />
        <FeaturedSources />
        {/* <CaseStudies /> */}
        {/* <FeedbackTwo /> */}
        {/* <BestServices /> */}
        {/* <Partner /> */}
        {/* <Feedback /> */}
        {/* <Portfolio /> */}
        {/* <TeamStyleFour /> */}
        <FunFactsTwo />
        {/* <WorkProcess /> */}
        {/* <PricingStyleThree /> */}

        {/*
        <div className="pt-100">
          <Newsletter />
        </div>

        <div className="ptb-100">
          <LatestNews />
        </div>

        <CtaAreaTwo />
        */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
