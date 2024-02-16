//Import Component
import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

// Type
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
  handleSubmitLink: (categoryTitle: any, templateTitle: any) => void
};

const RightTab: React.FC<Props> = ({
  categories,
  setTemplateTitle,
  setCategoryTitle,
  handleSubmitLink
}: Props) => {
 


  return (
    <div className="right__tab">
      {categories.map((category: any, index: number) => (
        <div key={index}>
          <h3>{category.categoryName}</h3>
          {category.templates.map((template: Template, idx: number) => (
            <div key={idx}>
              <Link
                reloadDocument
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
    </div>
  );
};

export default RightTab;
