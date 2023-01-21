import React from "react";
import ChatInput from "./ChatInput";
import ChatSingleMessage from "./ChatSingleMessage";

const ChatUserMessage = () => {
    return (
        <div className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 gap-2">
                <ChatSingleMessage message="Hi!" isMe={false} />
                <ChatSingleMessage message="Hello!" isMe={true} />
                <ChatSingleMessage message="Yow!" isMe={false} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />

                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
                <ChatSingleMessage message="sup!" isMe={true} />
            </div>
        </div>
    );
};

export default ChatUserMessage;
