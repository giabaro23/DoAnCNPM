import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //hay do t thieu file ni

export const toastError = (message) => {
  if (message !== "" && message !== null && message !== undefined) {
    return toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const toastSucces = (message) => {
  if (message !== "" && message !== null && message !== undefined) {
    return toast.success(message);
  }
};
