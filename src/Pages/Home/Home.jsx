import Chat from "./Chat";
import Sidebar from "./Sidebar";


const Home = () => {
    return (
        <div className="bg-[#a7bcff] h-screen flex items-center justify-center">
            <div className="border-[1px] border-white rounded-lg w-4/6 h-5/6 flex justify-center overflow-hidden">
                <div className="w-4/12 bg-[#3e3c61]">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <Chat />
                </div>
            </div>
        </div>
    )
}
export default Home;