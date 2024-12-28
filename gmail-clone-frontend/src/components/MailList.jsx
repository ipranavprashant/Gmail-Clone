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
  const [activeOption, setActionOption] = useState(0);
  return (
    <>
      <div className=" w-full p-4 bg-white">
        <div className="flex justify-between p-4 rounded-lg h-12 items-center">
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

        <div className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm">
          <div className="flex gap-6 items-center">
            <MdOutlineCheckBoxOutlineBlank />
            <IoStarOutline />
            Subject
          </div>
          <div>
            Email Content: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>28 Dec</div>
        </div>

        <div className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm">
          <div className="flex gap-6 items-center">
            <MdOutlineCheckBoxOutlineBlank />
            <IoStarOutline />
            Subject
          </div>
          <div>
            Email Content: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>28 Dec</div>
        </div>

        <div className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm">
          <div className="flex gap-6 items-center">
            <MdOutlineCheckBoxOutlineBlank />
            <IoStarOutline />
            Subject
          </div>
          <div>
            Email Content: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>28 Dec</div>
        </div>

        <div className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm">
          <div className="flex gap-6 items-center">
            <MdOutlineCheckBoxOutlineBlank />
            <IoStarOutline />
            Subject
          </div>
          <div>
            Email Content: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>28 Dec</div>
        </div>

        <div className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm">
          <div className="flex gap-6 items-center">
            <MdOutlineCheckBoxOutlineBlank />
            <IoStarOutline />
            Subject
          </div>
          <div>
            Email Content: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>28 Dec</div>
        </div>

        <div className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm">
          <div className="flex gap-6 items-center">
            <MdOutlineCheckBoxOutlineBlank />
            <IoStarOutline />
            Subject
          </div>
          <div>
            Email Content: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>28 Dec</div>
        </div>

        <div className="flex justify-between border-b-1 h-12 p-2 items-center shadow-sm">
          <div className="flex gap-6 items-center">
            <MdOutlineCheckBoxOutlineBlank />
            <IoStarOutline />
            Subject
          </div>
          <div>
            Email Content: Lorem ipsum dolor sit amet consectetur adipisicing
            elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div>28 Dec</div>
        </div>
      </div>
    </>
  );
};

export default MailList;
