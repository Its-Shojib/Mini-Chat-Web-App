import { BsCameraVideoFill } from "react-icons/bs";
import { IoIosPersonAdd } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
    return (
        <div className="">
            <div className="h-12 flex justify-between items-center bg-[#5d5b8d] p-2 text-gray-400">
                <span className="text-black font-bold">Jane</span>
                <div className="flex gap-2 cursor-pointer">
                    <BsCameraVideoFill className='text-2xl' />
                    <IoIosPersonAdd className='text-2xl' />
                    <CiCircleMore className='text-2xl' />
                </div>
            </div>
            <Messages />
            <Input />

        </div>
    )
}
export default Chat;