import { GrFormPreviousLink } from "react-icons/gr";
import { MdOutlineArchive } from "react-icons/md";
import { BsExclamationOctagon } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { PiLineVerticalLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ActualMail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white w-full p-5 rounded-xl">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div>
              <GrFormPreviousLink
                size={"20px"}
                onClick={() => {
                  navigate("/");
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-5">
              <MdOutlineArchive size={"20px"} className="cursor-pointer" />
              <BsExclamationOctagon size={"20px"} className="cursor-pointer" />
              <RiDeleteBin6Line size={"20px"} className="cursor-pointer" />
            </div>
            <PiLineVerticalLight size={"20px"} />
            <div className="flex gap-5">
              <IoMailUnreadOutline size={"20px"} className="cursor-pointer" />
              <MdDriveFileMoveOutline
                size={"20px"}
                className="cursor-pointer"
              />
              <IoMdMore size={"20px"} className="cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <p>1-50 of 65</p>
            <FaAngleLeft className="cursor-pointer" />
            <FaAngleRight className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-5">
          <p className="text-2xl ml-14">
            Your Two-step Login Verification Code
          </p>
          <div>
            <div className="flex gap-5 mt-5">
              <CgProfile size={"40px"} />
              <p>
                Bitwarden{" "}
                <span className="text-sm text-gray-500">
                  [no-reply@bitwarden.com]
                </span>
                <div className="flex items-center gap-1">
                  <p className="text-sm text-gray-500">to pranavprashant</p>
                  <IoMdArrowDropdown className="cursor-pointer" />
                </div>
              </p>
            </div>
          </div>
        </div>
        <p className="max-w-[1000px] p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae!
          Mollitia magni modi accusamus, facilis aspernatur accusantium maxime
          esse alias explicabo? Explicabo quidem suscipit totam maiores
          assumenda quo temporibus facere! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis ex accusantium eos vero
          provident repellendus, saepe odit soluta exercitationem cumque fuga?
          Expedita molestias dolor reprehenderit sed dicta enim sint facere?
        </p>
      </div>
    </>
  );
};

export default ActualMail;
