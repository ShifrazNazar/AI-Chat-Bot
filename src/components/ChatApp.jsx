import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Navbar from "./Navbar";

const ChatApp = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const getResponse = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 100,
    });
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <div className="text-gray-100 p-4">
        <textarea
          cols={55}
          rows={10}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-800 text-gray-100 px-3 py-2 rounded-md w-full"
        />
        <br />
        <button
          onClick={getResponse}
          className="bg-blue-600 text-gray-100 px-4 py-2 rounded-md mt-4"
        >
          Submit
        </button>
        <h3 className="mt-4">{result}</h3>
      </div>
    </div>
  );
};

export default ChatApp;
