import { FaRegWindowMinimize } from "react-icons/fa";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeInbox } from "../store/uiSlice";

const MailBox = () => {
  // const navigate = useNavigate();
  // const [showMailBox, setShowMailBox] = useState(false);

  // useEffect(() => {
  //   const boolValue = localStorage.getItem("ShowMailBox");
  //   setShowMailBox(boolValue);
  // }, [showMailBox]);

  const dispatch = useDispatch();
  const isInboxOpen = useSelector((state) => state.ui.isInboxOpen);

  return (
    <>
      {isInboxOpen && (
        <>
          <div className="absolute bottom-0 right-0 h-[75%] w-[35%] z-50 bg-white">
            <div>
              <div className="flex justify-between bg-[#F2F6FB] h-[10%] items-center p-4">
                <p>New Message</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      // localStorage.setItem("ShowMailBox", "dontshow");
                      // navigate("/");
                      dispatch(closeInbox(true));
                      // window.location.reload();
                    }}
                  >
                    <FaRegWindowMinimize className="cursor-pointer" />
                  </button>

                  <RiExpandDiagonalLine className="cursor-pointer" />

                  <button
                    onClick={() => {
                      // localStorage.setItem("ShowMailBox", "dontshow");
                      // navigate("/");
                      // window.location.reload();
                      dispatch(closeInbox(true));
                    }}
                  >
                    <RxCross2 className="cursor-pointer" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="To"
                  className="bg-white border-b-2 h-10 items-center shadow-md p-3 outline-none"
                ></input>
                <input
                  placeholder="Subject"
                  className="bg-white border-b-2  h-10 items-center shadow-md p-3 outline-none"
                ></input>
                <textarea
                  cols={10}
                  rows={10}
                  className="bg-white outline-none p-3"
                  placeholder="Message..."
                ></textarea>
                <button className="bg-[#0957D0] w-[20%] h-10 rounded-3xl text-white absolute left-3 bottom-3">
                  Send
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MailBox;
