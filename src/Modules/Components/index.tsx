import React, {  useState } from "react";
import Nav from "./Nav";
import LeftTab from "./LeftTab";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";
import ContainerFull from "./Container";
import Footer from "./Footer";

type Post = {
  id: number;
  body: string;

};

const Components: React.FC<{}> = () => {
  const [post, setPost] = useState<Post[]>([]);

  return (
    <div>
      <Nav />
      <ContainerFull>
        <div className="container-fluid">
          <LeftTab  setPost={setPost}/>
          <CenterTab post={post} /> 
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
