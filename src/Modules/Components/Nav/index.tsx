import React, { useEffect, useState } from "react";
import { Icon } from "@blueprintjs/core";

type Props = {};

const Nav: React.FC<Props> = ({}: Props) => {
  return (
    <header>
      <nav>
        <div className="scrip__title-scrip">
          <Icon iconSize={29} icon="clean" />
          <h1>Scrip</h1>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
