import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/icofont.min.css";
import "../assets/css/pe-icon-7-stroke.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../assets/css/style.scss";
import "../assets/css/responsive.scss";
import "rc-slider/assets/index.css";
import ReactGA from "react-ga";

import App from "next/app";
import { DefaultSeo } from "next-seo";
// import Loader from '../components/Shared/Loader';
import GoTop from "../components/Shared/GoTop";
import MixpanelProvider from "../components/Common/mixpanel";

ReactGA.initialize("UA-112477777-3");

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MixpanelProvider>
        <DefaultSeo
          title="CMDC"
          description="CMDC - COVID Modeling Data Collaborative"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://covid.valorum.ai",
            site_name: "CMDC - COVID Modeling Data Collaborative",
          }}
          twitter={{
            handle: "@ValorumData",
            cardType: "summary_large_image",
          }}
        />

        <Component {...pageProps} />

        {/* Preloader */}
        {/* <Loader loading={this.state.loading} /> */}

        {/* Go Top Button */}
        <GoTop scrollStepInPx="50" delayInMs="10.50" />
      </MixpanelProvider>
    );
  }
}
