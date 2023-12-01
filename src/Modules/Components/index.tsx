import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import LeftTab from "./LeftTab";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";


type Props = {

};

const Components: React.FC<Props> = ({ }: Props) => {

   
    return (
       <div>
        <Nav />
        <div className="container-fluid">
            <LeftTab/>
            <CenterTab/>
            <RightTab/>
        </div>
       </div>
    );
};

export default Components;