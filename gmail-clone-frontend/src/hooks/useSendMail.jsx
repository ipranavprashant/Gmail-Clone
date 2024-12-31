import axios from "axios";
import { toast } from "react-toastify";

const useSendMail = async (
  mailData,
  token
  // onSuccess = () => {},
  // onError = () => {}
) => {
  try {
    const res = await axios.post(
      "http://localhost:4010/create-email",
      mailData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    // onSuccess(res.data);
    toast.success("Email sent successfully!");
    return res.data;
  } catch (err) {
    // onError(err);
    toast.error(err.response?.data?.message || "Failed to send email");
    throw err;
  }
};

export default useSendMail;
