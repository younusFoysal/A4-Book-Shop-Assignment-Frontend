import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function SignUp({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="w-full flex   items-center justify-center h-screen">
      <div
        className={cn("flex flex-col gap-6 w-[500px]", className)}
        {...props}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">SignUp</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="name">Name</Label>
                  </div>
                  <Input id="name" type="text" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <Input id="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary-jext hover:bg-primary-hover "
                >
                  Signup
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Alrady&apos; have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
