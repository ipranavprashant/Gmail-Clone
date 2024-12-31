import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { setInbox } from "../store/mailSlice";

const useGetInbox = async (dispatch) => {
  try {
    const token = localStorage.getItem("Authorization");
    if (!token) throw new Error("Authorization token is missing");

    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    const userId = decodedToken.sub;

    const res = await axios.get(
      `http://localhost:4010/user-specific-emails/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        withCredentials: true,
      }
    );

    // Dispatch to Redux store
    dispatch(setInbox(res.data));
  } catch (err) {
    toast.error(err.response?.data?.message || "Failed to fetch inbox");
  }
};

export default useGetInbox;
