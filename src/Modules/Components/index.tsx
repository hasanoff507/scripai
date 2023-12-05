import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import LeftTab from "./LeftTab";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";
import ContainerFull from "./Container";
import Footer from "./Footer";

type Post = {
  id: number;
  body: string;
  // ... other fields of a post
};

const Components: React.FC<{}> = () => {
  const [post, setPost] = useState<Post[]>([]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const id = values.username; // Assuming 'username' field is used for the ID

    // Fetch information based on the ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(Array.isArray(json) ? json : [json])) // Ensure it's always an array
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <Nav />
      <ContainerFull>
        <div className="container-fluid">
          <LeftTab onFinish={onFinish} />
          <CenterTab post={post} /> {/* Now post can be Post or undefined */}
          <RightTab />
        </div>
      </ContainerFull>
      <div className="border__all"></div>
      <ContainerFull>
        <Footer />
      </ContainerFull>
    </div>
  );
};

export default Components;
