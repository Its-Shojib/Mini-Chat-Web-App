import { useState } from "react";


const Message = () => {
    let [owner, setOwner] = useState(false);
    return (
        <div className={`flex gap-5 mb-5 ${owner ? "flex-row-reverse" : 'flex-row'}`}>
            <div className={`flex flex-col text-gray-600 font-light`}>
                <img className="w-10 h-10 rounded-full object-cover" src="/woman.png" alt="" />
                <span className="text-sm">Just Now</span>
            </div>
            <div className="max-w-[80%] flex flex-col gap-2">
                <p className={`bg-white px-5 py-2  ${owner?'rounded-tl-xl rounded-tr-0 rounded-br-xl rounded-bl-xl':'rounded-tl-0 rounded-tr-xl rounded-br-xl rounded-bl-xl'} max-w-max`}>Hello</p>
                <img className="w-[50%]" src="/woman.png" alt="" />
            </div>
        </div>
    )
}
export default Message;