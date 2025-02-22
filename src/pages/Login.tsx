/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import UseUser from "@/hook/UseUser";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/VerifyToken";
import { useActionState } from "react";

import { Link, Navigate } from "react-router-dom";
import { toast } from "sonner";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const user = UseUser();

  const [state, formAction] = useActionState(
      async (_prevState: any, formData: FormData) => {
        try {
          const isRememberChecked = formData.get("remember-me");
          if (!isRememberChecked) {
            toast.error("Please check 'Remember me' before logging in.");
            return;
          }
          const userdata: LoginForm = Object.fromEntries(
              formData.entries()
          ) as LoginForm;
          const res = await login(userdata).unwrap();
          const userData = verifyToken(res.data.token);
          dispatch(setUser({ user: userData, token: res.data.token }));
          toast.success("Logged in successfully");
        } catch (error: any) {
          toast.error(error?.message || "Login failed");
        }
      },
      null
  );

  if (user) return <Navigate to="/" />;

  return (
      <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
        <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="max-md:order-1">
              <img
                  src="https://readymadeui.com/signin-image.webp"
                  className="w-full aspect-[12/11] object-contain"
                  alt="login-image"
              />
            </div>
            <form className="md:max-w-md w-full mx-auto" action={formAction}>
              <div className="mb-12">
                <h3 className="text-4xl font-bold text-green-500">Sign in</h3>
              </div>
              <div className="relative flex items-center">
                <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-green-500 px-2 py-3 outline-none"
                    placeholder="Enter email"
                />
              </div>
              <div className="mt-8 relative flex items-center">
                <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-sm border-b border-gray-300 focus:border-green-500 px-2 py-3 outline-none"
                    placeholder="Enter password"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-500 border-gray-300 rounded"
                  />
                  <label
                      htmlFor="remember-me"
                      className="text-gray-800 ml-3 text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <a
                    href="#"
                    className="text-green-500 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="mt-12">
                <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-md text-white bg-green-500 hover:bg-green-600"
                >
                  Sign in
                </button>
                <p className="text-gray-800 text-sm text-center mt-6">
                  Don't have an account?
                  <Link
                      to="/signup"
                      className="text-green-500 font-semibold hover:underline ml-1"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;