import React from "react";
import { SocialMedia } from "../Api";
import '../Modules/Assets/css/style.css'

type Props = {

};

const Generic: React.FC<Props> = ({ }: Props) => {

    console.log(SocialMedia)
   
    return (
        <div >
        {SocialMedia.map((item) => {
            return (
                <div  key={item.id}>
                    <h4>{item.category}</h4>
                    <p>{item.socialMediaPost}</p>
                    <p>{item.socialMediaPostIdeas}</p>
                    <p>{item.hashtagGenerator}</p>
                    <p>{item.shortVideoScript}</p>
                </div>
            );
        })}
    </div>
    );
};

export default Generic;