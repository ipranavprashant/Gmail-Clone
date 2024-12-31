import MailBox from "./MailBox";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ActualMail from "./ActualMail";

const ViewMail = () => {
  return (
    <>
      <Navbar />
      <MailBox />
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />
        <ActualMail />
      </div>
    </>
  );
};

export default ViewMail;
