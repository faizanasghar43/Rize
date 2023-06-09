import q1 from "../assets/images/img/q1.svg";
import q2 from "../assets/images/img/q2.svg";
import q3 from "../assets/images/img/q3.svg";
import Footer from "../Component/footer";
import Header from "../Component/rizeheader";
function RoadMap() {
  return (<>
    <section className="rize-main roadmap-bg">
      <Header validator={false}/>
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                     Road Map                                   || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <section className="mt-5 pt-5 pb-5">
        <div className="">
          <div className="container rize-mini-container">
            <h1 className="text-center text-white main-banner-heading mb-14 pb-3">Roadmap</h1>
            <p className="text-white text-center" style={{ fontSize: "14px",lineHeight:"24px" }}>
              See what is to come in the Rize ecosystem, most things are built but
              undergoing testing.
              <br />
              Some will need votes from the community to be implemented.
            </p>
            {/* DISCOVER */}
            <div className="d-flex flex-column justify-content-center align-items-center" >
              <img
                src={q1}
                className="mb-5"
                width="88%"
              />
              <img
                src={q2}
                className="mb-5"
                width="88%"
              />
              <img
                src={q3}
                className="mb-5"
                width="88%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                     Road Map                                   || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <Footer />
    </section>

  </>
  );
}

export default RoadMap;