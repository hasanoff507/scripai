import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";
import ContainerFull from "./Container";
import Footer from "./Footer";
import { Button, Form, Input } from "antd";

type FieldType = {
  url: string;
  company_name: string;
  about: string;
  location: string;
  audience: string;
};

type TemplatesType = {
  categoryTitle: string;
  title: string;
  name: string;
  fields: string[];
};

type Post = {
  text: string;
};

type Props = {
  templates: any;
};

const Components: React.FC<Props> = ({ templates }: Props) => {
  const [post, setPost] = useState<Post>({ text: "" });
  const [loading, setLoading] = useState(false);

  const getInitialSaveData = () => {
    const saved = localStorage.getItem("saveData");
    if (saved) {
      try {
        const savedData = JSON.parse(saved);
        // Check if the `templates` prop is different from the saved data
        if (JSON.stringify(templates) !== JSON.stringify(savedData)) {
          return templates; // if different, use the new templates
        }
        return savedData; // if not, use the saved data
      } catch (e) {
        console.error("Parsing error:", e);
        return templates; // in case of error, default to templates
      }
    }
    return templates; // if nothing is saved, use the templates
  };

  const [saveData, setSaveData] = useState<TemplatesType>(getInitialSaveData);

  useEffect(() => {
    localStorage.setItem("saveData", JSON.stringify(saveData));
  }, [saveData]);

  const onFinish = (values: FieldType) => {
    console.log(values, "success");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo, "error");
  };

  return (
    <div>
      <Nav />
      <ContainerFull>
        <div className="container-fluid">
          <div className="paragraph__list">
            <div className="paragraph__title">
              <h2 className="savedata__title">{saveData?.name}</h2>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                {saveData?.fields?.map((field, index) => (
                  <React.Fragment key={index}>
                    <p>{field}</p>
                    <Form.Item
                      name={field}
                      rules={[
                        { required: true, message: `${field} is required` },
                      ]}
                    >
                      <Input placeholder={`Please enter ${field}`} />
                    </Form.Item>
                  </React.Fragment>
                ))}
                <Form.Item>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <CenterTab post={post} loading={loading} />
          <RightTab />
        </div>
      </ContainerFull>
      <Footer />
    </div>
  );
};

export default Components;
