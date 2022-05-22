import React from "react";

const ModalTwoContent = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>Société d'espionnage</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Projet </span>:{" "}
              <span className="ft-wt-600 uppercase">Application Web </span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">Fictif</span>
            </div>
            {/* End .col */}

            <div className="col-12 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">HTML, CSS, Javascript, PHP, MySQL, Framework : Symfony, Bootstrap</span>
            </div>
            {/* End .col */}
            <div className="col-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir le projet </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://kgb-interface.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.kgb-interface.herokuapp.com/
                </a>
              </span>
            </div>
            <div className="col-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Voir le code source </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://github.com/Scoary/kgb-interface"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.github.com/Scoary/kgb-interface
                </a>
              </span>
            </div>
            <div className="col-12 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Tester l'application </span>:{" "}
              <span className="ft-wt-600 uppercase">Email : john.doe@example.com, MDP : johndoe2022</span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="img/projects/project-2.png" alt="Espionnage" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalTwoContent;
