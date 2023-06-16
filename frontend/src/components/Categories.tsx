import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get<Category[]>('http://localhost:8000/api/categories/');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};
