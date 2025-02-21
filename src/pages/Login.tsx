/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useActionState } from "react";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/VerifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { Navigate } from "react-router-dom";
import UseUser from "@/hook/UseUser";
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const data = UseUser();
  const [state, formAction] = useActionState(
    async (prevState: any, formData: FormData) => {
      try {
        const userdata = Object.fromEntries(formData.entries());
        const res = await login(userdata);

        const user = verifyToken(res.data.data.token);

        dispatch(setUser({ user: user, token: res.data.data.token }));
        toast.success("Logged in successfully");
      } catch (error) {
        toast.error(error.message);
      }
    },
    null
  );

  if (data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full flex   items-center justify-center h-screen">
      <div
        className={cn("flex flex-col gap-6 w-[500px]", className)}
        {...props}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <Input id="email" type="email" name="email" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary-jext hover:bg-primary-hover "
                >
                  Login
                </Button>
                {state?.error && (
                  <div className="mt-4 text-center text-sm text-red-500">
                    {state.error}
                  </div>
                )}
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
