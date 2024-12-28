import MailList from "./MailList";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <MailList />
      </div>
    </>
  );
};

export default Home;
