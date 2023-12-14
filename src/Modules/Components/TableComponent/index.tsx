import React,{useEffect, useRef} from "react";
import { Icon } from "@blueprintjs/core";
import Typed from 'typed.js';


const TableComponent = ({ data }: any) => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["AI will write content here!"], // Add your strings here
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|',
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
        <p ref={el}/>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {data.headers.map((header: any, index: number) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row: any, index: number) => (
          <tr key={index}>
            {row.map((cell: any, cellIndex: number) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableComponent;
