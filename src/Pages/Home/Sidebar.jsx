
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Search></Search>
            <Chats></Chats>
        </div>
    )
}
export default Sidebar;