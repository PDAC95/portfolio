import { useContext } from "react";
import { Context } from "../Context";
import TypingAnimation from "./TypingAnimation";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(Context);
  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <img src="static/img/userclean.png" title alt />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hello, There</h6>
                    <h1 className="dark-color blue-after">
                      I'm Patricio Duran
                    </h1>
                    <p>
                      I'm a <TypingAnimation />
                    </p>
                    <div className="btn-bar">
                      <a
                        href="/static/Resume-Patricio-Duran.pdf"
                        className="btn btn-theme"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a className="github" href="https://github.com/PDAC95">
                        <i className="fab fa-github" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="email" href="mailto:patricio@ac95.ca">
                        <i className="fa fa-envelope" />
                      </a>
                    </li>{" "}
                    <li>
                      <a
                        className="web"
                        href="https://www.ac95.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-globe" />
                      </a>
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
