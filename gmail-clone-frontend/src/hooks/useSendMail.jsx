import axios from "axios";
import { toast } from "react-toastify";
import BASE_URL from "../config";

const useSendMail = async (
  mailData,
  token,
  onSuccess = () => {},
  onError = () => {}
) => {
  try {
    const res = await axios.post(`${BASE_URL}/create-email`, mailData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    onSuccess(res.data); //this is to tell the component that calls this hook that "I'm done now with the task that was alloted to me, you can successfully run the call back function or the next task(if any) which is to clear the fields and dispatch an event to close the modal in our case"
    toast.success("Email sent successfully!");
    return res.data;
  } catch (err) {
    onError(err);
    toast.error(err.response?.data?.message || "Failed to send email");
    throw err;
  }
};

export default useSendMail;
