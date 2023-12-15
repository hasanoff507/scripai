import React, { useEffect, useState } from "react";
import { Button, Icon, Spinner, Toaster, Position, Intent } from "@blueprintjs/core";
import TableComponent from "../TableComponent";

// Define the structure of a post
type Post = {
  text: string;
};

// Define the structure of the table data
type TableData = {
  headers: string[];
  rows: string[][];
};

// Props expected by CenterTab component
type Props = {
  post: Post;
  loading: boolean;
};

const CenterTab: React.FC<Props> = ({ post, loading }) => {
  // State for storing table data
  const [firstTableData, setFirstTableData] = useState<TableData>({
    headers: [],
    rows: [],
  });

  useEffect(() => {
    if (!loading && post.text) {
      // Function to process the text into table data
      const processData = (text: string): TableData => {
        const lines = text.split("\n").filter((line) => line.trim());
        const headers = lines[2].split("|").map((header) => header.trim());
        const rows = lines
          .slice(3)
          .map((line) => line.split("|").map((cell) => cell.trim()));
        return { headers, rows };
      };

      // Split the text and process the first table
      const [firstTableText, _] = post.text.split("Second Table:");
      setFirstTableData(processData(firstTableText));
    }
  }, [post, loading]);

  // Function to handle refresh action
  const refresh = () => {
    window.location.reload();
  };

  // Function to copy post text to clipboard
  const copyToClipboard = () => {
    if (post.text) {
      navigator.clipboard.writeText(post.text)
        .then(() => {
          Toaster.create({ position: Position.TOP }).show({
            message: "Text copied to clipboard!",
            intent: Intent.SUCCESS,
          });
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };


  return (
    <div style={{width:'100%'}}>
        <div className="center__tab">
          <div className="center__title">
            {loading ? (
              <Spinner size={50} />
            ) : (
              <TableComponent data={firstTableData} />
            )}
          </div>
        </div>
      <div className="clear">
        <Button onClick={copyToClipboard}
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
            backgroundColor: "#e11d48",
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
