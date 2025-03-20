import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, User, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PageLayout from "@/components/layout/PageLayout";

const phoneRegex = /^\+[1-9]\d{1,14}$/;

const loginSchema = z.object({
  phone: z.string().regex(phoneRegex, { message: "Invalid phone number. Please include country code (e.g., +1)" }),
});

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "register" | "verify">("login");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({ phone: values.phone });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      setPhone(values.phone);
      setMode("verify");
      toast({
        title: "Verification code sent",
        description: "Please check your phone for the verification code",
      });
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  const handleVerify = async () => {
    try {
      const { error } = await supabase.auth.verifyOtp({
        phone,
        token: verificationCode,
        type: "sms",
      });

      if (error) {
        toast({
          title: "Verification Failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success!",
        description: "You have successfully signed in",
      });

      // Only navigate if login is successful
      navigate("/");
    } catch (error) {
      console.error("Verification error:", error);
      toast({
        title: "Verification Failed",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <PageLayout>
      <div className="w-full max-w-md mx-auto py-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-companion">
            {mode === "login" ? "Welcome Back" : "Verify Your Phone"}
          </h1>
        </div>

        <div className="glass-panel border-none p-6 rounded-xl animate-appear">
          {mode === "login" && (
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (with country code)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="tel" placeholder="+1234567890" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={loginForm.formState.isSubmitting}>
                  {loginForm.formState.isSubmitting ? "Sending Code..." : "Send Verification Code"}
                </Button>

                {/* Allow navigation to other pages */}
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    Want to explore?{" "}
                    <button type="button" className="text-companion hover:underline" onClick={() => navigate("/")}>
                      Go to Home
                    </button>
                  </p>
                </div>
              </form>
            </Form>
          )}

          {mode === "verify" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="verificationCode">Verification Code</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="verificationCode"
                    placeholder="123456"
                    className="pl-10"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={handleVerify} className="w-full" disabled={!verificationCode}>
                Verify and Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default AuthPage;
