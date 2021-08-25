import { toast } from "react-toastify";

const custom_style: any = {
  position: "bottom-center",
};

export const exist = () =>
  toast.warning("😭 Todo has been existing.", custom_style);

export const success = () =>
  toast.dark("😎 Todo added successfully!", custom_style);

export const empty = () =>
  toast.error("😓 Todo cannot be empty.", custom_style);
