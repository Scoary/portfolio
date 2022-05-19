import React from "react";

const educationContent = [
  {
    year: "septembre 2021 à aujourd'hui",
    degree: "Développeur Web et Web Mobile spé Angular",
    institute: "STUDI - À distance",
    details: `
    Maquetter une application,
    Réaliser une interface utilisateur web statique et adaptable,
    Développer une interface utilisateur web dynamique,
    Réaliser une interface utilisateur avec une solution de gestion
    de contenu ou e-commerce,
    Créer une base de données,
    Développer les composants d'accès aux données,
    Développer la partie back-end d'une application web ou web
    mobile,
    Elaborer et mettre en œuvre des composants dans une
    application de gestion de contenu ou e-commerce.`,
  },
  {
    year: "2014 à 2017",
    degree: "BAC STI2D ARCHITECTURE ET CONSTRUCTION",
    institute: "Lycée charles de gaulle - Chaumont",
    details: `Gestion d'équipe, Modélisation, Conception`,
  }
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-university"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
