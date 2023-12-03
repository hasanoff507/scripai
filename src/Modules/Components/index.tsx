import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import LeftTab from "./LeftTab";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";
import ContainerFull from "./Container";

type Props = {};

const Components: React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <Nav />
      <ContainerFull>
        <div className="container-fluid">
          <LeftTab />
          <CenterTab />
          <RightTab />
        </div>
      </ContainerFull>
    </div>
  );
};

export default Components;
