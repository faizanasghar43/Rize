// import blog1 from "../assets/images/img/blogs/blog1.png";
import blog2 from "../assets/images/img/blogs/blog2.png";
import blog3 from "../assets/images/img/blogs/blog3.png";
import blog1_1 from "../assets/images/img/blogs/blog5.png";
import blog1 from "../assets/images/img/blogs/blog1.png";

import { Link } from "react-router-dom";

function Blog() {
  return (
    <section
      className="mt-5 pt-3 blog-section rize-banner--container"
      data-aos="fade-up"
    >
      <div className="rize-suboverlay-container pb-5">
        <h1 className="services text-white rize--section-heading">
          Community Blog
        </h1>
        <div className="container rize-mini-container">
          <div className="row">
            <div className="col-md-6 v-center mb-4 mb-sm-0">
              <Link to="/blog">
                <div>
                  <div className="rize-main-blog-container">
                    <img src={blog1_1} className="mb-4 rize-border-image w-100 d-block d-sm-none" />
                    <img src={blog1} className="mb-4 rize-border-image w-100 d-none d-sm-block" />
                  </div>
                  <h1 className="rize--section-heading3 mt-0">
                    Lorem ipsum dolorostic siting amet
                  </h1>

                  <button
                    style={{ minWidth: 100 }}
                    className="btn rize-btn-green v-center h-center"
                  >Learn more</button>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-7 col-12 rize-pl-5 mb-4 mb-sm-0 order-sm-1 order-2">
                  <Link to="/blog">
                    <h1 className="rize--section-heading2">
                      Lorem ipsum dolorostic siting amet
                    </h1>
                    <button
                      style={{ minWidth: 100 }}
                      className="btn rize-btn-green v-center h-center"
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
                <div className="col-sm-5 col-12 order-sm-2 order-1">
                  <Link to="/blog">
                    <img
                      src={blog2}
                      width="100%"
                      className="mb-4 rize-border-image"
                    />
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7 col-12 rize-pl-5 mb-4 mb-sm-0 order-sm-1 order-2">
                  <Link to="/blog">
                    <h1 className="rize--section-heading2">
                      Lorem ipsum dolorostic siting amet
                    </h1>
                    <button
                      style={{ minWidth: 100 }}
                      className="btn rize-btn-green v-center h-center"
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
                <div className="col-sm-5 col-12 order-sm-2 order-1">
                  <Link to="/blog">
                    <img
                      src={blog3}
                      width="100%"
                      className="mb-4 rize-border-image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
