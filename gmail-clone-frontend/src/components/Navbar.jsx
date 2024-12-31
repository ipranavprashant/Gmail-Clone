import { GiHamburgerMenu } from "react-icons/gi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { RiGeminiFill } from "react-icons/ri";
import { IoApps } from "react-icons/io5";
import Avatar from "react-avatar";
import { FaSearch } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div className="flex w-full gap-8 p-5 justify-between items-center">
        <div className="flex w-[50%] justify-between">
          <div className="flex gap-4 items-center">
            <GiHamburgerMenu size={"24px"} className="cursor-pointer" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png"
              alt="logo"
              className="h-6 cursor-pointer"
            />
            <p className="text-2xl cursor-pointer">Gmail</p>
          </div>
          <div className="flex bg-[#E9F1FB]  w-[75%] items-center p-2 rounded-3xl">
            <FaSearch className="ml-3" size={"18px"} />
            <input
              placeholder="Search mail"
              className="bg-[#E9F1FB] h-8 ml-3 outline-none w-[100%]"
            />
            <RiListSettingsLine className="mr-3" size={"24px"} />
          </div>
        </div>
        <p>
          Welcome, <span className="font-bold capitalize">{user.username}</span>
          <p className="text-gray-500">({user.email})</p>
        </p>
        <div className="flex gap-5">
          <IoHelpCircleOutline size={"24px"} className="cursor-pointer" />
          <IoMdSettings size={"24px"} className="cursor-pointer" />
          <RiGeminiFill size={"24px"} className="cursor-pointer" />
          <IoApps size={"24px"} className="cursor-pointer" />
          <Avatar
            src={user.profilepic}
            size="35"
            round={true}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
