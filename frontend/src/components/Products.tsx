import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

export const Products: React.FC<{ limit?: number, columns?: number }> = ({ limit, columns = 1 }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const displayedProducts = limit ? products.slice(0, limit) : products;
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get<Product[]>('http://127.0.0.1:8000/api/products/');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <div className={`grid grid-cols-${columns} gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
            {displayedProducts.map(product => (


                <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                        </a>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.price}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">category: {product.category.name}</p>
                        <Link to={`/products/${product.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Shwom me the product
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>

            ))}
            </div>
        </div>
    );
};
