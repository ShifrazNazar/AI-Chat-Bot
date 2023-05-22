import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import Navbar from "./Navbar";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ChatApp = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [savedChats, setSavedChats] = useState([]);

  useEffect(() => {
    // Fetch chat history on component mount
    fetchChatHistory();
  }, []);

  const addMessage = (text, isUser = false) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, isUser, id: Date.now() },
    ]);
  };

  const getBotResponse = async (userInput) => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: userInput,
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

  const saveChatHistory = async () => {
    try {
      await addDoc(collection(db, "chatHistory"), { messages });
    } catch (error) {
      console.error("Error saving chat history:", error);
    }
  };

  const fetchChatHistory = async () => {
    const querySnapshot = await getDocs(collection(db, "chatHistory"));
    setSavedChats(querySnapshot.docs.map((doc) => doc.data()));
  };

  const handleChatClick = (chat) => {
    setMessages(chat.messages);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <div className="p-8 flex">
        <div className="w-1/3 pr-4 overflow-y-auto h-screen">
          <h2 className="text-2xl text-gray-100 mb-4">Saved Chats</h2>
          {savedChats.map((chat, index) => (
            <div
              key={index}
              className="bg-gray-700 text-gray-300 p-4 rounded-md mb-4 overflow-y-auto h-40"
              onClick={() => handleChatClick(chat)}
            >
              {chat.messages.map((message) => (
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
          ))}
        </div>
        <div className="w-2/3">
          <h1 className="text-4xl text-gray-100 text-center mt-4">
            Chat with AI
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
            <button
              onClick={saveChatHistory}
              className="bg-green-600 text-gray-100 px-4 py-2 rounded-md mt-4 ml-4"
            >
              Save Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
