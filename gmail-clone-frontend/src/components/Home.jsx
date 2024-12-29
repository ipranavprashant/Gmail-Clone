import MailBox from "./MailBox";
import MailList from "./MailList";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <MailBox />
      <div className="flex h-[calc(100vh-64px)]">
        {/* <div className="flex h-[100vh]"> */}
        <Sidebar />
        <MailList />
      </div>
    </>
  );
};

export default Home;
