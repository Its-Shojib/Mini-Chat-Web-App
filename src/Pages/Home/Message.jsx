

const Message = () => {
    return (
        <div className="flex gap-5 mb-5">
            <div className="flex flex-col text-gray-600 font-light">
                <img className="w-10 h-10 rounded-full object-cover" src="/woman.png" alt="" />
                <span className="text-sm">Just Now</span>
            </div>
            <div className="max-w-[80%] flex flex-col gap-2">
                <p className="bg-white px-5 py-2 rounded-l-none rounded-3xl">Hello</p>
                <img className="w-[50%]" src="" alt="" />
            </div>
        </div>
    )
}
export default Message;