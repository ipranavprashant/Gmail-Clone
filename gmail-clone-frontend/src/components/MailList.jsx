import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInbox } from "../store/mailSlice";
import useGetInbox from "../hooks/useGetInbox";
import {
  MdCheckBoxOutlineBlank,
  MdInbox,
  MdOutlineLocalOffer,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { IoIosArrowDown, IoMdContacts } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { BsThreeDotsVertical, BsExclamationCircle } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";

const MailList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchInbox = useGetInbox();

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.tokenInfo);
  const inbox = useSelector((state) => state.mail.inbox);

  const [activeOption, setActiveOption] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInbox(user._id, token);
        dispatch(setInbox(data));
      } catch (err) {
        console.error("Failed to fetch inbox:", err);
      }
    };
    getData();
  }, [dispatch, fetchInbox, token, user._id]);

  if (!Array.isArray(inbox.Emails)) {
    return <div>Loading...</div>;
  }

  const options = [
    { logo: <MdInbox />, text: "Primary" },
    { logo: <MdOutlineLocalOffer />, text: "Promotions" },
    { logo: <IoMdContacts />, text: "Social" },
    { logo: <BsExclamationCircle />, text: "Updates" },
  ];

  return (
    <div className="w-full p-4 bg-white overflow-y-auto rounded-xl">
      <div className="flex justify-between p-4 h-12 items-center">
        <div className="flex gap-6">
          <div className="flex gap-2">
            <MdCheckBoxOutlineBlank className="cursor-pointer" />
            <IoIosArrowDown className="cursor-pointer" />
          </div>
          <TbReload className="cursor-pointer" />
          <BsThreeDotsVertical className="cursor-pointer" />
        </div>

        <div className="flex gap-5 items-center">
          <p>1-50 of 65</p>
          <FaAngleLeft className="cursor-pointer" />
          <FaAngleRight className="cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setActiveOption(index)}
            className={`${
              activeOption === index
                ? "text-blue-600 border-b-4 border-b-blue-600"
                : ""
            } flex gap-4 w-52 h-12 items-center p-4`}
          >
            {option.logo}
            <p>{option.text}</p>
          </button>
        ))}
      </div>

      {inbox.Emails.length === 0 ? (
        <div className="flex justify-center items-center text-3xl">
          Inbox Empty
        </div>
      ) : (
        inbox.Emails.map((email, index) => (
          <div
            key={index}
            className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm hover:scale-[1.009] cursor-pointer"
            onClick={() => navigate(`/view-mail/${email._id}`)}
          >
            <div className="flex gap-6 items-center">
              <MdOutlineCheckBoxOutlineBlank className="text-gray-400" />
              <IoStarOutline className="text-gray-400" />
              {email.subject}
            </div>
            <div>{email.message.substring(0, 20)}...</div>
            <div>{new Date(email.createdAt).toLocaleString()}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default MailList;
