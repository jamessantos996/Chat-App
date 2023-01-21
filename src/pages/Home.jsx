import ChatMessage from "../components/ChatMessage";
import Chats from "../components/Chats";
import ChatSidebar from "../components/ChatSidebar";

const Home = () => {
    return (
        <div className="h-[100vh] w-[100vw]">
            <div className="h-full w-full flex">
                <ChatSidebar />
                <Chats />
                <ChatMessage />
            </div>
        </div>
    );
};

export default Home;
