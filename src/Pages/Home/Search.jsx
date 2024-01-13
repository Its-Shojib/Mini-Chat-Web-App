

const Search = () => {
    return (
        <div className="border-b pb-1 border-gray-400">
            <div className="p-2">
                <input
                    className="bg-transparent border-none outline-none text-white placeholder:text-gray-300" type="text"
                    placeholder="Find a user..." />
            </div>
            <div className="flex gap-2 h-12 items-center text-white p-2 cursor-pointer hover:bg-[#2f2d52]">
                <img className="h-8 w-8 rounded-full bg-[#ddddf7] object-cover" src="/woman.png" alt="" />
                <div>
                    <span className="text-lg font-semibold">Name</span>
                    <p className="text-sm text-gray-300">Hello</p>
                </div>
            </div>
        </div>
    )
}
export default Search;