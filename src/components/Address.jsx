import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Mon adresse</span>26B rue du Commandant Hugueny,<br></br> 52000 - Chaumont.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Mon email</span>{" "}
        <a href="mailto:fgroslevin@gmail.com">fgroslevin@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Mon téléphone</span>{" "}
        <a href="Tel: +33649609226">06 49 60 92 26</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
