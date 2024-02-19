import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Assets/css/style.css";
import Components from "./Components";
import Home from "./Home";
import AiTools from "./Components/AiTools";
import { Spinner } from "@blueprintjs/core";

type Template = {
  templateTitle: string;
  templateName: string;
};

type Category = {
  categoryTitle: string;
  categoryName: string;
  templates: Template[];
};

const Modules: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [templates, setTemplates] = useState();
  const [templateTitle, setTemplateTitle] = useState<string | null>(() =>
    localStorage.getItem("selectedTemplateTitle")
  );
  const [categoryTitle, setCategoryTitle] = useState<string | null>(() =>
    localStorage.getItem("selectedCategoryTitle")
  );

  // Default categories
  const defaultCategories: Category[] = [
    {
      categoryTitle: "Default Category 1",
      categoryName: "default-category-1",
      templates: [{ templateTitle: "Template 1", templateName: "template-1" }],
    },
  ];

  useEffect(() => {
    fetch("https://finpalbackend.pythonanywhere.com/categories")
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories(defaultCategories);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const storedTemplates = localStorage.getItem("templateData");
    if (storedTemplates) {
      setTemplates(JSON.parse(storedTemplates));
    }
  }, []);

  useEffect(() => {
    if (categoryTitle && templateTitle) {
      setLoading(true);
      fetch(
        `https://finpalbackend.pythonanywhere.com/templates/${categoryTitle}/${templateTitle}`
      )
        .then((response) => response.json())
        .then((json) => {
          setTemplates(json);
          localStorage.setItem("templateData", JSON.stringify(json));
        })
        .catch((error) => console.error("Error fetching template data:", error))
        .finally(() => setLoading(false));
    }
  }, [categoryTitle, templateTitle]);

  const handleSubmitLink = (categoryTitle: string, templateTitle: string) => {
    setCategoryTitle(categoryTitle);
    setTemplateTitle(templateTitle);
    localStorage.setItem("selectedCategoryTitle", categoryTitle);
    localStorage.setItem("selectedTemplateTitle", templateTitle);
  };

  if (loading) {
    return (
      <Spinner
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      />
    );
  }

  return (

        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="ai-tools"
          element={
            <AiTools
              categories={categories}
              setTemplateTitle={setTemplateTitle}
              setCategoryTitle={setCategoryTitle}
            />
          }
        />
        {categories.map((item: Category) => (
          <Route key={item.categoryName} path={`${item.categoryTitle}`}>
            {item.templates.map((template: Template) => (
              <Route
                key={template.templateName}
                path={`${template.templateTitle}`}
                element={
                  <Components
                    categories={categories}
                    setTemplateTitle={setTemplateTitle}
                    setCategoryTitle={setCategoryTitle}
                    templates={templates}
                    templateTitle={templateTitle}
                    categoryTitle={categoryTitle}
                    handleSubmitLink={handleSubmitLink}
                  />
                }
              />
            ))}
          </Route>
        ))}
          
      </Routes>
    </Router>


  );
};

export default Modules;
