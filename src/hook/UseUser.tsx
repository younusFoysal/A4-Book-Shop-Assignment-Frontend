import { selectCurrentUser } from "@/redux/features/auth/authSlice";

import { useSelector } from "react-redux";

const UseUser = () => {
  const data = useSelector(selectCurrentUser);
  return data;
};

export default UseUser;
