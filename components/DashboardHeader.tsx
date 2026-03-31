"use client";

import React, { useEffect } from "react";
import { User, LogOut, Settings, Bell, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGetMe } from "@/tanstack/queries/me.queries";
import { useLogoutMutation } from "@/tanstack/mutations/auth.mutations";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRefreshSession } from "@/tanstack/queries/auth.queries";
import Link from "next/link";

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

  if (isLoading) return <Skeleton className="h-12 w-48 rounded-xl" />;
  if (!me) return null;

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => router.push("/auth/login"),
    });
  };

  return (
    <header className="flex w-full items-center justify-between px-6 h-16 border-b border-border bg-background/90 backdrop-blur-sm sticky top-0 z-50 transition-colors">
      {/* Left: Search bar */}
      <div className="flex items-center justify-between px-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
            <span className="text-background font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Sutorium
          </span>
        </Link>
      </div>

      <div className="relative w-full max-w-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full  bg-muted/20 text-foreground placeholder:text-muted-foreground rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-accent-cyan transition-colors"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex justify-end items-center gap-4">
        {/* <button className="relative p-2 rounded-xl hover:bg-muted/40 transition-colors">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-muted/40 transition-all group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-foreground">
                  {me.name}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                  {me.email}
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple p-[1px]">
                <div className="w-full h-full rounded-[11px] bg-background flex items-center justify-center overflow-hidden">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-background border border-border text-foreground transition-colors"
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
