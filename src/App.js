import React from "react";
import Chatbot from "react-chatbot-kit";

import "./App.css";

import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";

function App() {
  return (
    <div className="App">
      <div>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
