import { toast } from "react-toastify";

const custom_style: any = {
  position: "bottom-center",
};

export const fail = () => toast.error("😭 Todo cannot be empty.", custom_style);

export const success = () =>
  toast.dark("😎 Feedback added successfully!", custom_style);

export const empty = () =>
  toast.error("😓 Todo cannot be empty.", custom_style);
