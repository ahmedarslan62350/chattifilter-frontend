"use client";

import React, { useEffect } from "react";
import { Bell, Search, User, LogOut, Settings } from "lucide-react";
import { useGetMe } from "@/tanstack/queries/me.queries";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "@/tanstack/mutations/auth.mutations";
import { Skeleton } from "./ui/skeleton";
import { useRefreshSession } from "@/tanstack/queries/auth.queries";

export function DashboardHeader() {
  const router = useRouter();
  const { data, isLoading, isError } = useGetMe();
  const logoutMutation = useLogoutMutation();
  useRefreshSession();

  const me = data?.data?.data?.me;

  useEffect(() => {
    if (!isLoading && (isError || !me)) {
      router.replace("/auth/login");
    }
  }, [me, isLoading, isError, router]);

  if (isLoading) {
    return <Skeleton className="h-10 w-32" />;
  }

  if (!me) return null;

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        router.push("/auth/login");
      },
    });
  };

  return (
    <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-40 bg-[#0A0E1A]/50 backdrop-blur-md">
      {/* left side (search can go here later) */}
      <div className="flex items-center gap-4 flex-1 max-w-xl"></div>

      {/* right side */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-[1px] bg-white/10 mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-white/5 transition-all group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-white">
                  {isLoading ? "Loading..." : me.name}
                </p>

                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                  {me.email}
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple p-[1px]">
                <div className="w-full h-full rounded-[11px] bg-[#0A0E1A] flex items-center justify-center overflow-hidden">
                  <User className="w-6 h-6 text-slate-400" />
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-[#0A0E1A] border border-white/10 text-white"
          >
            <DropdownMenuItem className="cursor-pointer gap-2">
              <Settings className="w-4 h-4" />
              Account Settings
            </DropdownMenuItem>

            <DropdownMenuItem
              className="cursor-pointer gap-2 text-red-400"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
