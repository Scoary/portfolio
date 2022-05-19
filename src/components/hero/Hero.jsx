import React, { useState } from "react";
import Modal from "react-modal";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: "img/hero/img_profil.png",
  heroMobileImage: "img-mobile.png",
  heroTitleName: "Flavien Groslevin",
  heroDesignation: "Développeur Web et Web Mobile",
  heroDescriptions: `Après quelques années en tant que commercial et une création d'entreprise dans le e-commerce qui m'a permis d'obtenir les bases du développement web. Cette passion pour cette activité au fil du temps m'a amené à entreprendre un titre professionnel. Aujourd'hui Je suis un concepteur de sites Web et un développeur full stack junior. Je suis passionné par le développement et recherche un emploi dans ce secteur. 
  `,
  heroBtn: "En savoir plus sur moi",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-lg-start">
          <div>
            <img
              src={`img/hero/${heroContent.heroMobileImage}`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="photo de profil"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p style={{textAlign: "justify"}} className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  À propos de <span>moi</span>
                </h1>
                <span className="title-bg">pour résumer</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
