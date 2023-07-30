import React from "react";

const ChatBox = ({
  inputText,
  responseText,
  handleInputChange,
  handleSendClick,
}) => {
  return (
    <div className="chat-box">
      <div className="response-box">
        {responseText && <p>{responseText}</p>}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your question here..."
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
