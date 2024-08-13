// src/utils/chatBotConfig.js
import { createChatBotMessage } from 'react-chatbot-kit';
import { ActionProvider as DefaultActionProvider } from 'react-chatbot-kit';
import { MessageParser as DefaultMessageParser } from 'react-chatbot-kit';
import { Config as ChatBotConfig } from 'react-chatbot-kit';

// Define the configuration for the chatbot
const config = {
    botName: 'PantryBot',
    initialMessages: [createChatBotMessage('Hello! How can I assist you with your pantry today?')],
    // Additional configuration options
    customStyles: {
        botMessageBox: {
            backgroundColor: '#333', // Customize chatbot message box background
        },
        chatButton: {
            backgroundColor: '#D4AF37', // Customize chat button color
        },
    },
};

// Define a message parser
const MessageParser = (props) => {
    const parse = (message) => {
        // Implement message parsing logic here
        // Example: return new CustomMessageParser().parse(message);
    };

    return <DefaultMessageParser {...props} parse={parse} />;
};

// Define an action provider
const ActionProvider = (props) => {
    const handleAction = (action) => {
        // Add custom actions here
    };

    return <DefaultActionProvider {...props} handleAction={handleAction} />;
};

// Export the hook
export const useChatBot = () => {
    return { config, messageParser: MessageParser, actionProvider: ActionProvider };
};
