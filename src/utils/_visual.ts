import { toast } from "react-toastify";
import { type TypeOptions } from "react-toastify";

export const toasti = (message: string | undefined, type?: TypeOptions) => {
  if (!message) {
    message = "unexpected error! see log for more infomation";
  }
  toast<string>(message, {
    type: type || "default",
  });
};
