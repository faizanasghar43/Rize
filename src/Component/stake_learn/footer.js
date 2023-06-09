import logo from "../assets/images/Image/logo.png";
import footerImg1 from "../assets/images/Image/pic1.svg";
import footerImg2 from "../assets/images/Image/pic2.svg";
import footerImg3 from "../assets/images/Image/pic3.svg";
import footerImg4 from "../assets/images/Image/pic4.svg";
import footerImg5 from "../assets/images/Image/pic5.svg";
import footerImg6 from "../assets/images/Image/pic6.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="footer--menu">
          <div class="left-col">
            <div class="row tag">
              <span style={{ width: "inherit" }}>
                <Link to="/">
                  <img class="footer_logo" src={logo} alt="Image 1" />
                </Link>
              </span>
              <span style={{ padding: "0px" }}>
                <p class="footer_text">Gather. Create. Evolve.</p>
              </span>
            </div>
            <div class="row">
              <ul>
                <div>
                  <li>
                    <a className="link-click" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="link-click" href="#">
                      Swap
                    </a>
                  </li>

                  <li>
                    <a className="link-click" href="#">
                      Member
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/rize-stake-and-learn"
                      className="link-click"
                      href="rize-stake-and-learn"
                    >
                      LLE
                    </Link>
                  </li>
                  <li>
                    <a className="link-click" href="#">
                      Bridge
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div class="row">
              <div class="footer_social_link">
                <a className="link-click" href="#">
                  <img class="footer_icon" style={{ marginRight: 10 }} src={footerImg1} />
                </a>
                <a className="link-click" href="#">
                  <img class="footer_icon" src={footerImg2} />
                </a>
                <a className="link-click" href="#">
                  <img class="footer_icon" src={footerImg3} />
                </a>
                <a className="link-click" href="#">
                  <img class="footer_icon" src={footerImg4} />
                </a>
                <a className="link-click" href="#">
                  <img class="footer_icon" src={footerImg5} />
                </a>
                <a className="link-click" href="#">
                  <img class="footer_icon" src={footerImg6} />
                </a>
              </div>
            </div>
          </div>
          <div class="right-col right-col-placing pr-0">
            <h2 class="right-col-newslatter-text">
              <a className="link-click" href="#">
                Join our newsletter
              </a>
            </h2>
            <div class="row right-col-row-css ">
              <input
                id="footer-input-email"
                type="email"
                placeholder="Enter Your Email"
              />
              <button>Send</button>
            </div>
          </div>
        </div>

        <div class="footer--bottom">
          <div class="row footer--bottom--right">
            <p style={{ color: "white", fontSize: 12 }}>
              2023 Rize. All rights reserved.
            </p>
          </div>
          <div class="row  ">
            <div class="footer--bottom-links">
              <a className="link-click" href="#">
                Terms
              </a>
              <a className="link-click" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
