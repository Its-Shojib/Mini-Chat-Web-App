import { CiImageOn } from "react-icons/ci";
import { MdOutlineAttachFile } from "react-icons/md";
const Input = () => {
    return (
        <div className="h-12 bg-white p-2 flex items-center justify-between">
            <input 
            className="w-full border-none outline-none text-[#2f2d52] text-lg placeholder:text-gray-600"
            type="text" 
            placeholder="Type Something..." />
            <div className="flex items-center gap-2">
                <CiImageOn className="text-2xl cursor-pointer" />
                <input 
                type="file" 
                style={{ display: "none" }} name="" id="file" />
                <label htmlFor="file">
                    <MdOutlineAttachFile className="text-2xl cursor-pointer" />
                </label>
                <button className="text-white bg-blue-600 px-3 py-2 text-sm rounded-md">Send</button>
            </div>
        </div>
    )
}
export default Input;