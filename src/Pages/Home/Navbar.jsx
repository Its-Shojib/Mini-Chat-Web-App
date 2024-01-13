

const Navbar = () => {
    return (
        <div className="flex items-center bg-[#2f2d52] h-12 p-2 justify-between text-white">
            <span className="font-bold">Mini Chat</span>
            <div className="flex gap-2">
                <img className="h-8 w-8 rounded-full bg-[#ddddf7] object-cover" src="/woman.png" alt="" />
                <span>Name</span>
                <button className="bg-red-800 text-white rounded-md px-2 py-1 text-sm">Logout</button>
            </div>
        </div>
    )
}
export default Navbar;