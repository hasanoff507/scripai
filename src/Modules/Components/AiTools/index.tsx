import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import ContainerFull from "../Container";
import Nav from "../Nav";
import { Card } from "antd";
import { Icon } from "@blueprintjs/core";
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
        <div className="card__option__item">
          {categories.map((category: any, index: number) => (
            <div key={index}>
              <h3>{category.categoryName}</h3>
              <div className="aitools__display">
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
                      <Card
                        size="small"
                        title={
                          <div className="right__tab_card">
                            <Icon iconSize={20} color="black" icon="clean" />
                          </div>
                        }
                        style={{
                          width: "300px",
                          background: "#f0fdf3",
                          border: "1px solid #4ade80",
                          maxWidth: "100%",
                        }}
                      >
                        <p>{category.categoryTitle}</p>
                        <p>{template.templateName}</p>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContainerFull>
    </div>
  );
};

export default AiTools;
