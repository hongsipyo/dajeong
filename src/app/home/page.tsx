"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Pen,
  Users,
  Layers,
  BarChart3,
  BookOpen,
  Clapperboard,
  Quote,
  ArrowRight,
} from "lucide-react";
import {
  getDailyFragment,
  getDailyMission,
  getOverallProgress,
  getFilledEpisodes,
  getTotalFragments,
  getTotalCharacters,
  EPISODES,
} from "@/lib/data";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const overallProgress = getOverallProgress();
  const filledEpisodes = getFilledEpisodes();
  const totalFragments = getTotalFragments();
  const totalCharacters = getTotalCharacters();
  const dailyMission = getDailyMission();
  const dailyFragment = getDailyFragment();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-16">
      {/* ── Cover Section ── */}
      <section className="text-center space-y-6">
        <div className="relative inline-block">
          <div className="w-44 h-60 mx-auto rounded-lg overflow-hidden shadow-[0_0_80px_rgba(200,160,50,0.08)] border border-primary/20">
            {/* CSS-only cinematic book cover */}
            <div className="w-full h-full relative bg-gradient-to-br from-amber-950 via-stone-950 to-neutral-950">
              {/* Warm glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-amber-400/5" />
              {/* Texture lines */}
              <div className="absolute top-6 left-4 right-4 h-px bg-amber-500/20" />
              <div className="absolute bottom-6 left-4 right-4 h-px bg-amber-500/20" />
              {/* Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="font-serif text-5xl font-bold tracking-tight bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">
                  다정
                </span>
                <span className="text-[9px] tracking-[0.3em] text-amber-500/50 uppercase">
                  a novel &middot; screenplay
                </span>
                <span className="text-[8px] tracking-[0.15em] text-amber-500/30 mt-4">
                  홍시표
                </span>
              </div>
              {/* Spine shadow */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
          </div>
          <div className="absolute -inset-6 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent rounded-2xl -z-10 blur-2xl" />
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
            다정
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            내 젊음을 농축한 16부작 드라마 &middot; 소설
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          {
            icon: BarChart3,
            label: "전체 진행률",
            value: `${overallProgress}%`,
            color: "text-blue-400",
          },
          {
            icon: Layers,
            label: "채워진 회차",
            value: `${filledEpisodes}/16`,
            color: "text-emerald-400",
          },
          {
            icon: Sparkles,
            label: "파편",
            value: `${totalFragments}개`,
            color: "text-amber-400",
          },
          {
            icon: Users,
            label: "인물",
            value: `${totalCharacters}명`,
            color: "text-rose-400",
          },
        ].map((stat) => (
          <Card
            key={stat.label}
            className="bg-card/60 border-border/60 backdrop-blur-sm"
          >
            <CardContent className="p-4 flex items-center gap-3">
              <stat.icon className={`w-5 h-5 ${stat.color} shrink-0`} />
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-semibold tracking-tight">
                  {stat.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* ── 16부작 진행률 Grid ── */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          16부작 진행률
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {EPISODES.map((ep) => {
            const isFilled =
              ep.title !== null ||
              ep.synopsis !== null ||
              ep.scenes.length > 0;
            return (
              <Card
                key={ep.number}
                className={`relative overflow-hidden transition-all duration-300 ${
                  isFilled
                    ? "bg-card/80 border-primary/20 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                    : "bg-transparent border-dashed border-border/50"
                }`}
              >
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`text-xs font-medium ${
                        isFilled
                          ? "text-foreground/80"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {ep.number}부
                    </span>
                    {ep.progress > 0 && (
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0 bg-zinc-800 text-muted-foreground"
                      >
                        {ep.progress}%
                      </Badge>
                    )}
                  </div>
                  {isFilled ? (
                    <p className="text-xs text-muted-foreground truncate leading-relaxed">
                      {ep.title || ep.firstLine || "untitled"}
                    </p>
                  ) : (
                    <p className="text-[11px] text-muted-foreground/30 italic">
                      여기 채워질 거야
                    </p>
                  )}
                  <Progress
                    value={ep.progress}
                    className="h-1"
                  />
                </CardContent>
                {isFilled && ep.progress > 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent pointer-events-none" />
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* ── 오늘의 미션 + 오늘의 파편 회상 ── */}
      <section className="grid md:grid-cols-2 gap-4">
        {/* 오늘의 미션 */}
        <Card className="bg-card/60 border-border/60">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Pen className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-medium text-muted-foreground">
                오늘의 미션
              </h3>
            </div>
            <p className="text-foreground/90 leading-relaxed text-sm">
              {mounted ? dailyMission : "\u00A0"}
            </p>
            <Link href="/fragments">
              <Button
                variant="outline"
                size="sm"
                className="mt-2 gap-1.5 border-primary/30 hover:border-primary/60 hover:bg-primary/10"
              >
                도전하기
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* 오늘의 파편 회상 */}
        <Card className="bg-card/60 border-border/60">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Quote className="w-4 h-4 text-blue-400" />
              <h3 className="text-sm font-medium text-muted-foreground">
                오늘의 파편 회상
              </h3>
            </div>
            <blockquote className="relative">
              <span className="absolute -top-2 -left-1 text-3xl text-muted-foreground/30 font-serif select-none">
                &ldquo;
              </span>
              <p className="text-foreground/80 italic leading-relaxed text-sm pl-4 pr-2">
                {mounted ? dailyFragment.content : "\u00A0"}
              </p>
              <span className="text-3xl text-muted-foreground/30 font-serif select-none leading-none">
                &rdquo;
              </span>
            </blockquote>
            {mounted && dailyFragment.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {dailyFragment.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* ── 소설 / 각본 트래커 ── */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          듀얼 트래커
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* 소설 */}
          <Card className="bg-card/60 border-border/60">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <h3 className="font-medium text-sm">소설</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                성석제 나레이션 + 매지컬 리얼리즘
              </p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>초고 진행률</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-1.5" />
              </div>
            </CardContent>
          </Card>

          {/* 드라마 각본 */}
          <Card className="bg-card/60 border-border/60">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Clapperboard className="w-4 h-4 text-violet-400" />
                <h3 className="font-medium text-sm">드라마 각본</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                옴니버스 16부작 &middot; 안나 카레니나 구조
              </p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>각본 진행률</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
