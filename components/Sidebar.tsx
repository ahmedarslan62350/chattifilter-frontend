"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, Video, ChevronRight, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Videos", href: "/videos", icon: Video },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <aside
      className={cn(
        "h-screen transition-all duration-300 border-r border-border bg-background/90 backdrop-blur-sm",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex flex-col h-full p-4 justify-between">
        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative",
                  isActive
                    ? "bg-muted/30 text-foreground shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5",
                    isActive
                      ? "text-accent-cyan"
                      : "group-hover:text-accent-cyan"
                  )}
                />
                {isOpen && <span className="font-medium">{item.name}</span>}
                {!isOpen && isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent-cyan rounded-r-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Pro Plan & Toggle */}
        <div className="pt-6 border-t border-border mb-15">
          {isOpen ? (
            <div className="card-clean rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Pro Plan
                </span>
              </div>
              <div className="w-full bg-muted/20 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-gradient-to-br from-accent-cyan to-accent-purple h-full w-3/4" />
              </div>
              <p className="text-[10px] text-muted-foreground">
                750 / 1,000 comments processed
              </p>
            </div>
          ) : (
            <div className="flex justify-center">
              <Sparkles className="w-5 h-5 text-accent-cyan animate-pulse" />
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 rounded-xl hover:bg-muted/20 text-muted-foreground transition-colors"
          >
            <ChevronRight
              className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}