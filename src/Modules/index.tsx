import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  const [templateTitle, setTemplateTitle] = useState();
  const [categoryTitle, setCategoryTitle] = useState();

  // Default categories to use as a fallback
  const defaultCategories: Category[] = [
    {
      categoryTitle: "Default Category 1",
      categoryName: "default-category-1",
      templates: [
        { templateTitle: "Template 1", templateName: "template-1" },
        // ... more templates
      ],
    },
    // ... more default categories
  ];

  useEffect(() => {
    fetch("https://finpalbackend.pythonanywhere.com/categories")
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories(defaultCategories); // Use default categories in case of an error
      })
      .finally(() => {
        setLoading(false); // Set loading to false in both cases
      });
  }, []);

  useEffect(() => {
    const storedTemplates = localStorage.getItem("templateData");
    if (storedTemplates) {
      setTemplates(JSON.parse(storedTemplates));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (categoryTitle && templateTitle) {
      fetch(`https://finpalbackend.pythonanywhere.com/templates/${categoryTitle}/${templateTitle}`)
        .then((response) => response.json())
        .then((json) => {
          setTemplates(json);
          localStorage.setItem("templateData", JSON.stringify(json));
        })
        .catch((error) => {
          console.error("Error fetching template data:", error);
          setLoading(false);
        });
    }
  }, [categoryTitle, templateTitle]);

  // Render logic
  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <Routes>
        {categories.map((item: Category, index: number) => (
          <React.Fragment key={index}>
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
            <Route path={`${item.categoryTitle}`}>
              {item.templates.map((template: Template, idx: number) => (
                <Route key={idx}>
                  <Route
                    path={`${template.templateTitle}`}
                    element={
                      <Components
                        categories={categories}
                        setTemplateTitle={setTemplateTitle}
                        setCategoryTitle={setCategoryTitle}
                        templates={templates}
                        templateTitle={templateTitle}
                        categoryTitle={categoryTitle}
                      />
                    }
                  />
                </Route>
              ))}
            </Route>
          </React.Fragment>
        ))}
      </Routes>
    </Router>
  );
};

export default Modules;
