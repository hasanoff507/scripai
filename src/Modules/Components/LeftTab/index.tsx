import React from "react";
import { Button, Form, Input, Select } from "antd";

type Post = {
  id: number;
  body: string;
};

type Props = {
  setPost: React.Dispatch<React.SetStateAction<Post[]>>;
};

type FieldType = {
  url: string;
  company_name: any;
  about: string;
  location: string;
  audience: string;
};
const { TextArea } = Input;

const { Option } = Select;

const LeftTab: React.FC<Props> = ({ setPost }: Props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const url = values.url;
    const company_name = values.company_name;
    const about = values.about;
    const location = values.location;
    const audience = values.audience;

    fetch(`http://localhost:8095/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url:url,
        company_name:company_name,
        about:about,
        location:location,
        audience:audience
      }),
    })
      .then((response) => response.json())
      .then((json) => setPost(Array.isArray(json) ? json : [json]))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
            <h5 className="keywords">Location</h5>
            <Form.Item<FieldType>
              name="location"
              rules={[{ required: true, message: "Topic is required" }]}
            >
              <Input />
            </Form.Item>
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
  );
};

export default LeftTab;
