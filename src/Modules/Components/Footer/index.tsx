import React from "react";
import { Icon, Card, Elevation } from "@blueprintjs/core";

type Props = {};

const Footer: React.FC<Props> = ({}: Props) => {
  return (
    <div className="footer__section">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        <Card
          style={{
            border: "1px solid #000",
            borderRadius: "20px",
            width: "340px",
          }}
          interactive={true}
          elevation={Elevation.TWO}
        >
          <div className="footer__card">
            <Icon iconSize={20} color="black" icon="clean" />
          </div>
          <p className="footer__text">Linkedln Post</p>
          <span className="footer__span">
            Write LinkedIn post that make your LinkedIn <br /> conncetions stop
            scrolling. Try AI LinkedIn <br /> Post generator by Scrip AI and
            watch your <br /> LinkedIn post go viral!.
          </span>
        </Card>
        <Card
          style={{
            border: "1px solid #000",
            borderRadius: "20px",
            width: "340px",
          }}
          interactive={true}
          elevation={Elevation.TWO}
        >
          <div className="footer__card">
            <Icon iconSize={20} color="black" icon="clean" />
          </div>
          <p className="footer__text">Linkedln Story Post</p>
          <span className="footer__span">
            Write LinkedIn Story post that make your LinkedIn conncetions stop
            scrolling. Try AI LinkedIn Story Post generator by Scrip AI and
            watch your LinkedIn post go viral!.
          </span>
        </Card>
        <Card
          style={{
            border: "1px solid #000",
            borderRadius: "20px",
            width: "340px",
          }}
          interactive={true}
          elevation={Elevation.TWO}
        >
          <div className="footer__card">
            <Icon iconSize={20} color="black" icon="clean" />
          </div>
          <p className="footer__text">Twitter Tweet</p>
          <span className="footer__span">
            Generate Twitter Tweet that make your Twitter followers stop
            scrolling. Try AI Twitter Tweet generator by Scrip AI and watch your
            Twitter post go viral!.
          </span>
        </Card>
        <Card
          style={{
            border: "1px solid #000",
            borderRadius: "20px",
            width: "340px",
          }}
          interactive={true}
          elevation={Elevation.TWO}
        >
          <div className="footer__card">
            <Icon iconSize={20} color="black" icon="clean" />
          </div>
          <p className="footer__text">Linkedin Hashtag</p>
          <span className="footer__span">
            Generate Linkedin Hashtags that make Linkedin Algorithm Happy. Try
            AI Linkedin Hashtag generator by Scrip AI and watch your Linkedin
            post go viral!.
          </span>
        </Card>
      </div>
      <div className="about">
        <span>Privacy | T&C | GDPR | New </span>
      </div>
    </div>
  );
};

export default Footer;
