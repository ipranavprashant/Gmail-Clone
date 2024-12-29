import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TbReload } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdInbox } from "react-icons/md";
import { useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";

const MailList = () => {
  const options = [
    {
      logo: <MdInbox />,
      text: "Primary",
    },
    {
      logo: <MdOutlineLocalOffer />,
      text: "Promotions",
    },
    {
      logo: <IoMdContacts />,
      text: "Social",
    },
    {
      logo: <BsExclamationCircle />,
      text: "Updates",
    },
  ];

  const dummyEmails = [
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
    {
      subject: "Talib loves Arroshi",
      content:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur......",
      date: "28 Dec",
    },
  ];
  const [activeOption, setActionOption] = useState(0);
  return (
    <>
      <div className=" w-full p-4 bg-white overflow-y-auto rounded-xl">
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
          {options.map((option, index) => {
            return (
              <>
                <button
                  key={index}
                  onClick={() => setActionOption(index)}
                  className={`${
                    activeOption === index
                      ? "text-blue-600 border-b-4 border-b-blue-600"
                      : ""
                  } flex gap-4 w-52 h-12 items-center p-4`}
                >
                  {option.logo}
                  <p>{option.text}</p>
                </button>
              </>
            );
          })}
        </div>
        {dummyEmails.map((email, index) => {
          return (
            <>
              <div
                key={index}
                className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm hover:scale-[1.009] cursor-pointer"
              >
                <div className="flex gap-6 items-center">
                  <MdOutlineCheckBoxOutlineBlank className="text-gray-400" />
                  <IoStarOutline className="text-gray-400" />
                  {email.subject}
                </div>
                <div>{email.content}</div>
                <div>{email.date}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MailList;
