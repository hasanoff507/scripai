import React, { useEffect, useRef } from "react";
import { Icon } from "@blueprintjs/core";
import Typed from "typed.js";

type TableData = {
  headers: string[];
  rows: string[][];
};

type Props = {
  data: TableData;
};

const TableComponent: React.FC<Props> = ({ data }: Props) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["AI will write content here!"], // Add your strings here
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 0, // Set backSpeed to 0
      backDelay: 1000,
      smartBackspace: true,
      loop: false, // Set loop to false
      showCursor: true,
      cursorChar: "|",
    });

    // Destroy Typed instance on unmounting to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  // Check if data is valid before rendering
  if (!data || data.headers.length === 0 || data.rows.length === 0) {
    return (
      <div className="table__component">
        <Icon iconSize={20} color="black" icon="clean" />
        <p ref={el} />
      </div>
    );
  }

  return (
    <div className="">
      {data.headers.map((header: any, index: number) => (
        <p key={index}>{header}</p>
      ))}
      {data.rows.map((row: any, index: number) => (
        <div key={index}>
          {row.map((cell: any, cellIndex: number) => (
            <p key={cellIndex}>{cell}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
export default TableComponent;
