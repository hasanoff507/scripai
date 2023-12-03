import React, { useEffect, useState } from "react";
import { Icon,Button } from "@blueprintjs/core";
import ContainerFull from "../Container";

type Props = {};

const Nav: React.FC<Props> = ({}: Props) => {
  return (
    <header className="scrip_header">
      <ContainerFull>
      <nav className="scrip__nav">
        <div className="scrip__title-scrip">
          <Icon iconSize={29} color="white" icon="clean" />
          <h1>Scrip</h1>
        </div>
        <div className="scrip__title_right">
          <h3>All Tools</h3>
          <Button icon="log-in" style={{borderRadius:"20px", padding:"0 40px"}} text="Login" />
        </div>
      </nav>
    </ContainerFull>
    </header>
  );
};

export default Nav;
