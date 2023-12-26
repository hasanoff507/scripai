import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Assets/css/style.css";
import Components from "./Components";
import Home from "./Home";
import AiTools from "./AiTools";
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
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [templates, setTemplates] = useState();
  const [templateTitle, setTemplateTitle] = useState()
  const [categoryTitle , setCategoryTitle]=  useState()


  useEffect(() => {
    fetch("http://localhost:8095/categories")
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
        setLoading(false); // Set loading to false once categories are fetched
      });
  }, []);

  useEffect(() => {
    if (categoryTitle && templateTitle) { // Ensure both values are set
      fetch(`http://localhost:8095/templates/${categoryTitle}/${templateTitle}`)
        .then(response => response.json())
        .then(json => {
          setTemplates(json);

        })
        .catch(error => {
          console.error('Error fetching template data:', error);
          setLoading(false)
        });
    }
  }, [categoryTitle, templateTitle]); 


  return (
    <Router>
      <Routes>
        {categories.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <Route path="/" element={<Home />} />
            <Route
              path="ai-tools"
              element={<AiTools categories={categories}  setTemplateTitle={setTemplateTitle} setCategoryTitle={setCategoryTitle} />}
            />
            <Route path={`${item.categoryTitle}`}>
              {item.templates.map((template: any, idx: number) => (
                <Route key={idx}>
                  <Route
                    path={`${template.templateTitle}`}
                    element={<Components templates={templates}/>}
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
