import SectionContainer from "./SectionContainer";

const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About"}
      subTitle={"WHO I AM"}
      leftImage="static/img/title-1.jpg"
      leftImageTitle={"About Me"}
    >
      <div className="row">
        <div className="col-md-4">
          <img src="static/img/mypic.jpg" title alt />
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">I'm Patricio</h3>
            <p className="m-0px">
            I'm a business development expert and digital strategist with a strong 
            technical background in full-stack development, DevOps, and cloud solutions. 
            My unique blend of marketing expertise and hands-on technical skills allows 
            me to bridge the gap between business goals and technical execution. I help 
            companies grow by designing scalable digital solutions, leading cross-functional 
            teams, and aligning technology with strategic objectives.
            </p>
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-ruler-pencil" />
                <div className="feature-content">
                  <h5 className="dark-color">Business Development & Strategy</h5>
                  <p>
                    Helping companies grow through data-driven decisions, 
                    digital innovation, and scalable business models.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-image" />
                <div className="feature-content">
                  <h5 className="dark-color">Leadership & Project Management</h5>
                  <p>
                    Leading cross-functional teams using Agile and Scrum, managing 
                    timelines, budgets, and stakeholder expectations.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-brush-alt" />
                <div className="feature-content">
                  <h5 className="dark-color">Full-Stack Development & DevOps</h5>
                  <p>
                    Building modern web applications using React, C#, Go, and Python. 
                    Deploying with Docker, Kubernetes, and Azure.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-mobile" />
                <div className="feature-content">
                  <h5 className="dark-color">Marketing & Growth Hacking</h5>
                  <p>
                    Expertise in Google Ads, Meta Ads, and email marketing 
                    with creative strategies that drive engagement and conversions.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>{" "}
          {/* row */}
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
      </div>{" "}
      {/* row */}
      {/* 
     ==========================
       Counter
     ==========================
     */}
      <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
        <div className="row">
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-face-smile" />
                <div className="count dark-color">+15</div>
                <h6>Years in Business & Tech</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color fa fa-tasks" />
                <div className="count dark-color">+50</div>
                <h6>Projects Delivered</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color fa fa-rocket" />
                <div className="count dark-color">+10</div>
                <h6>Startups & Brands Launched</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color fa fa-bullhorn" />
                <div className="count dark-color">+300</div>
                <h6>Marketing Campaigns & Digital Strategies</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
        </div>{" "}
        {/* row */}
      </div>
    </SectionContainer>
  );
};
export default AboutUs;
