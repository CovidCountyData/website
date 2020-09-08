import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { DefaultSeo } from "next-seo";
import App from "next/app";
import Head from "next/head";
import "rc-slider/assets/index.css";
import "react-accessible-accordion/dist/fancy-example.css";
import ReactGA from "react-ga";
import "react-image-lightbox/style.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/icofont.min.css";
import "../assets/css/overides.scss";
import "../assets/css/pe-icon-7-stroke.css";
import "../assets/css/responsive.scss";
import "../assets/css/style.scss";
import "../assets/css/swagger-docs.scss";
import MixpanelProvider from "../components/Common/mixpanel";
import GoTop from "../components/Shared/GoTop";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-datepicker/dist/react-datepicker.css";
import '@progress/kendo-theme-default/dist/all.css';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS aut

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
          title="CCD"
          description="CCD - COVID County Data"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://covidcountydata.org",
            site_name: "CCD - COVID County Data",
          }}
          twitter={{
            handle: "@ValorumData",
            cardType: "summary_large_image",
          }}
        />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>

        <Component {...pageProps} />

        {/* Preloader */}
        {/* <Loader loading={this.state.loading} /> */}

        {/* Go Top Button */}
        <GoTop scrollStepInPx="50" delayInMs="10.50" />

      </MixpanelProvider>
    );
  }
}
