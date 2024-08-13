import axios from 'axios';  // Ensure you have axios if needed for API calls

class MessageParser {
    constructor(actionProvider, createChatBotMessage) {
        this.actionProvider = actionProvider;
        this.createChatBotMessage = createChatBotMessage;
    }

    async parse(message) {
        const lowerCaseMessage = message.toLowerCase();
        
        if (lowerCaseMessage.includes('add item')) {
            this.actionProvider.handleAddItem();
            this.createChatBotMessage("Sure! Please provide the item details such as name, quantity, and type.");
        } else if (lowerCaseMessage.includes('update item')) {
            this.actionProvider.handleUpdateItem();
            this.createChatBotMessage("Got it! Please provide the details of the item you want to update.");
        } else if (lowerCaseMessage.includes('delete item')) {
            this.actionProvider.handleDeleteItem();
            this.createChatBotMessage("Understood! Please provide the item ID you wish to delete.");
        } else if (lowerCaseMessage.includes('list items')) {
            this.actionProvider.handleListItems();
            this.createChatBotMessage("Fetching the list of pantry items for you.");
        } else {
            this.createChatBotMessage("Sorry, I didn't understand that. Can you please specify if you want to add, update, delete, or list items?");
        }

        // Optional: Call an external API for advanced NLP processing
        // await this.processMessageWithNLP(message);
    }

    // Example of adding external NLP processing
    async processMessageWithNLP(message) {
        try {
            const response = await axios.post('https://example-nlp-api.com/process', { message });
            const { intent } = response.data;

            // Map intent to actions
            if (intent === 'add_item') {
                this.actionProvider.handleAddItem();
            } else if (intent === 'update_item') {
                this.actionProvider.handleUpdateItem();
            } else if (intent === 'delete_item') {
                this.actionProvider.handleDeleteItem();
            } else if (intent === 'list_items') {
                this.actionProvider.handleListItems();
            } else {
                this.createChatBotMessage("Sorry, I didn't understand that.");
            }
        } catch (error) {
            console.error('Error processing message with NLP:', error);
            this.createChatBotMessage("Sorry, something went wrong while processing your request.");
        }
    }
}

export default MessageParser;
