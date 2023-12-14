import React, {  useState } from "react";
import Nav from "./Nav";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";
import ContainerFull from "./Container";
import Footer from "./Footer";
import { Button, Form, Input, Select } from "antd";

type FieldType = {
  url: string;
  company_name: string;
  about: string;
  location: string;
  audience: string;
};
const { TextArea } = Input;

const { Option } = Select;

type Post = {
  text: string;
};

const Components: React.FC<{}> = () => {
  const [post, setPost] = useState<Post>({ text: "" });
  const [loading, setLoading] = useState(false);

  const onFinish = (values: FieldType) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: values.url,
        company_name: values.company_name,
        about: values.about,
        location: values.location,
        audience: values.audience,
      }),
    };

    setLoading(true);
    fetch("http://localhost:8095/generate", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false)
        console.log("Fetched data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Nav />
      <ContainerFull>
        <div className="container-fluid">
          <div className="paragraph__list">
            <div className="paragraph__title">
              <h2>AI Paragraph Writer</h2>
              <div className="paragraph__list__span"></div>
            </div>
            <div className="form__paragraph">
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
                <h5 className="keywords">Url</h5>
                <Form.Item<FieldType>
                  name="url"
                  rules={[{ required: true, message: "Topic is required" }]}
                >
                  <Input />
                </Form.Item>
                <h5 className="keywords">Company Name</h5>
                <Form.Item<FieldType>
                  name="company_name"
                  rules={[{ required: true, message: "Topic is required" }]}
                >
                  <Input />
                </Form.Item>
                <h5 className="topic">About</h5>
                <Form.Item<FieldType>
                  name="about"
                  rules={[{ required: true, message: "Topic is required" }]}
                  style={{ maxWidth: "unset" }}
                >
                  <TextArea placeholder="Please enter topic for paragraph..." />
                </Form.Item>
                <h5 className="keywords">Location</h5>
                <Form.Item<FieldType>
                  name="location"
                  rules={[{ required: true, message: "Topic is required" }]}
                >
                  <Input />
                </Form.Item>
                <h5 className="keywords">
                  Keywords <span>(optional)</span>
                </h5>
                <Form.Item<FieldType>
                  name="audience"
                  rules={[{ required: true, message: "Topic is required" }]}
                >
                  <Input />
                </Form.Item>
                <div className="select__option">
                  <div className="language">
                    <p>Language</p>
                    <Select defaultValue="English">
                      <Option value="Spanish">Spanish</Option>
                      <Option value="German">German</Option>
                      <Option value="Russian">Russian</Option>
                    </Select>
                  </div>
                  <div className="tone">
                    <p>Tone</p>
                    <Select defaultValue="Professional">
                      <Option value="Informative">Informative</Option>
                      <Option value="Convincing">Convincing</Option>
                      <Option value="Enthusiastic">Enthusiastic</Option>
                    </Select>
                  </div>
                </div>
                <Form.Item>
                  <Button
                    style={{
                      width: "100%",
                      marginInlineStart: "unset",
                      marginTop: "20px",
                      background: "#e11d48",
                      borderRadius: "20px",
                    }}
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
      <div className="border__all"></div>
      <ContainerFull>
        <Footer />
      </ContainerFull>
    </div>
  );
};

export default Components;
