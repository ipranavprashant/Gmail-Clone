import MailBox from "./MailBox";
import MailList from "./MailList";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const token = useSelector((state) => state.auth.token);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <MailBox />
          <div className="flex h-[calc(100vh-64px)]">
            <Sidebar />
            <MailList />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-semibold">
            You are logged out. Please{" "}
            <a href="/login" className="text-blue-500 underline">
              log in
            </a>
            .
          </h1>
        </div>
      )}
    </>
  );
};

export default Home;
