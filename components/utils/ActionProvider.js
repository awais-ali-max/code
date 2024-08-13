class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleAddItem = () => {
        this.setState((prev) => ({
            ...prev,
            currentAction: 'add-item',
        }));
        this.createChatBotMessage("To add an item, please provide the item name, quantity, and type.");
    };

    handleUpdateItem = () => {
        this.setState((prev) => ({
            ...prev,
            currentAction: 'update-item',
        }));
        this.createChatBotMessage("To update an item, please provide the item ID and the new details (name, quantity, type).");
    };

    handleDeleteItem = () => {
        this.setState((prev) => ({
            ...prev,
            currentAction: 'delete-item',
        }));
        this.createChatBotMessage("To delete an item, please provide the item ID.");
    };

    handleListItems = () => {
        this.setState((prev) => ({
            ...prev,
            currentAction: 'list-items',
        }));
        this.createChatBotMessage("Fetching the list of pantry items. Please wait a moment.");
    };

    handleError = (error) => {
        this.createChatBotMessage(`An error occurred: ${error.message}. Please try again.`);
    };
}

export default ActionProvider;
