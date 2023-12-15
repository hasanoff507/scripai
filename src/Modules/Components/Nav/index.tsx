import React from "react";
import { Icon, Button } from "@blueprintjs/core";
import ContainerFull from "../Container";
import GoogleIcon from "../../Assets/img/googlrIcon.png";

type Props = {};

const Nav: React.FC<Props> = ({}) => {
  return (
    <header className="scrip_header">
      <ContainerFull>
        <nav className="scrip__nav">
          <div className="scrip__title-scrip">
            <Icon iconSize={29} color="white" icon="clean" />
            <h1>Scrip</h1>
          </div>
          <div className="scrip__title_right">
            <h3>All Tools</h3>
            <Button
              style={{
                borderRadius: "20px",
                gap: "22px",
                paddingRight: "20px",
              }}
            >
              {" "}
              <div 
              className="font"
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <img
                className="googleIcon"
                  style={{ width: "24px", height: "23px" }}
                  src={GoogleIcon}
                  alt=""
                />
                Login with Google
              </div>
            </Button>
          </div>
        </nav>
      </ContainerFull>
    </header>
  );
};

export default Nav;
