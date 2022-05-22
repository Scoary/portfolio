import React from "react";

const ModalSevenContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>site statique pour une concession automobile</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-8 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">site statique</span>
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
              <span className="ft-wt-600 uppercase">HTML, CSS, JS</span>
            </div>
            {/* End .col */}
            <div className="col-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir le projet </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://elecar-fg.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.elecar-fg.netlify.app
                </a>
              </span>
            </div>
            <div className="col-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir le code source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/Scoary/Project-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.github.com/Scoary/Project-auto
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-7.png" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalSevenContent;
