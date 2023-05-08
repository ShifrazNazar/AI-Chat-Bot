import React from 'react';
import Navbar from './Navbar';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'GPT-3 Prompt Engineering',
      description: 'Our team of experts can develop custom prompts to help you maximize the potential of GPT-3 for your business needs.',
      image: 'https://via.placeholder.com/500x300',
      price: '$5,000 - $10,000',
    },
    {
      id: 2,
      title: 'GPT-3 Chatbots',
      description: 'We can develop intelligent chatbots powered by GPT-3 that can enhance your customer service and support.',
      image: 'https://via.placeholder.com/500x300',
      price: '$10,000 - $20,000',
    },
    {
      id: 3,
      title: 'GPT-3 Content Generation',
      description: 'Our content generation services can help you automate content creation and generate high-quality content at scale.',
      image: 'https://via.placeholder.com/500x300',
      price: '$15,000 - $30,000',
    },
  ];

  return (
    <div className="bg-gray-900 text-white h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg text-black">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="px-4 py-4">
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-lg mb-4">{product.description}</p>
                <p className="text-lg font-bold">{product.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
