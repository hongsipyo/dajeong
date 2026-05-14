"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mic,
  ImageIcon,
  Type,
  Search,
  Clock,
  Tag,
  Plus,
} from "lucide-react";
import type { Fragment } from "@/types/database";

// Demo data — will be replaced with Supabase queries
const DEMO_FRAGMENTS: (Fragment & { _demo?: boolean })[] = [
  {
    id: "1",
    type: "text",
    content:
      "인생에 의미는 없지만 형태는 있다. 머리에 담은 것, 보내는 시간.",
    audio_url: null,
    image_url: null,
    tags: ["테마", "철학"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    type: "text",
    content:
      "아버지가 가진 꿈의 주파수는 SBS의 주파수와 잘 만나지 못했다.",
    audio_url: null,
    image_url: null,
    tags: ["아빠", "대사"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    type: "text",
    content:
      "착각과 환상은 우리를 두 곳 중 하나로 이끈다. 깨진 유리더미와 토범벅이 된 침대시트가 있는 방, 그게 아니면 예술.",
    audio_url: null,
    image_url: null,
    tags: ["테마", "착각"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date(Date.now() - 172800000).toISOString(),
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: "4",
    type: "text",
    content:
      "무일푼이 되려면 아직 구십칠만원이 더 필요했다.",
    audio_url: null,
    image_url: null,
    tags: ["대사", "다정"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date(Date.now() - 259200000).toISOString(),
    updated_at: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: "5",
    type: "text",
    content:
      "서현이는 자기도 모르는 새에 자기에게서 무언가가 빠져나가고, 또 자기가 굳어지고, 어쩌면 더 작아지는 것을 느꼈다.",
    audio_url: null,
    image_url: null,
    tags: ["서현", "장면"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date(Date.now() - 345600000).toISOString(),
    updated_at: new Date(Date.now() - 345600000).toISOString(),
  },
  {
    id: "6",
    type: "text",
    content: "다들 어떻게 그렇게들 사는지.",
    audio_url: null,
    image_url: null,
    tags: ["첫문장", "다정"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date(Date.now() - 432000000).toISOString(),
    updated_at: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    id: "7",
    type: "text",
    content:
      "뭐 문제가 있으면 다 풀어? 니가 있는 문제를 다 풀었으면 대학을 그렇게 갔겠냐? 쎈수학 문제도 안 푼 새끼가 씨발",
    audio_url: null,
    image_url: null,
    tags: ["서현", "대사", "싸움"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date(Date.now() - 518400000).toISOString(),
    updated_at: new Date(Date.now() - 518400000).toISOString(),
  },
  {
    id: "8",
    type: "text",
    content:
      "꿈은 문제와 짝꿍이야. 문제를 들여다보기 힘들어서 옆을 보면, 거기엔 꿈이 자라고 있지.",
    audio_url: null,
    image_url: null,
    tags: ["테마", "꿈"],
    episode_id: null,
    character_id: null,
    section: "fragments",
    user_id: "",
    created_at: new Date(Date.now() - 604800000).toISOString(),
    updated_at: new Date(Date.now() - 604800000).toISOString(),
  },
];

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}분 전`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}일 전`;
  return new Date(dateStr).toLocaleDateString("ko-KR");
}

function FragmentIcon({ type }: { type: Fragment["type"] }) {
  switch (type) {
    case "voice":
      return <Mic className="w-3.5 h-3.5" />;
    case "image":
      return <ImageIcon className="w-3.5 h-3.5" />;
    default:
      return <Type className="w-3.5 h-3.5" />;
  }
}

export default function FragmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [fragments] = useState(DEMO_FRAGMENTS);

  const allTags = Array.from(new Set(fragments.flatMap((f) => f.tags)));

  const filtered = fragments.filter((f) => {
    if (selectedTag && !f.tags.includes(selectedTag)) return false;
    if (searchQuery && !f.content?.toLowerCase().includes(searchQuery.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-2xl font-bold">파편</h1>
        <Button size="sm" className="gap-1.5">
          <Plus className="w-4 h-4" />
          새 파편
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="파편 검색..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <Tag className="w-3.5 h-3.5 text-muted-foreground" />
        <button
          onClick={() => setSelectedTag(null)}
          className={`text-xs px-2 py-1 rounded-full transition-colors ${
            !selectedTag
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          }`}
        >
          전체
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`text-xs px-2 py-1 rounded-full transition-colors ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Fragment Feed */}
      <div className="space-y-3">
        {filtered.map((fragment) => (
          <Card
            key={fragment.id}
            className="group hover:border-primary/30 transition-colors cursor-pointer"
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 rounded-md bg-secondary">
                  <FragmentIcon type={fragment.type} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
                    {fragment.content}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {timeAgo(fragment.created_at)}
                    </span>
                    <div className="flex gap-1.5">
                      {fragment.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p>파편이 없습니다</p>
          <p className="text-sm mt-1">+ 버튼으로 첫 파편을 남겨보세요</p>
        </div>
      )}
    </div>
  );
}
