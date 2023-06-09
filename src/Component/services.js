import serviceImg from "../assets/images/img/attachments/services.png";
import utilityImg from "../assets/images/img/attachments/Utility.png";
import Rize_Validator_Node from "../assets/images/img/attachments/Rize_Validator_Node.png";
import Rize_Learn_Stake from "../assets/images/img/attachments/Rize_Learn_Stake.png";
import lleImg from "../assets/images/img/lle.png";
import bridgeImg from "../assets/images/img/Bridge.jpg";
import BridgeGif from "../assets/video/bride_gif.gif";
import { Link } from "react-router-dom";

function Service() {
  return (
    <section className="mt-5 pt-3 services_section" data-aos="fade-up">
      <div
        className="rize-suboverlay-container"
        style={{ background: "#10101091" }}
      >
        <h1 className="services rize--section-heading">Services</h1>
        <div className="container rize-mini-container">
          {/* DISCOVER */}
          <div className="row mb-sm-0 rize-pb-60">
            <div className="col-md-6 rize-what-we-are-right v-center order-2 order-md-1">
              <div className="rize-banner--container">
                <h1 className="rize-banner--heading">Discover Rare NFTs</h1>
                <p className="rize-banner--paragraph">
                  Rize market is the premier destination for those seeking rare,
                  high-quality digital assets. Our intuitive space and friendly
                  community make it easy to discover unique, hard-to-find pieces
                  of digital art and invest in the future of collecting. Join
                  the excitement at Rize and experience the next generation of
                  collecting today!
                </p>
                <button
                  style={{ minWidth: 100 }}
                  className="btn rize-btn-green v-center h-center"
                >
                  Marketplace
                </button>
              </div>
            </div>
            <div className="col-md-6 rize-what-we-are-left rize-services-left f-end order-1 order-md-2 mb-4 mb-sm-0">
              <div className="text-right w-100 d-flex justify-content-end align-items-center">
                <img src={serviceImg} className="w-sm-100" />
              </div>
            </div>
          </div>
          {/* UTILITY */}
          <div className="row mb-sm-0 rize-pb-60">
            <div className="col-md-6 rize-what-we-are-left rize-services-left mb-4 mb-sm-0 d-flex align-items-center justify-content-start">
              <img src={utilityImg} className="w-sm-100" />
            </div>
            <div className="col-md-6 rize-what-we-are-right v-center">
              <div className="rize-banner--container">
                <h1 className="rize-banner--heading">Utility</h1>
                <p className="rize-banner--paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button
                  style={{ minWidth: 100 }}
                  className="btn rize-btn-green v-center h-center"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          {/* BRIDGE */}
          <div className="row mb-sm-0 rize-pb-60">
            <div className="col-md-6 rize-what-we-are-right v-center order-2 order-md-1">
              <div className="rize-banner--container">
                <h1 className="rize-banner--heading">Bridge</h1>
                <p className="rize-banner--paragraph">
                  First cross chain bridge between Cosmos and XRPL. A new way to
                  safe guard your most precious assets. And move away from
                  centralized scams. Experience a seamless bridge experience!
                </p>
                <button
                  style={{ minWidth: 100 }}
                  className="btn rize-btn-green v-center h-center"
                >
                  Learn more
                </button>
              </div>
            </div>
            <div className="col-md-6 rize-what-we-are-left rize-services-left text-right order-1 order-md-2 mb-4 mb-sm-0">
              <img
                src={BridgeGif}
                className="w-sm-100"
                style={{ border: "1px solid #2fed01", borderRadius: 15 }}
              />
            </div>
          </div>
          {/* LLE */}
          <div className="row mb-sm-0 rize-pb-60">
            <div className="col-md-6 rize-what-we-are-left mb-4 mb-sm-0 d-flex justify-content-start align-items-center">
              <img src={Rize_Learn_Stake} className="w-sm-100" />
            </div>
            <div className="col-md-6 rize-what-we-are-right v-center">
              <div className="rize-banner--container">
                <h1 className="rize-banner--heading">Rize, Learn, Stake</h1>
                <p className="rize-banner--paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link to="rize-stake-and-learn">
                  <button
                    style={{ minWidth: 100 }}
                    className="btn rize-btn-green v-center h-center"
                  >
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Rize Validator */}
          <div className="row">
            <div className="col-md-6 rize-what-we-are-right v-center order-2 order-md-1">
              <div className="rize-banner--container">
                <h1 className="rize-banner--heading">Rize Validator Node</h1>
                <p className="rize-banner--paragraph">
                  First cross chain bridge between Cosmos and XRPL. A new way to
                  safe guard your most precious assets. And move away from
                  centralized scams. Experience a seamless bridge experience!
                </p>
                <Link to="rize-stake-and-learn">
                  <button
                    style={{ minWidth: 100 }}
                    className="btn rize-btn-green v-center h-center"
                  >
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 rize-what-we-are-left rize-services-left text-right  order-1 order-md-2 mb-4 mb-sm-0 d-flex justify-content-end align-items-center">
              <img
                style={{ border: "1px solid #2fed01", borderRadius: 15 }}
                src={Rize_Validator_Node}
                className="w-sm-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
