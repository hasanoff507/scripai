import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";
import ContainerFull from "./Container";
import Footer from "./Footer";
import { Button, Form, Input, Select } from "antd";
import { Spinner } from "@blueprintjs/core";

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

const { TextArea } = Input;
const { Option } = Select;

type Post = {
  text: string;
};

type Props = {
  templates: any;
};

const Components: React.FC<Props> = ({ templates }: Props) => {
  const [post, setPost] = useState<Post>({ text: "" });
  const [loading, setLoading] = useState(false);
  const [saveData, setSaveData] = useState<TemplatesType>(templates);

  useEffect(() => {
    setSaveData(templates);
  }, [templates]);

  const onFinish = (values: FieldType) => {
    // Form submit logic
  };

  const onFinishFailed = (errorInfo: any) => {
    // Form failed logic
  };

  return (
    <div>
      <Nav />
      <ContainerFull>
        <div className="container-fluid">
          <div className="paragraph__list">
            <div className="paragraph__title">
              {/* Dynamic Form Items */}
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
                  <Form.Item
                    key={index}
                    name={field}
                    rules={[{ required: true, message: `${field} is required` }]}
                  >
                    <Input placeholder={`Please enter ${field}`} />
                  </Form.Item>
                ))}
                {/* Language and Tone Select Options */}
                <div className="select__option">
                  {/* ... */}
                </div>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <CenterTab post={post} loading={loading} />
            <RightTab />
          </div>
        </div>
      </ContainerFull>
      <Footer />
    </div>
  );
};

export default Components;
