"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EpisodeDetailPage() {
  const [title, setTitle] = useState("올바른 하루");
  const [synopsis, setSynopsis] = useState(
    "다정이는 올바른 하루를 위한 계획을 세운다. 다른 사람들을 보고 올바른 하루를 베끼려 한다. 다정이는 사실 상품의 라벨이 전면에 보이도록 줄을 세우고 예쁘게 맞추는 것보다 훨씬 더 중요한 뭔가가 있다고 생각하는 사람이지만..."
  );
  const [progress, setProgress] = useState(15);

  const scenes = [
    { title: "다정이 아침 — 계획 세우기", content: "다른 집 엄마는 손걸레를 미리 개놓음" },
    { title: "공부방 — 엄마 도우미", content: "알바가 아닌 자영업 도우미의 세련되지 않은 느낌" },
    { title: "편의점/알바 — 정리정돈 집착", content: "상품 라벨 전면, 줄 맞춤. 계속 흐트러짐" },
  ];

  const dialogues = [
    { speaker: "다정", line: "다들 어떻게 그렇게들 사는지." },
    { speaker: "나레이션", line: "인생에 의미는 없지만 형태는 있다." },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href="/episodes"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        회차 목록
      </Link>

      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <Badge variant="secondary" className="text-lg px-3 py-1">
          1부
        </Badge>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="font-serif text-xl font-bold border-none bg-transparent p-0 h-auto focus-visible:ring-0"
          placeholder="제목을 입력하세요..."
        />
      </div>

      <div className="flex items-center gap-3 mb-8">
        <Progress value={progress} className="h-2 flex-1 max-w-xs" />
        <Input
          type="number"
          min={0}
          max={100}
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-16 h-7 text-xs text-center"
        />
        <span className="text-xs text-muted-foreground">%</span>
      </div>

      <Separator className="mb-8" />

      {/* Synopsis */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">시놉시스</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            className="min-h-[100px] text-sm leading-relaxed border-none bg-transparent p-0 resize-none focus-visible:ring-0"
            placeholder="이 회차의 시놉시스..."
          />
        </CardContent>
      </Card>

      {/* Scenes */}
      <Card className="mb-6">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">장면</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1 text-xs">
            <Plus className="w-3.5 h-3.5" />
            추가
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {scenes.map((scene, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-secondary/50 border border-border/50"
            >
              <h4 className="text-sm font-medium mb-1">{scene.title}</h4>
              <p className="text-xs text-muted-foreground">{scene.content}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Dialogues */}
      <Card className="mb-6">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium">대사 파편</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1 text-xs">
            <Plus className="w-3.5 h-3.5" />
            추가
          </Button>
        </CardHeader>
        <CardContent className="space-y-2.5">
          {dialogues.map((d, i) => (
            <div key={i} className="flex gap-3 text-sm">
              <Badge variant="secondary" className="shrink-0 text-[10px]">
                {d.speaker}
              </Badge>
              <p className="text-foreground/80 italic">&ldquo;{d.line}&rdquo;</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="gap-1.5">
          <Save className="w-4 h-4" />
          저장
        </Button>
      </div>
    </div>
  );
}
