import React from "react";
import userImg from "../assets/user.jpeg";

const Chat = () => {
    return (
        <div className="flex justify-center items-center gap-1 cursor-pointer py-2 px-3 hover:bg-gray-100 hover:rounded-md lg:hover:rounded-lg lg:justify-between">
            <img
                className="rounded-full min-w-[3rem] h-min-[3rem] lg:h-12 lg:w-12"
                src={userImg}
                alt="avatar"
            />
            <div className="hidden flex-col overflow-hidden flex-1 lg:flex">
                <span className="font-semibold">User Name</span>
                <span className="block truncate text-sm text-gray-500">
                    User: Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Veritatis asperiores blanditiis at distinctio cumque
                    quas officia ab eaque dolor nesciunt ut pariatur ducimus
                    praesentium aliquid minima, iure placeat. Tempore, quasi?
                </span>
            </div>
            <div className="hidden lg:block">
                <img
                    className="h-4 w-4 rounded-full"
                    src={userImg}
                    alt="users seen"
                />
            </div>
        </div>
    );
};

export default Chat;
