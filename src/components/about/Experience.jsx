import React from "react";

const experienceContent = [
  {
    year: "   2020 - 2021",
    position: "Co-dirigeant",
    compnayName: "E-commerce - dijon",
    details: `Création de la boutique en ligne (CMS) , élaboration des
    collections, préparations des commandes, gestion
    SEO/SEA (campagne de pub).`,
  },
  {
    year: "2019 - 2021",
    position: "Expert Sécurité",
    compnayName: "Veirsure - Chaumont / Dijon",
    details: `Commercial terrain - particuliers et professionnels.`,
  },
  {
    year: "2018",
    position: "Négociateur Immobilier",
    compnayName: "ERA Immobilier - Chaumont",
    details: `Prise de mandat, négociation immobilière, prospection
    terrain.`,
  },
  {
    year: "2017",
    position: "Chargé de clientèle centre d'appels ENGIE",
    compnayName: "Cap2Call - Chaumont",
    details: `Commercial téléphonique`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
