import { Icon } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";

type Props = {};

const CenterTab: React.FC<Props> = ({}: Props) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const text = "AI will write content here!"; 

        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayText((prevText) => prevText + text[index]);
            index++;

            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, 100); 

        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    return (
        <div className="center__tab">
            <div className="center__title">
                <Icon iconSize={20} color="black" icon="clean" />
                <p className="entry">{displayText}</p>
            </div>
        </div>
    );
};

export default CenterTab;
