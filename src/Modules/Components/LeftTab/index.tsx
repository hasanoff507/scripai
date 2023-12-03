import React, { useState, useRef } from "react";
import { Button, Checkbox, Form, Input } from 'antd';

type Props = {};
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
const LeftTab: React.FC<Props> = ({}: Props) => {
 
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div>
      <h2>AI Paragraph Writer</h2>
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
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          style={{maxWidth:'unset'}}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          // rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LeftTab;
