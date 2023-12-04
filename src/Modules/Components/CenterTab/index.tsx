import React, { useEffect, useState } from "react";
import { Icon } from "@blueprintjs/core";

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
            setAnimatedPosts(post.map(() => ''));
            post.forEach((item, index) => {
                let charIndex = 0;
                const intervalId = window.setInterval(() => {
                    if (charIndex < item.body.length) {
                        setAnimatedPosts((currentPosts) => {
                            const newPosts = [...currentPosts];
                            newPosts[index] += item.body.charAt(charIndex);
                            return newPosts;
                        });
                        charIndex++;
                    } else {
                        clearInterval(intervalId);
                    }
                }, 100);
            });
        } else {
            // Handle the default text animation
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
    }, [post]); // Dependency on `post`

    return (
        <div className="center__tab">
            <div className="center__title">
                <Icon iconSize={20} color="black" icon="clean" />
                {animatedPosts.map((animatedPost, index) => (
                    <p key={index} className="entry">{animatedPost}</p>
                ))}
            </div>
        </div>
    );
};

export default CenterTab;
