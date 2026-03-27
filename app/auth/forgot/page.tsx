"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "motion/react";
// import { ArrowLeft, Sparkles } from "lucide-react";
// // import { useForgotPasswordMutation } from "@/tanstack/mutations/auth.mutations";
// // import { ForgotPasswordRequest } from "@/types/api";
// import { toast } from "sonner";

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("");

// //   const forgotPasswordMutation = useForgotPasswordMutation();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // const payload: ForgotPasswordRequest = {
//     //   email,
//     // };

//     // forgotPasswordMutation.mutate(payload, {
//     //   onSuccess: ({ data }) => {
//         // toast.success(data.message || "Password reset link sent to your email");
//     //   },
//     //   onError: (err: any) => {
//         // toast.error(err?.error || "Something went wrong");
//     //   },
//     // });
//   };

//   return (
//     <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center p-8 relative overflow-hidden">
//       <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse-slow" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 blur-[120px] rounded-full animate-pulse-slow" />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-md glass p-10 rounded-[40px] border border-white/10 relative z-10"
//       >
//         <Link
//           href="/login"
//           className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-10 text-sm font-bold uppercase tracking-widest"
//         >
//           <ArrowLeft className="w-4 h-4" /> Back to Login
//         </Link>

//         <div className="flex items-center gap-3 mb-10">
//           <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
//             <span className="text-white font-bold text-2xl">S</span>
//           </div>
//           <span className="font-bold text-2xl tracking-tight text-white">
//             Sutorium
//           </span>
//         </div>

//         <h1 className="text-3xl font-bold text-white mb-2">Forgot password?</h1>
//         <p className="text-slate-400 mb-8">
//           Enter your email and we’ll send you a reset link.
//         </p>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-2">
//             <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
//               Email Address
//             </label>

//             <input
//               type="email"
//               placeholder="name@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan/50 transition-all"
//             />
//           </div>

//           <button
//             type="submit"
//             // disabled={forgotPasswordMutation.isPending}
//             className="w-full bg-gradient-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
//           >
//             {/* {forgotPasswordMutation.isPending ? "Sending..." : "Send Reset Link"} */}
//             <Sparkles className="w-4 h-4" />
//           </button>
//         </form>

//         <p className="mt-8 text-center text-sm text-slate-500">
//           Remember your password?{" "}
//           <Link href="/login" className="text-white font-bold hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// }

export default function ForgotPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/login");
  }, [router]);
  return <></>;
}
