"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";
import Link from "next/link";

const DEMO_CHARACTERS = [
  {
    id: "1",
    name: "다정",
    description: "25살, 서울여대 영어과, 픽사 꿈, ADHD",
    element: "水",
    image_url: null,
  },
  {
    id: "2",
    name: "정우",
    description: "카페블라썸 사장, 청소업 출신, 돈 집착",
    element: "土",
    image_url: null,
  },
  {
    id: "3",
    name: "서현",
    description: "29살 병원 직원, 민사고 못간 수재, 회피형",
    element: "金",
    image_url: null,
  },
  {
    id: "4",
    name: "수박형 (정수)",
    description: "정우의 형, 착하고 힘세지만 모자란",
    element: "木",
    image_url: null,
  },
  {
    id: "5",
    name: "연우",
    description: "잘생긴 카페 직원, 아빠 바람둥이, 이 부러짐",
    element: null,
    image_url: null,
  },
  {
    id: "6",
    name: "한울",
    description: "눈치 없음, 항상 옆에 있음, 전문하사 지원",
    element: null,
    image_url: null,
  },
  {
    id: "7",
    name: "엄마",
    description: "공부방 원장, ADHD, 열심히 가르침, 시간관리 X",
    element: "火",
    image_url: null,
  },
  {
    id: "8",
    name: "언니 (아정)",
    description: "식이장애, 원래 공부 잘함, 영어 특기",
    element: null,
    image_url: null,
  },
  {
    id: "9",
    name: "할머니",
    description: "수호신, 다정을 따라다님, 나중에 사라짐",
    element: "火",
    image_url: null,
  },
];

function getElementColor(element: string | null) {
  switch (element) {
    case "水": return "bg-blue-500/20 text-blue-300";
    case "火": return "bg-red-500/20 text-red-300";
    case "木": return "bg-green-500/20 text-green-300";
    case "金": return "bg-yellow-500/20 text-yellow-300";
    case "土": return "bg-amber-500/20 text-amber-300";
    default: return "bg-secondary text-secondary-foreground";
  }
}

export default function PeoplePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <h1 className="font-serif text-2xl font-bold">인물</h1>
        </div>
        <Button size="sm" className="gap-1.5">
          <Plus className="w-4 h-4" />
          새 인물
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {DEMO_CHARACTERS.map((char) => (
          <Link key={char.id} href={`/people/${char.id}`}>
            <Card className="group hover:border-primary/30 transition-all hover:-translate-y-0.5 cursor-pointer h-full">
              <CardContent className="p-0">
                {/* Image placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-b from-secondary/50 to-card rounded-t-lg flex items-center justify-center">
                  <span className="font-serif text-4xl text-muted-foreground/30">
                    {char.name[0]}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-medium text-sm">{char.name}</h3>
                    {char.element && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${getElementColor(char.element)}`}>
                        {char.element}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {char.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
