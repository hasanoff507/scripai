import React from "react";
import { Icon, Button } from "@blueprintjs/core";
import ContainerFull from "../Components/Container";
import { Link } from "react-router-dom";
import GoogleIcon from "../Assets/img/googlrIcon.png";
type Props = {};

const Home: React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <div className="scrip_header">
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
                <div style={{display:'flex', alignItems:'center',gap:'20px'}}>
                  <img
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
      </div>
      <div className="homepage__section">
        <ContainerFull>
          <div className="homepage">
            <h1>
              Save $60/m ScripAI is FREE <br /> write AI content{" "}
            </h1>
            <span>Paragraph</span>
            <p>10X faster & free AI content tool!</p>
          </div>
          <Link to="/paragraph">
            <Button
              icon="arrow-right"
              style={{
                fontSize: "20px",
                padding: "5px 45px",
                borderRadius: "20px",
                flexDirection: "row-reverse",
                gap: "10px",
                background: "#e11d48",
                color: "white",
                boxShadow: "unset",
              }}
            >
              Try for Free!
            </Button>
          </Link>
        </ContainerFull>
      </div>
    </div>
  );
};

export default Home;
