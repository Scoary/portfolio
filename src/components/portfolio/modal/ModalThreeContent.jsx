import React from "react";

const ModalOneContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Charles Cantin</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-8 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Site statique avec CMS en back </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-4 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Fictif</span>
            </div>
            {/* End .col */}

            <div className="col-12 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript, CMS Headless : Strapi,  Framework : NextJS, Tailwind</span>
            </div>
            {/* End .col */}
            <div className="col-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir le projet </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://charles-cantin-photgraphe.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.charles-cantin-photgraphe.vercel.app
                </a>
              </span>
            </div>
            <div className="col-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir le code source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/Scoary/front-charles-cantin"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.github.com/Scoary/front-charles-cantin
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-3.png" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
