//Import Components
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import CenterTab from "./CenterTab";
import RightTab from "./RightTab";
import ContainerFull from "./Container";
import Footer from "./Footer";
import { Button, Form, Input } from "antd";

//Import Type
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

type Template = {
  templateTitle: string;
  templateName: string;
};

type Category = {
  categoryTitle: string;
  categoryName: string;
  templates: Template[];
};

type Props = {
  templates: any;
  templateTitle: any;
  categoryTitle: any;
  categories: Category[];
  setTemplateTitle: any;
  setCategoryTitle: any;
};

const Components: React.FC<Props> = ({
  templates,
  templateTitle,
  categoryTitle,
  categories,
  setTemplateTitle,
  setCategoryTitle,
}: Props) => {
  //State for POST and GET

  const [loading, setLoading] = useState(false);
  const [valuesPost, setValuesPost] = useState();

  //  LocalStorage from Titles
  useEffect(() => {
    if (templateTitle && categoryTitle) {
      localStorage.setItem("templateTitle", templateTitle);
      localStorage.setItem("categoryTitle", categoryTitle);
    }
  }, [templateTitle, categoryTitle]);

  //LcocalStorage from Values

  const getInitialSaveData = () => {
    const saved = localStorage.getItem("saveData");
    if (saved) {
      try {
        const savedData = JSON.parse(saved);
        return savedData;
      } catch (e) {
        console.error("Parsing error:", e);
        return templates;
      }
    }
    return templates;
  };

  const [saveData, setSaveData] = useState<TemplatesType>(getInitialSaveData);

  //LocalStorage SaveData

  useEffect(() => {
    localStorage.setItem("saveData", JSON.stringify(saveData));
  }, [saveData]);

  // Render LcoalStorage

  useEffect(() => {
    setSaveData(templates);
  }, [templates]);

  //Post Request

  const onFinish = (values: FieldType) => {
    const localCategoryTitle = localStorage.getItem("categoryTitle");
    const localTemplateTitle = localStorage.getItem("templateTitle");

    if (!localCategoryTitle || !localTemplateTitle) {
      console.error("Category title or template title is missing");
      return; // Exit the function if titles are missing
    }

    setLoading(true); // Set loading to true when the request starts

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(
      `https://finpalbackend.pythonanywhere.com/generate/${localCategoryTitle}/${localTemplateTitle}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setValuesPost(data);
        setLoading(false); // Set loading to false when the request is complete
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false); // Set loading to false also in case of error
      });
  };

  //Feiled Post Request
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
                    <p style={{ textTransform: "capitalize" }}>{field}</p>
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
                    style={{
                      width: "100%",
                      color: "#fff",
                      background: "#73c2fb",
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
          <CenterTab valuesPost={valuesPost} loading={loading} />
          <RightTab
            categories={categories}
            setTemplateTitle={setTemplateTitle}
            setCategoryTitle={setCategoryTitle}
          />
        </div>
      </ContainerFull>
      <Footer />
    </div>
  );
};

export default Components;
