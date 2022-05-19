import React from "react";

const personalInfoContent = [
  { meta: "Prénom", metaInfo: "Flavien" },
  { meta: "Nom", metaInfo: "Groslevin" },
  { meta: "Age", metaInfo: "22 ans" },
  { meta: "Nationalité", metaInfo: "Français" },
  { meta: "Adresse", metaInfo: "26B rue du Commandant Hugueny, 52000 Chaumont" },
  { meta: "Télephone", metaInfo: "06 49 60 92 26" },
  { meta: "Email", metaInfo: "fgroslevin@gmail.com" },
  { meta: "Langue", metaInfo: "Français, Anglais" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li cl key={i}>
          <span className="title">{val.meta} : </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
