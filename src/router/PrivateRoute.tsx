

import { Navigate, useLocation } from "react-router-dom";
import UseUser from "@/hook/UseUser.tsx";



const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user  = UseUser()
  const location = useLocation();
    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center h-screen">
    //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#04345c]"></div>
    //         </div>
    //     );
    // }
  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;
