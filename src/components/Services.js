import SectionContainer from "./SectionContainer";
const Services = () => {
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"My Resume"}
      subTitle={"History"}
      leftImage="static/img/title-2.jpg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Experience</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Project Manager / Web Developer – AC95</span>
                  <label>Jul 2023 – Present | Kitchener, ON</label>
                </div>
                <div className="r-info">
                  <p>
                    Leading web development and digital transformation projects. 
                    Combining full-stack development (React, ASP.NET, SQL) with 
                    business strategy and agile project management. Delivered 
                    tailored digital solutions for startups and SMEs.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Web Developer – RockSolar</span>
                  <label>May 2023 – Jul 2023 | Kitchener, ON</label>
                </div>
                <div className="r-info">
                  <p>
                    Developed and launched the company’s Shopify e-commerce store 
                    using Liquid, HTML, CSS, and JavaScript. Designed responsive 
                    UI/UX and executed marketing campaigns to support the store’s 
                    launch in Canada and the United States.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Project Manager LATAM – Axiom Machinery</span>
                  <label>2022 – 2023 | Cambridge, ON</label>
                </div>
                <div className="r-info">
                  <p>
                    Managed technical sales operations across Latin America. 
                    Coordinated cross-border teams, handled CRM systems, 
                    and contributed to digital strategy execution.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">CEO & Co-Founder – Cubie</span>
                  <label>2012 – 2022 | Mexico City, MX</label>
                </div>
                <div className="r-info">
                  <p>
                    Launched and scaled a digital consultancy focused on 
                    innovation and automation. Delivered custom solutions 
                    in e-commerce, UX/UI, and cloud migration for clients 
                    in retail and healthcare.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">CEO & Co-Founder – Distribuidora Médica</span>
                  <label>2009 – 2022 | Mexico City, MX</label>
                </div>
                <div className="r-info">
                  <p>
                    Led a medical equipment business from startup to nationwide reach. 
                    Implemented ERP and digital platforms, doubling revenue and 
                    optimizing logistics and customer experience.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Education</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Software Engineer Diploma</span>
                  <label>Canadian Business College – Canada</label>
                  <label>2023</label>
                </div>
                <div className="r-info">
                  <p>
                    Focused on full-stack development using C#, ASP.NET, SQL, JavaScript, 
                    and Azure. Gained experience in backend architecture, RESTful APIs, 
                    and building scalable web applications using Microsoft technologies.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Technical Certifications</span>
                  <label>Google, AWS, Azure, Pluralsight, ComIT, University of Helsinki 2012 – Present</label>
                  <label>2012 – Present</label>
                </div>
                <div className="r-info">
                  <p>
                    Training in cloud and backend technologies including AWS DevOps, Azure, 
                    Kubernetes, Golang, and Python. Completed Fullstack JavaScript program 
                    at the University of Helsinki with practical experience in MERN and MEAN 
                    stacks. Skilled in REST APIs, Docker, CI/CD pipelines, and scalable cloud 
                    deployments.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Project Management Certificate</span>
                  <label>Google – Mexico City</label>
                  <label>2020</label>
                </div>
                <div className="r-info">
                  <p>
                    Certified in Agile project management and Scrum methodologies. Developed 
                    skills in stakeholder communication, sprint planning, and resource allocation. 
                    Practical experience using tools like Trello, Jira, Asana, and Monday.com 
                    to lead and coordinate cross-functional teams.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Digital Marketing Certifications</span>
                  <label>Google, Meta, Mercatitlan – Mexico City</label>
                  <label>2008 – 2022</label>
                </div>
                <div className="r-info">
                  <p>
                    Certified in Google Ads, Meta Ads (Facebook & Instagram), Email Marketing, 
                    and Google Analytics. Specialized in campaign strategy, growth hacking, and 
                    digital market expansion. Proficient in Meta Business Suite, TikTok Ads, 
                    and analytics tools. Creative execution using Adobe Creative Suite 
                    (Photoshop, Illustrator, Premiere) and Figma for engaging visual content.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Bachelor’s Degree in Accounting and Finance</span>
                  <label>Universidad del Valle de México – Mexico City</label>
                  <label>2008 – 2010</label>
                </div>
                <div className="r-info">
                  <p>
                    Focused on financial analysis, budgeting, cost control, and strategic planning. 
                    Built a strong foundation in business finance that enhances my work in project 
                    planning and data-driven decision-making.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Bachelor’s Degree in Business</span>
                  <label>Universidad del Valle de México – Mexico City</label>
                  <label>2005 – 2009</label>
                </div>
                <div className="r-info">
                  <p>
                    Studied organizational leadership, operations, and entrepreneurship. This program 
                    shaped my business-oriented mindset and supports my ability to align technology 
                    solutions with business objectives.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">My Skills</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="dark-color">Creative & Marketing Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Photoshop</h6>
                <span className="theme-bg">82%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "82%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Illustrator</h6>
                <span className="theme-bg">94%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "94%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Figma</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>Premiere</h6>
                <span className="theme-bg">80%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>Google Ads & Google Analytics	</h6>
                <span className="theme-bg">96%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "96%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>Meta Ads (Facebook/IG)</h6>
                <span className="theme-bg">96%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "96%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
          <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
            <h3 className="dark-color">Development & Technical Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>HTML5 & CSS</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>C# / ASP.NET</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>JavaScript / React / Next.js</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Node.js / Express.js</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>Python / Django / Flask</h6>
                <span className="theme-bg">90%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>Go</h6>
                <span className="theme-bg">80%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>SQL & MongoDB</h6>
                <span className="theme-bg">90%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>Docker / Kubernetes</h6>
                <span className="theme-bg">85%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              <div className="progress-lt">
                <h6>Azure / AWS</h6>
                <span className="theme-bg">90%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
