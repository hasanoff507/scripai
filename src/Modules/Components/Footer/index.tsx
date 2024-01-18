import React from "react";
import { Icon, Card, Elevation } from "@blueprintjs/core";

type Props = {};

const Footer: React.FC<Props> = ({}: Props) => {
  

  return (
    <div className="footer__section">
      <div className="footer__section-display"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "15px",
        }}
      >

      </div>
      <div className="about">
        <span>Privacy | T&C | GDPR | New </span>
      </div>
    </div>
  );
};

export default Footer;
