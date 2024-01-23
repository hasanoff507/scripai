import React,{useEffect} from "react";
import { Icon, Button } from "@blueprintjs/core";
import ContainerFull from "../Container";
import GoogleIcon from "../../Assets/img/googlrIcon.png";
import Login from "../Google/login";
import { gapi } from "gapi-script";

type Props = {};
const clientId =
  "954375066737-krhrae3rkpqu67iotu782jkn8bb0h1qv.apps.googleusercontent.com";

const Nav: React.FC<Props> = ({}) => {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load("client:auth2",start);
    },[])

  return (
    <header className="scrip_header">
      <ContainerFull>
        <nav className="scrip__nav">
          <div className="scrip__title-scrip">
            <Icon iconSize={29} color="white" icon="clean" />
            <a href="/">
              <h1>AI Text</h1>
              
              </a>
          </div>
          <div className="scrip__title_right">
            <a style={{color:'#fff'}} href="/ai-tools">All Tools</a>
            {/* <Button
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
            </Button> */}
            <Login/>
          </div>
        </nav>
      </ContainerFull>
    </header>
  );
};

export default Nav;
