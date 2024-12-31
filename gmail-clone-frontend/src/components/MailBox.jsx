/* eslint-disable react-hooks/rules-of-hooks */
import { FaRegWindowMinimize } from "react-icons/fa";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeInbox } from "../store/uiSlice";
import useSendMail from "../hooks/useSendMail";

const MailBox = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.tokenInfo);
  const isInboxOpen = useSelector((state) => state.ui.isInboxOpen);

  const [formData, setFormData] = useState({
    sendersaddress: user.email,
    receiversaddress: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendMail = async () => {
    try {
      await useSendMail(formData, token, () => {
        setFormData({ to: "", subject: "", message: "" });
      });
    } catch (err) {
      console.error("Error sending mail:", err);
    }
  };

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
                  name="receiversaddress"
                  value={formData.to}
                  onChange={handleChange}
                  className="bg-white border-b-2 h-10 items-center shadow-md p-3 outline-none"
                ></input>
                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white border-b-2  h-10 items-center shadow-md p-3 outline-none"
                ></input>
                <textarea
                  cols={10}
                  rows={10}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white outline-none p-3"
                  placeholder="Message..."
                ></textarea>
                <button
                  className="bg-[#0957D0] w-[20%] h-10 rounded-3xl text-white absolute left-3 bottom-3"
                  onClick={handleSendMail}
                >
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
