import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    );
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"My Projects"}
      subTitle={"Latest Work"}
      leftImage="static/img/title-3.jpg"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              WEB DEVELOPMENT
            </li>{" "}
            <li
              className={`${activeBtn("creative")} theme-after`}
              onClick={handleFilterKeyChange("creative")}
              data-filter=".creative"
            >
              CREATIVE & STRATEGY
            </li>{" "}
            <li
              className={`${activeBtn("uiux")} theme-after`}
              onClick={handleFilterKeyChange("uiux")}
              data-filter=".uiux"
            >
              UI/UX DESIGN
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <li className="portfolio-item website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="https://www.ac95.ca/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="static/img/portfolio-1.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a 
                        href="https://www.ac95.ca/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-color"
                      >
                        <i className="fa fa-link" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-1.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>AC95 Agency Website</h5>
                  <span>ASP.NET site deployed on Azure, multilingual and responsive.</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item uiux">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-2.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-2.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>UI/UX Design</h5>
                  <span>Figma UI for a social betting app with intuitive mobile flow.</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop creative">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-3.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-3.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Creative & Strategy</h5>
                  <span>
                  Visual content for Instagram campaigns with bold creative direction.
                  </span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-4.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a 
                        href="https://www.roush.com.mx/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-color"
                        >
                        <i className="fa fa-link" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-4.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Roush Corporate Website</h5>
                  <span>Corporate website in JS with multilingual support and responsive design.</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop creative">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-5.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-5.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Creative & Strategy</h5>
                  <span>
                    Ad creatives for Facebook and Google Ads focused on performance.
                  </span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item app website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-6.jpg" title alt />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a 
                        href="https://bmcpaving.ca/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-color">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-6.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </a>
                      
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>BMC Paving Website</h5>
                  <span>Responsive JS website for a construction company in Canada.</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
      {/* 
          ==========================
            Testimonials
          ==========================
          */}
      
    </SectionContainer>
  );
};
export default Portfolio;
