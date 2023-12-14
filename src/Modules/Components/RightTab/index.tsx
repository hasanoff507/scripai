import React from "react";
import { Card } from "antd";
import { Icon } from "@blueprintjs/core";

type Props = {};

const RightTab: React.FC<Props> = ({}: Props) => {
  return (
    <div className="right__tab">
      <div className="card__tab">
        <Card
          size="small"
          title={
            <div className="right__tab_card">
              <Icon iconSize={20} color="black" icon="clean" />
            </div>
          }
          extra={<p className="right__money">$40</p>}
          style={{
            width: "400px",
            background: "#f0fdf3",
            border: "1px solid #4ade80",
          }}
        >
          <p>Money Saved</p>
          <p>You have saved $40 by using scripAI over other AI tools!</p>
        </Card>
        <Card
          size="small"
          title={
            <div className="right__tab_card">
              <Icon iconSize={20} color="black" icon="trending-up" />
            </div>
          }
          extra={<p className="right__money">3508</p>}
          style={{
            width: "400px",
            background: "#fafaf9",
            border: "1px solid #d6d3d1",
          }}
        >
          <p>Number of Token:</p>
          <p>Total number of words/token consumed by you.</p>
        </Card>
      </div>
      <div className="list__tools">
        <div className="list__tools_text">
          <h6>LIST OF FREE AI TOOLS !</h6>
          <span>(scroll to see more tools ↓)</span>
          <div></div>
        </div>
        <div className="social__media">
          <div className="socialmedia__ai">
            <h6>Social Media AI</h6>
            <span>(Live)</span>
            <ul>
              <li>
                <a href="#">Social Media Post</a>
              </li>
              <li>
                <a href="#">Social Media Post Ideas</a>
              </li>
              <li>
                <a href="#">Hashtag Generator</a>
              </li>
              <li>
                <a href="#">Short Video Script</a>
              </li>
            </ul>
          </div>
          <div className="socialmedia__ai">
            <h6>Social Media AI</h6>
            <span>(Live)</span>
            <ul>
              <li>
                <a href="#">Social Media Post</a>
              </li>
              <li>
                <a href="#">Social Media Post Ideas</a>
              </li>
              <li>
                <a href="#">Hashtag Generator</a>
              </li>
              <li>
                <a href="#">Short Video Script</a>
              </li>
            </ul>
          </div>
          <div className="socialmedia__ai">
            <h6>Social Media AI</h6>
            <span>(Live)</span>
            <ul>
              <li>
                <a href="#">Social Media Post</a>
              </li>
              <li>
                <a href="#">Social Media Post Ideas</a>
              </li>
              <li>
                <a href="#">Hashtag Generator</a>
              </li>
              <li>
                <a href="#">Short Video Script</a>
              </li>
            </ul>
          </div>
          <div className="socialmedia__ai">
            <h6>Social Media AI</h6>
            <span>(Live)</span>
            <ul>
              <li>
                <a href="#">Social Media Post</a>
              </li>
              <li>
                <a href="#">Social Media Post Ideas</a>
              </li>
              <li>
                <a href="#">Hashtag Generator</a>
              </li>
              <li>
                <a href="#">Short Video Script</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightTab;
