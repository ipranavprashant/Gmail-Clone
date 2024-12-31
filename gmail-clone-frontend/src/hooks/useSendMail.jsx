import axios from "axios";
import { toast } from "react-toastify";

const useSendMail = async (
  mailData,
  onSuccess = () => {},
  onError = () => {}
) => {
  try {
    const token = localStorage.getItem("Authorization");
    if (!token) throw new Error("Authorization token is missing");

    const res = await axios.post("http://localhost:4010/send-email", mailData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    // Call success callback
    onSuccess(res.data);
    toast.success("Email sent successfully!");
    return res.data;
  } catch (err) {
    // Call error callback
    onError(err);
    toast.error(err.response?.data?.message || "Failed to send email");
    throw err; // Re-throw error to allow calling code to handle it
  }
};

export default useSendMail;
