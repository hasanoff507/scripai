import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import '../Modules/Assets/css/style.css';

const Generic = () => {
    const [categories, setCategories] = useState([
        // ... your categories data
    ]);

    useEffect(() => {
        fetch('https://finpalbackend.pythonanywhere.com/categories')
            .then(response => response.json())
            .then(json => setCategories(json));
    }, []);
console.log(categories);

    return (
        <Router>
        {categories.map((category:any, index:number) => (
            <div key={index}>
                <h3>{category.categoryName}</h3>
                <ul>
                    {category.templates.map((template:any, idx:number) => (
                        <li key={idx}>
                            <Link to={template.templateTitle}>
                                {template.templateName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </Router>
    );
};

export default Generic;
