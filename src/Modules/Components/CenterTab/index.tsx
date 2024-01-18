import React, { useEffect, useState } from "react";
import {
  Button,
  Icon,
  Spinner,
  Toaster,
  Position,
  Intent,
} from "@blueprintjs/core";
import TableComponent from "../TableComponent";


// Props expected by CenterTab component
type Props = {
  loading: boolean;
  valuesPost: any;
};

const CenterTab: React.FC<Props> = ({ loading, valuesPost }) => {


  // Function to handle refresh action
  const refresh = () => {
    window.location.reload();
  };

  // Function to copy post text to clipboard
  const copyToClipboard = () => {
    if (valuesPost && valuesPost.text) {
      navigator.clipboard
        .writeText(valuesPost.text)
        .then(() => {
          Toaster.create({ position: Position.TOP }).show({
            message: "Text copied to clipboard!",
            intent: Intent.SUCCESS,
          });
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      console.error("No text to copy");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="center__tab">
        <div className="center__title">
          {loading ? (
            <Spinner size={50} />
          ) : (
            <TableComponent valuesPost={valuesPost}  />
          )}
        </div>
      </div>
      <div className="clear">
        <Button
          onClick={copyToClipboard}
          style={{
            boxShadow: "unset",
            backgroundColor: "#374051",
            color: "white",
            padding: "11px 19px",
            borderRadius: "20px",
          }}
        >
          Copy to Clipboard
        </Button>
        <Button
          onClick={refresh}
          style={{
            boxShadow: "unset",
            backgroundColor: "#73c2fb",
            padding: "11px 19px",
            borderRadius: "50%",
          }}
        >
          <Icon iconSize={20} color="white" icon="refresh" />
        </Button>
      </div>
    </div>
  );
};

export default CenterTab;
