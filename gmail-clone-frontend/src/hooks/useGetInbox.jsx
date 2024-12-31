import axios from "axios";
import { toast } from "react-toastify";

const useGetInbox = () => {
  const fetchInbox = async (userId, token) => {
    try {
      const res = await axios.get(
        `http://localhost:4010/user-specific-emails/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      return res.data;
    } catch (err) {
      console.error("Error fetching inbox:", err);
      toast.error(err.response?.data?.message || "Failed to fetch inbox");
      throw err;
    }
  };

  return fetchInbox;
};

export default useGetInbox;
