"use client";

import { useVerifyMutation } from "@/tanstack/mutations/auth.mutations";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { toast } from "sonner";

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const verifyMutation = useVerifyMutation();
  const hasCalled = useRef(false);

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing verification token");
      router.push("/auth/login");
      return;
    }

    if (hasCalled.current) return;
    hasCalled.current = true;

    verifyMutation.mutate(
      { token },
      {
        onSuccess: () => {
          toast.success("Verification Successful");
          router.push("/auth/login");
        },
        onError: (err: any) => {
          const message = err.error || "Something went wrong";
          toast.error(message);
          router.push("/auth/login");
        },
      }
    );
  }, [token, router, verifyMutation]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Verifying your account...</p>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading verification...</p>
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
