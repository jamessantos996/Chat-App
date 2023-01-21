import React from "react";
import userImg from "../assets/user.jpeg";

const ChatMessageHeader = () => {
    return (
        <div className="flex flex-col-reverse py-2 px-3 shadow-md sm:flex-row sm:justify-between bg-white">
            <div className="flex items-center gap-2 justify-center">
                <img
                    className="h-9 w-9 rounded-full"
                    src={userImg}
                    alt="user message"
                />
                <div className="flex flex-col gap-1">
                    <span className="text-base font-medium">User Name</span>
                    <span className="text-xs">Active 12m ago</span>
                </div>
            </div>
            <div className="flex justify-center lg:block">
                <button className="h-9 w-9">
                    <i class="fa-solid fa-phone text-blue-500"></i>
                </button>
                <button className="h-9 w-9">
                    <i class="fa-solid fa-video text-blue-500"></i>
                </button>
                <button className="h-9 w-9">
                    <i class="fa-solid fa-ellipsis text-blue-500"></i>
                </button>
            </div>
        </div>
    );
};

export default ChatMessageHeader;
