"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Globe,
  Users,
  Film,
  Sparkles,
  BookOpen,
  StickyNote,
  Search,
  Lightbulb,
  TrendingUp,
  Menu,
  X,
  Pen,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/home", label: "홈", icon: Home, emoji: "" },
  { href: "/world", label: "세계관", icon: Globe, emoji: "" },
  { href: "/people", label: "인물", icon: Users, emoji: "" },
  { href: "/episodes", label: "회차", icon: Film, emoji: "" },
  { href: "/fragments", label: "파편", icon: Sparkles, emoji: "" },
  { href: "/brainstorm", label: "브레인스토밍", icon: Lightbulb, emoji: "" },
  { href: "/progress", label: "프로그레스", icon: TrendingUp, emoji: "" },
  { href: "/refs", label: "레퍼런스", icon: BookOpen, emoji: "" },
  { href: "/scratch", label: "메모", icon: StickyNote, emoji: "" },
];

const ENCOURAGEMENTS = [
  "오늘도 한 줄이면 충분해",
  "쓰는 사람이 작가야",
  "다정이가 기다리고 있어",
  "완벽 안 해도 돼",
  "일단 박아. 정리는 나중에",
  "니가 쓸 수 있는 건 니뿐이야",
  "한 문장이 한 페이지가 돼",
];

function getDailyEncouragement() {
  const today = new Date();
  const idx = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % ENCOURAGEMENTS.length;
  return ENCOURAGEMENTS[idx];
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2.5 rounded-xl bg-white/80 backdrop-blur border border-border shadow-sm"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 z-50 h-screen w-60 bg-white/70 backdrop-blur-xl border-r border-border/50 flex flex-col transition-transform duration-200",
          "md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header — 작가 홍시표 */}
        <div className="p-5 border-b border-border/50">
          <Link href="/home" className="block">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              다정
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <Pen className="w-3 h-3 text-muted-foreground" />
              <span className="text-[11px] text-muted-foreground tracking-wide">
                작가 홍시표
              </span>
            </div>
          </Link>
          <button onClick={() => setOpen(false)} className="absolute top-5 right-4 md:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150",
                  isActive
                    ? "bg-primary/10 text-primary font-medium shadow-sm"
                    : "text-foreground/60 hover:text-foreground hover:bg-accent/60"
                )}
              >
                <item.icon className={cn("w-4 h-4 shrink-0", isActive && "text-primary")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom — 격려 + 검색 */}
        <div className="p-4 border-t border-border/50 space-y-3">
          {/* Daily encouragement */}
          <div className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/30 border border-primary/10">
            <p className="text-[11px] text-primary/80 italic leading-relaxed">
              {getDailyEncouragement()}
            </p>
          </div>
          <Link
            href="/search"
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-foreground/50 hover:text-foreground hover:bg-accent/60 transition-colors"
          >
            <Search className="w-4 h-4" />
            검색
          </Link>
        </div>
      </aside>
    </>
  );
}
