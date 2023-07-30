import React, { useState } from "react";
import axios from "axios";
import ChatBox from "../components/ChatBox";
import FAQButtons from "../components/FAQButtons";

const PromptPage = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const faqQuestions = [
    "What is your name?",
    "How does this work?",
    "Can you help me?",
    // Add more frequently asked questions here
  ];

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFaqClick = (question) => {
    setInputText(question);
  };

  const handleSendClick = async () => {
    try {
      // Replace 'YOUR_GPT_API_ENDPOINT' with your GPT API endpoint
      const response = await axios.post("YOUR_GPT_API_ENDPOINT", {
        input: inputText,
      });

      setResponseText(response.data.output);
      setInputText("");
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="page-container">
      <ChatBox
        inputText={inputText}
        responseText={responseText}
        handleInputChange={handleInputChange}
        handleSendClick={handleSendClick}
      />
      <FAQButtons faqQuestions={faqQuestions} handleFaqClick={handleFaqClick} />
    </div>
  );
};

export default PromptPage;
