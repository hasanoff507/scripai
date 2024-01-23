import React, { useEffect } from "react";
import { Icon, Button } from "@blueprintjs/core";
import ContainerFull from "../Components/Container";
import { Link } from "react-router-dom";
import GoogleIcon from "../Assets/img/googlrIcon.png";
import Login from "../Components/Google/login";

import Nav from "../Components/Nav";

type Props = {};

const Home: React.FC<Props> = ({}: Props) => {



  return (
    <div>
      <div className="scrip_header">
        <Nav/>
      </div>
      <div className="homepage__section">
        <ContainerFull>
          <div className="homepage">
            <h1>
              Save $60/m AI Text is FREE <br /> write AI content{" "}
            </h1>
            <span>Paragraph</span>
            <p>10X faster & free AI content tool!</p>
          </div>
          <Link to="/ai-tools">
            <Button
              icon="arrow-right"
              style={{
                fontSize: "20px",
                padding: "5px 45px",
                borderRadius: "20px",
                flexDirection: "row-reverse",
                gap: "10px",
                background: "#73c2fb",
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
