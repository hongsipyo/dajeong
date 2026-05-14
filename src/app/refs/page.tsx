"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Plus, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

const DEMO_REFS = [
  {
    id: "1",
    type: "소설",
    title: "성석제 — 투명인간",
    url: null,
    note: "나레이션 스타일 참고. 건조하면서 유머러스. 옴니버스식 구성",
    tags: ["나레이션", "톤"],
  },
  {
    id: "2",
    type: "영화",
    title: "인사이드 아웃",
    url: null,
    note: "머릿속 연출. ADHD 팽이 DDR, 자폐 도미노. 다정이 픽사 꿈의 계기",
    tags: ["연출", "픽사"],
  },
  {
    id: "3",
    type: "영화",
    title: "라이프 오브 파이",
    url: null,
    note: "환상 vs 현실 — 어느 쪽을 믿고 싶어? 할머니 수호신 처리법 참고",
    tags: ["매지컬리얼리즘", "구조"],
  },
  {
    id: "4",
    type: "게임",
    title: "GTA5",
    url: null,
    note: "화면전환 스타일. 각자 배경음 이어폰/MP3/스피커에서 나오며 시그니처 장면",
    tags: ["연출"],
  },
  {
    id: "5",
    type: "소설",
    title: "양귀자 — 모순",
    url: null,
    note: "여자 주인공 결말에 남자로 해결. 참고하되 다정이는 다르게",
    tags: ["구조", "여성"],
  },
  {
    id: "6",
    type: "영화",
    title: "아일랜드 마이걸",
    url: null,
    note: "골든벨 장면 패러디. 여자 마음 알기 위해 갑자기 골든벨 → 오답",
    tags: ["장면", "패러디"],
  },
];

const typeColors: Record<string, string> = {
  소설: "bg-emerald-500/20 text-emerald-300",
  영화: "bg-blue-500/20 text-blue-300",
  게임: "bg-purple-500/20 text-purple-300",
  음악: "bg-pink-500/20 text-pink-300",
  책: "bg-yellow-500/20 text-yellow-300",
};

export default function RefsPage() {
  const [search, setSearch] = useState("");
  const filtered = DEMO_REFS.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.note?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <h1 className="font-serif text-2xl font-bold">레퍼런스</h1>
        </div>
        <Button size="sm" className="gap-1.5">
          <Plus className="w-4 h-4" />
          추가
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="레퍼런스 검색..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filtered.map((ref) => (
          <Card key={ref.id} className="hover:border-primary/30 transition-colors">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        typeColors[ref.type || ""] || "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {ref.type}
                    </span>
                    <h3 className="text-sm font-medium">{ref.title}</h3>
                  </div>
                  {ref.note && (
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {ref.note}
                    </p>
                  )}
                  {ref.tags.length > 0 && (
                    <div className="flex gap-1.5 mt-2">
                      {ref.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
