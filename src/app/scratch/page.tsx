"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StickyNote, Plus, MoveRight, Trash2, Clock } from "lucide-react";
import { useState } from "react";

interface ScratchItem {
  id: string;
  content: string;
  created_at: string;
}

const DEMO_SCRATCH: ScratchItem[] = [
  {
    id: "1",
    content: "핑크색 풍선이라는 걸 키워드로 삼음. 어릴때 핑크색 풍선으로 회피함 힘들면",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "2",
    content: "달력은 병신들이나 보는 거야.",
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: "3",
    content: "맨날 과일주스 같은거 많이 먹다가...",
    created_at: new Date(Date.now() - 259200000).toISOString(),
  },
];

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "오늘";
  if (days === 1) return "어제";
  if (days < 7) return `${days}일 전`;
  return new Date(dateStr).toLocaleDateString("ko-KR");
}

export default function ScratchPage() {
  const [items, setItems] = useState(DEMO_SCRATCH);
  const [newContent, setNewContent] = useState("");

  const addItem = () => {
    if (!newContent.trim()) return;
    setItems([
      {
        id: String(Date.now()),
        content: newContent.trim(),
        created_at: new Date().toISOString(),
      },
      ...items,
    ]);
    setNewContent("");
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-8">
        <StickyNote className="w-5 h-5 text-primary" />
        <h1 className="font-serif text-2xl font-bold">메모</h1>
        <span className="text-xs text-muted-foreground ml-auto">
          정리 강박 X — 일단 박는 곳
        </span>
      </div>

      {/* Quick input */}
      <div className="mb-8">
        <Textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="아무거나 일단 박아..."
          className="min-h-[80px] text-sm mb-2"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.metaKey) {
              e.preventDefault();
              addItem();
            }
          }}
        />
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-muted-foreground">⌘ + Enter로 저장</span>
          <Button size="sm" onClick={addItem} className="gap-1.5">
            <Plus className="w-4 h-4" />
            저장
          </Button>
        </div>
      </div>

      {/* Scratch list */}
      <div className="space-y-3">
        {items.map((item) => (
          <Card key={item.id} className="group">
            <CardContent className="p-4">
              <p className="text-sm leading-relaxed whitespace-pre-wrap mb-3">
                {item.content}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {timeAgo(item.created_at)}
                </span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 gap-1 text-[10px]"
                    title="다른 섹션으로 이동"
                  >
                    <MoveRight className="w-3 h-3" />
                    이동
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-destructive hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
