import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "KYC Verifier",
  initialMessages: [
    createChatBotMessage(`Hello Welcome to KYC verification process`),
    createChatBotMessage(`Type begin to start with the process...`),
  ],
};

export default config;
