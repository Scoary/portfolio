import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p80", skillPercent: "80", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "BOOTSTRAP" },
  { skillClass: "p60", skillPercent: "60", skillName: "TAILWIND CSS" },
  { skillClass: "p80", skillPercent: "80", skillName: "PHP" },
  { skillClass: "p80", skillPercent: "80", skillName: "SYMFONY" },
  { skillClass: "p70", skillPercent: "70", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "50", skillName: "PRESTASHOP" },
  { skillClass: "p60", skillPercent: "60", skillName: "JQUERY" },
  { skillClass: "p65", skillPercent: "65", skillName: "ANGULAR" },
  { skillClass: "p70", skillPercent: "70", skillName: "REACT" },
  { skillClass: "p50", skillPercent: "50", skillName: "NEXTJS" },
  { skillClass: "p70", skillPercent: "70", skillName: "MYSQL" },
  { skillClass: "p70", skillPercent: "70", skillName: "POSTGRESQL" },
  { skillClass: "p70", skillPercent: "70", skillName: "PHPMYADMIN" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
