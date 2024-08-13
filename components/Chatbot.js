// src/components/Chatbot.js
import React from 'react';
import { ChatBot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { useChatBot } from './utils/chatBotConfig';

const Chatbot = () => {
    const { config, messageParser, actionProvider } = useChatBot();

    return (
        <div style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            margin: 16,
            zIndex: 1000, // Ensures the chatbot is on top of other elements
        }}>
            <ChatBot
                config={config}
                messageParser={messageParser}
                actionProvider={actionProvider}
                style={{ borderRadius: '12px' }} // Example styling
            />
        </div>
    );
};

export default Chatbot;
