import React from "react";

const ChatInput = () => {
    return (
        <form className="flex flex-col items-center gap-3 px-3 py-2 sm:flex-row">
            <div className="flex">
                <button className="h-9 w-9">
                    <i class="fa-solid fa-circle-plus text-base text-blue-500"></i>
                </button>
                <button className="h-9 w-9">
                    <i class="fa-solid fa-image text-base text-blue-500"></i>
                </button>
                <button className="h-9 w-9">
                    <i class="fa-solid fa-note-sticky text-base text-blue-500"></i>
                </button>
                {/* <button className="h-9 w-9">
                <i class="fa-solid fa-gif text-base text-blue-500"></i>
            </button> */}
            </div>
            <div className="flex flex-1 gap-3">
                <div className="flex flex-1 gap-3 rounded-2xl bg-gray-200 px-2 py-2 items-center">
                    <input
                        className="outline-none bg-transparent w-full"
                        type="text"
                        placeholder="Aa"
                    />
                    <button>
                        <i class="fa-solid fa-face-smile text-base text-blue-500"></i>
                    </button>
                </div>
                <button>
                    <i class="fa-solid fa-play text-2xl text-blue-500"></i>
                </button>
            </div>
        </form>
    );
};

export default ChatInput;
