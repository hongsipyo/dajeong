"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Edit2, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Demo — will fetch from Supabase by id
const DEMO = {
  id: "1",
  name: "다정",
  description: "25살, 서울여대 영어과, 픽사 꿈, ADHD",
  element: "水",
  animal: "물고기",
  details: {
    age: "25살 (97년생)",
    school: "서울여대 영어영문학과",
    dream: "픽사에서 일하기",
    family: "광명 공부방 딸, 둘째",
    personality: "착함, 규칙 지키려 노력, ADHD, 정신 산만",
    appearance: "미정",
    speech: "자기 언어 사용 신중, 트위터식 유행어 안 씀",
    relationships: [
      "정우 — 남자친구 (나중에 헤어짐)",
      "서현 — 동경했던 사람",
      "할머니 — 수호신",
      "엄마 — 공부방 원장, 동정과 답답함",
    ],
  },
  notes:
    "다정이는 '착해야' 되고 전형적 페미니스트가 아님. 좋아할만한 사람이어야 함. 자기 언어사용도 신중하게 하는 사람. 규칙을 못 지키더라도 규칙이라는 걸 존나 크게 생각함.",
};

export default function CharacterDetailPage() {
  const [notes, setNotes] = useState(DEMO.notes);
  const [editing, setEditing] = useState(false);
  const char = DEMO;
  const details = char.details as Record<string, unknown>;
  const relationships = (details.relationships as string[]) || [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href="/people"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        인물 목록
      </Link>

      {/* Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="w-28 h-36 bg-gradient-to-b from-secondary/50 to-card rounded-lg flex items-center justify-center shrink-0 border border-border">
          <span className="font-serif text-5xl text-muted-foreground/30">
            {char.name[0]}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-serif text-2xl font-bold">{char.name}</h1>
            {char.element && (
              <Badge variant="secondary">{char.element}</Badge>
            )}
            {char.animal && (
              <Badge variant="secondary">{char.animal}</Badge>
            )}
          </div>
          <p className="text-muted-foreground">{char.description}</p>
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">기본 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {Object.entries(details)
              .filter(([key]) => key !== "relationships")
              .map(([key, val]) => (
                <div key={key} className="flex gap-3 text-sm">
                  <span className="text-muted-foreground w-20 shrink-0 capitalize">
                    {key}
                  </span>
                  <span>{String(val)}</span>
                </div>
              ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">관계</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {relationships.map((rel, i) => (
              <p key={i} className="text-sm text-foreground/80">
                {rel}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Notes */}
      <Card>
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">메모</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setEditing(!editing)}
            className="gap-1.5"
          >
            {editing ? (
              <>
                <Save className="w-3.5 h-3.5" />
                저장
              </>
            ) : (
              <>
                <Edit2 className="w-3.5 h-3.5" />
                편집
              </>
            )}
          </Button>
        </CardHeader>
        <CardContent>
          {editing ? (
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[120px] text-sm"
            />
          ) : (
            <p className="text-sm text-foreground/80 whitespace-pre-wrap leading-relaxed">
              {notes}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
