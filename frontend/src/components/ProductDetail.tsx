import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  slug: string;
  image: string;
  category: {
    id: number;
    name: string;
    slug: string;
    description: string;
  };
}

export const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get<Product>(`http://localhost:8000/api/products/${slug}/`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};
