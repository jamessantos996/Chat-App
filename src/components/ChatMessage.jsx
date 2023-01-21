import React from "react";
import ChatInput from "./ChatInput";
import ChatMessageHeader from "./ChatMessageHeader";
import ChatUserMessage from "./ChatUserMessage";

const ChatMessage = () => {
    return (
        <div className="flex flex-col flex-1 py-2">
            <ChatMessageHeader />
            <div className="overflow-auto py-2 px-4 flex flex-col flex-1">
                <ChatUserMessage />
            </div>
            <ChatInput />
        </div>
    );
};

export default ChatMessage;
