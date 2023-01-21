import React from "react";

const ChatSingleMessage = ({ message, isMe }) => {
    return (
        <div
            className={`
                py-1 px-3 rounded-xl
            ${
                isMe
                    ? "ml-auto bg-blue-500 text-white"
                    : "mr-auto bg-gray-200 text-black"
            }`}
        >
            {message}
        </div>
    );
};

export default ChatSingleMessage;
