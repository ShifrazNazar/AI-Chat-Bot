import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Navbar from "./Navbar";

const ChatApp = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const addMessage = (text, isUser = false) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, isUser, id: Date.now() },
    ]);
  };

  const getBotResponse = async (userInput) => {
    try {
      const prompt = `As a Google software engineer, how would you respond to the following:\n\n${userInput}\n\nGoogle Engineer:`;

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.9,
      });

      const botResponse = response.data.choices[0].text.trim();
      addMessage(botResponse);
    } catch (error) {
      console.error("Failed to fetch OpenAI API:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addMessage(input, true);
    getBotResponse(input);
    setInput("");
  };

  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />

      <div className="px-20 ">
        <h1 className="text-4xl text-gray-100 text-center mt-4">
          Chat with a Google Engineer
        </h1>
        <div className="bg-gray-800 rounded-md p-4 mt-4 h-80 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`px-4 py-2 rounded-md ${
                message.isUser
                  ? "bg-blue-600 text-gray-100"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-700 text-gray-100 px-3 py-2 rounded-md w-full"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-gray-100 px-4 py-2 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;
