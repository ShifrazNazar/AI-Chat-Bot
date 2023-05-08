import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 h-screen text-justify">
        <h1 className="text-4xl font-bold mb-4">About Stark AI</h1>
        <p className="text-lg mb-4">
        Stark AI is a forward-thinking company that specializes in utilizing prompt engineering techniques for the GPT language model. Our focus is on developing intelligent software solutions that leverage the power of GPT to help businesses and organizations achieve their goals. We believe that prompt engineering is a key factor in maximizing the potential of GPT, and we're committed to staying at the forefront of this technology. Our team of experts has extensive experience in developing custom prompts that enable businesses to extract valuable insights, automate tasks, and enhance customer experiences. We work closely with our clients to understand their unique needs and develop tailored solutions that can help them achieve their objectives. At Stark AI, we're passionate about prompt engineering and we're dedicated to helping businesses harness the full potential of GPT for their success.
        </p>
        <p className="text-lg">
          Contact us today to learn more about how Stark AI can help your business harness the power of artificial intelligence.
        </p>
      </div>
    </div>
  );
};

export default About;
