import { GoPencil } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const sideBarItems = [
    {
      logo: <MdInbox size={"20px"} />,
      title: "Inbox",
    },
    {
      logo: <FaRegStar size={"20px"} />,
      title: "Starred",
    },
    {
      logo: <GoClock size={"20px"} />,
      title: "Snoozed",
    },
    {
      logo: <IoMdSend size={"20px"} />,
      title: "Sent",
    },
    {
      logo: <MdExpandMore size={"20px"} />,
      title: "More",
    },
  ];
  const handleAlertToast = (alert) => {
    console.log(alert);

    toast(`${alert}`, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      <div className="p-4 w-[35%] lg:w-[20%] sticky top-0">
        <button
          className="bg-[#C1E7FE] flex gap-2 w-36 h-12 rounded-2xl items-center p-4"
          onClick={() => {
            localStorage.setItem("ShowMailBox", "show");
            navigate("/home/compose-mail");
            window.location.reload();
          }}
        >
          <GoPencil size={"24px"} />
          Compose
        </button>
        {sideBarItems.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`flex gap-4 w-[100%] p-4 mt-2 h-10 items-center hover:bg-slate-200 cursor-pointer rounded-3xl ${
                  index === activeItem && index !== 4 ? "bg-[#D3E2FD]" : ""
                }`}
                onClick={() => {
                  setActiveItem(index);
                  handleAlertToast(`${item.title} selected!`);
                }}
              >
                {item.logo}
                <p className="text-gray-600">{item.title}</p>
              </div>
            </>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default Sidebar;
