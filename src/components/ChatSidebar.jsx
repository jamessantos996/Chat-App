import React from "react";
import { NavLink } from "react-router-dom";

const ChatSidebar = () => {
    return (
        <nav className="px-2 py-4 flex flex-col border-r border-gray-300">
            <div className="flex flex-col gap-2 flex-1">
                <NavLink
                    className=" hover:bg-gray-300 hover:rounded-md h-11 w-11 flex items-center justify-center"
                    to="/"
                >
                    <i className="fa-solid fa-comment text-2xl"></i>
                </NavLink>

                <NavLink
                    className="hover:bg-gray-300 hover:rounded-md h-11 w-11 flex items-center justify-center"
                    to="/"
                >
                    <i className="fa-solid fa-user-group text-2xl"></i>
                </NavLink>

                <NavLink
                    className="hover:bg-gray-300 hover:rounded-md h-11 w-11 flex items-center justify-center"
                    to="/"
                >
                    <i className="fa-sharp fa-solid fa-store text-2xl"></i>
                </NavLink>

                <NavLink
                    className="hover:bg-gray-300 hover:rounded-md h-11 w-11 flex items-center justify-center"
                    to="/"
                >
                    <i className="fa-solid fa-comment-dots text-2xl"></i>
                </NavLink>

                <NavLink
                    className="hover:bg-gray-300 hover:rounded-md h-11 w-11 flex items-center justify-center"
                    to="/"
                >
                    <i className="fa-solid fa-box-archive text-2xl"></i>
                </NavLink>
            </div>
            <div className="flex flex-col gap-2">
                <NavLink
                    className=" hover:bg-gray-300 hover:rounded-md h-11 w-11 flex items-center justify-center"
                    to="/"
                >
                    <i className="fa-solid fa-user-tie text-2xl"></i>
                </NavLink>
                <button className=" hover:bg-gray-300 hover:rounded-md h-11 w-11 flex items-center justify-center">
                    <i className="fa-solid fa-toggle-on text-2xl"></i>
                </button>
            </div>
        </nav>
    );
};

export default ChatSidebar;
