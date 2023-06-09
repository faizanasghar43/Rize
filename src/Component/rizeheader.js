import rize1 from "../assets/images/logo/rize_w.svg";
import searchIcon from "../assets/images/icons/search.svg";
import filterIcon from "../assets/images/icons/filter.svg";
import walletConnectIcon from "../assets/images/icons/Wallet_connect.svg";
import profileICon from "../assets/images/icons/profile.svg";
import add_to_cartIcon from "../assets/images/icons/add_to_cart.svg";
import menuIcon from "../assets/images/icons/menu.svg";
import Drawer from "./rizedrwaer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Net1 from "../assets/images/img/Networks/net1.svg";
import Net2 from "../assets/images/img/Networks/net2.svg";
import Net3 from "../assets/images/img/Networks/net3.svg";
import Net4 from "../assets/images/img/Networks/net4.svg";
import Net5 from "../assets/images/img/Networks/net5.svg";
import Net6 from "../assets/images/img/Networks/net6.svg";
import Net7 from "../assets/images/img/Networks/net7.svg";
import Net8 from "../assets/images/img/Networks/net8.svg";
import Net9 from "../assets/images/img/Networks/net9.svg";
import Net10 from "../assets/images/img/Networks/net10.svg";
import Net11 from "../assets/images/img/Networks/net11.svg";

import Filter from "./filter";

function DashboardHeader(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setDrawerWidth(275);
  };

  const handlefilter = () => {
    setisclicked(!isclicked);
  };

  const [isclicked, setisclicked] = useState(false);

  return (
    <section className="rize-container h-100">
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   WEB HEADER                                   || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <header className="container rize-container-fluid rize-header rize-web-header">
        <div className="row h-100">
          <div className="col">
            <Link to={"/"}>
              <img className="rize-header-logo" src={rize1} />
            </Link>
            <Drawer
              key={drawerWidth}
              close={() => {
                setDrawerWidth(0);
              }}
              drawerWidth={parseInt(drawerWidth)}
            />
            <div className="rize-header-search">
              <input />
              <img className="rize-header-search-icon" src={searchIcon} />
            </div>
            <div className="rize-header-filter">
              <img src={filterIcon} onClick={handlefilter} />
            </div>
          </div>
          <div className="col-sm-3 v-center" style={{ color: "white" }}>
            <div className={`rize-header-right-section ${props.validator?"":"d-none"}`}>
              <div>
                <a className="rize-nav-item rize-imp-link">Airdrop</a>
                <Link to="/escrow" className="rize-nav-item rize-imp-link">
                  Validator
                </Link>
                <a className="rize-nav-item rize-imp-link">Bridge</a>
              </div>
            </div>
          </div>
          <div className="col v-center" style={{ color: "white" }}>
            <div className="rize-header-right-section">
              <div className="v-center">
                <div class="dropdown">
                  <a
                    style={{ height: 12, color: "white" }}
                    className="rize-nav-item dropdown-toggle"
                  >
                    Pages
                  </a>
                  
                  {/* <ul class="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/escrow" style={{ marginTop: -4 }}>
                        Validator
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/rize-stake-and-learn"

                      >
                        Earnwise
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Utility
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Members
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        NFT Market
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/roadmap">
                        Roadmap
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/blog" style={{ marginBottom: -4 }}>
                        Blog
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/contact-us">
                        Contact Us
                      </Link>
                    </li> */}

                    {/* <li>
                      <Link className="dropdown-item" to="/wallet">
                        Wallet
                      </Link>
                    </li> */}
                  {/* </ul>  */}
                  <ul class="dropdown-menu" style={{marginRight:15}}>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/escrow"
                        style={{ marginTop: -4, padding:12 }}
                      >
                        Validator
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/rize-stake-and-learn"
                        style={{padding:12 }}
                      >
                        Earnwise
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/" style={{padding:12}}> 
                        Utility
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/"  style={{padding:12 }}>
                        Members
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/"  style={{padding:12 }}>
                        NFT Market
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/roadmap"  style={{ padding:12 }}>
                        Roadmap
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/blog" style={{ marginBottom: -4, padding:12 }}>
                        Blog
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/contact-us">
                        Contact Us
                      </Link>
                    </li> */}

                    {/* <li>
                      <Link className="dropdown-item" to="/wallet">
                        Wallet
                      </Link>
                    </li> */}
                  </ul>
                </div>

                <div
                  className="rize-nav-item-network nets"
                  style={{ height: 60 }}
                >
                  <a
                    className="rize-nav-item"
                    style={{ marginRight: 10, height: 12, paddingLeft: 0 }}
                  >
                    Networks
                  </a>
                  <div className="rize-dropdown">
                    <div className="rize-dropdown-body" >
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net1} />
                        <span>Coreum</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net7} />
                        <span>XRPL</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net2} />
                        <span>Ethereum</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net8} />
                        <span>Cosmos</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net3} />
                        <span>BSC</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net9} />
                        <span>Solana</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net4} />
                        <span>Polygon</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net10} />
                        <span>Hedera</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net5} />
                        <span>Avalanche</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net11} />
                        <span>Tezos</span>
                      </div>
                      <div className="v-center rize-dropdown-padding">
                        <img src={Net6} />
                        <span>Near</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/wallet">
                  <button
                    className="btn rize-btn-green v-center"
                    style={{ padding: 11, color: "#212529" }}
                  >
                    Wallet Connect
                  </button>
                </Link>
                <div className="rize-header-divider" />
                <img className="rize-header-prifile" src={profileICon} />
                <img className="rize-icon-sm" src={add_to_cartIcon} />
              </div>
            </div>
          </div>
        </div>
        {isclicked && <Filter />}
      </header>
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                  MOBILE HEADER                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <header className="container rize-container-fluid rize-header rize-mobile-header">
        <div className="row">
          <div className="col-4 v-center">
            <img
              onClick={handleClick}
              className="rize-icon-sm"
              src={menuIcon}
            />
            <Drawer
              key={drawerWidth}
              close={() => {
                setDrawerWidth(0);
              }}
              drawerWidth={parseInt(drawerWidth)}
            />
          </div>
          <div className="col-4 v-center h-center">
            <Link to="/">
              <img className="rize-header-logo" src={rize1} />
            </Link>
          </div>
          <div className="col-4 v-center">
            <div className="rize-header-right-section">
              <img
                className="rize-icon-sm"
                style={{ marginRight: 16 }}
                src={add_to_cartIcon}
              />
              <img className="rize-icon-sm d-none" src={searchIcon} />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default DashboardHeader;
{
  /*  ||--------------------------------------------------------------------------------|| */
}
{
  /*  || RIZE HEADER || */
}
{
  /*  ||--------------------------------------------------------------------------------|| */
}
