import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import ContainerFull from "../Components/Container";
import Nav from "../Components/Nav";

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
  categories: Category[];
  setTemplateTitle: any;
  setCategoryTitle: any;
};

const AiTools: React.FC<Props> = ({
  categories,
  setTemplateTitle,
  setCategoryTitle,
}: Props) => {


  useEffect(() => {
    const hasReloaded = localStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  const handleSubmitLink = (categoryTitle: any, templateTitle: any) => {
    setCategoryTitle(categoryTitle);
    setTemplateTitle(templateTitle);
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <ContainerFull>
        {categories.map((category: any, index: number) => (
          <div key={index}>
            <h3>{category.categoryName}</h3>
            {category.templates.map((template: Template, idx: number) => (
              <div key={idx}>
                <Link
                  to={`/${category.categoryTitle}/${template.templateTitle}`}
                  onClick={() =>
                    handleSubmitLink(
                      category.categoryTitle,
                      template.templateTitle
                    )
                  }
                >
                  {template.templateName}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </ContainerFull>
    </div>
  );
};

export default AiTools;
