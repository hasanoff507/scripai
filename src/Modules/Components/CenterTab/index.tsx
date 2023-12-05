import React, { useEffect, useState } from "react";
import { Button, Icon,Card, Elevation } from "@blueprintjs/core";

type Post = {
  id: number;
  body: string;
};

type Props = {
  post: Post[];
};

const CenterTab: React.FC<Props> = ({ post }: Props) => {
  const [animatedPosts, setAnimatedPosts] = useState<string[]>([]);

  useEffect(() => {
    if (post.length > 0) {
      setAnimatedPosts(post.map(() => ""));
      post.forEach((item, index) => {
        let charIndex = 0;
        const intervalId = window.setInterval(() => {
          if (charIndex < item.body.length) {
            setAnimatedPosts([item.body.substring(0, charIndex + 1)])
            charIndex++;
          } else {
            clearInterval(intervalId);
          }
        }, 100);
      });
    } else {
      const defaultText = "Ai will write content here!";
      let index = 0;
      const intervalId = window.setInterval(() => {
        if (index < defaultText.length) {
          setAnimatedPosts([defaultText.substring(0, index + 1)]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [post]);

  return (
    <div>
      <div className="center__tab_input">
        <div className="center__tab">
          <div className="center__title">
            <Icon iconSize={20} color="black" icon="clean" />
            {animatedPosts.map((animatedPost, index) => (
              <p key={index} className="entry">
                {animatedPost}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="clear">
        <Button style={{boxShadow:'unset', backgroundColor:'#374051',color:'white',padding:'11px 19px', borderRadius:'20px'}}>Copy to Clipboard</Button>
        <Button style={{boxShadow:'unset', backgroundColor:'#e11d48' ,padding:'11px 19px', borderRadius:'50%'}}><Icon iconSize={20} color="white" icon="refresh" /></Button>
      </div>
    </div>
  );
};

export default CenterTab;
