import React from "react";
import Chat from "./Chat";
import ChatSearch from "./ChatSearch";

const Chats = () => {
    return (
        <div className="w-20 lg:w-96 py-3 px-2 border-r border-r-gray-300">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Chats</h1>
                <div className="hidden gap-3 lg:flex">
                    <div className="h-9 w-9 rounded-full bg-gray-100 flex justify-center items-center">
                        <i class="fa-solid fa-video"></i>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gray-100 flex justify-center items-center">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            </div>
            <ChatSearch />
            <div className="flex flex-col gap-2 overflow-auto">
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    );
};

export default Chats;
