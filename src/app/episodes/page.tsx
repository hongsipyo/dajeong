"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Film } from "lucide-react";
import Link from "next/link";

const DEMO_EPISODES = Array.from({ length: 16 }, (_, i) => ({
  id: String(i + 1),
  number: i + 1,
  title: null as string | null,
  synopsis: null as string | null,
  progress: 0,
  focus_character: null as string | null,
}));

// 작업 중인 회차들에 데모 데이터
DEMO_EPISODES[0].title = "올바른 하루";
DEMO_EPISODES[0].synopsis = "다정이는 올바른 하루를 위한 계획을 세운다. 다른 사람들을 보고 올바른 하루를 베끼려 한다.";
DEMO_EPISODES[0].progress = 15;
DEMO_EPISODES[0].focus_character = "다정";

export default function EpisodesPage() {
  const totalProgress = Math.round(
    DEMO_EPISODES.reduce((sum, ep) => sum + ep.progress, 0) / 16
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-2">
        <Film className="w-5 h-5 text-primary" />
        <h1 className="font-serif text-2xl font-bold">회차</h1>
      </div>
      <div className="flex items-center gap-3 mb-8">
        <Progress value={totalProgress} className="h-1.5 flex-1 max-w-xs" />
        <span className="text-sm text-muted-foreground">{totalProgress}%</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DEMO_EPISODES.map((ep) => (
          <Link key={ep.number} href={`/episodes/${ep.number}`}>
            <Card
              className={`group hover:border-primary/30 transition-all hover:-translate-y-0.5 cursor-pointer h-full ${
                ep.progress > 0 ? "border-primary/20" : "border-dashed"
              }`}
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium">
                    {ep.number}부
                  </span>
                  {ep.focus_character && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {ep.focus_character}
                    </span>
                  )}
                </div>

                <h3 className="font-medium text-sm mb-2 min-h-[20px]">
                  {ep.title || (
                    <span className="text-muted-foreground/40 italic">
                      제목 없음
                    </span>
                  )}
                </h3>

                {ep.synopsis ? (
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-3">
                    {ep.synopsis}
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground/30 italic mb-3">
                    여기 채워질 거야
                  </p>
                )}

                <Progress value={ep.progress} className="h-1" />
                <span className="text-[10px] text-muted-foreground mt-1 block">
                  {ep.progress}%
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
