"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, ImageIcon, Music, FileText, Plus, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

export default function WorldPage() {
  const [memoContent, setMemoContent] = useState(
    "시대: 2020년대 초중반, 광명\n톤: 매지컬 리얼리즘 + 한국적 정서\n\n핑크색 풍선 — 어릴 때 힘들면 핑크색 풍선으로 회피. 사랑에 빠지면 핑크색 풍선 나타남.\n\n오행 시스템 — 가볍게, 재미용. 불의 기운 타고나서 불 좋아한다 이런 정도."
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Globe className="w-5 h-5 text-primary" />
        <h1 className="font-serif text-2xl font-bold">세계관</h1>
      </div>

      <Tabs defaultValue="moodboard">
        <TabsList className="mb-6">
          <TabsTrigger value="moodboard" className="gap-1.5">
            <ImageIcon className="w-3.5 h-3.5" />
            무드보드
          </TabsTrigger>
          <TabsTrigger value="music" className="gap-1.5">
            <Music className="w-3.5 h-3.5" />
            음악
          </TabsTrigger>
          <TabsTrigger value="notes" className="gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            메모
          </TabsTrigger>
        </TabsList>

        <TabsContent value="moodboard">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {/* Empty moodboard slots */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg border border-dashed border-border bg-card/50 flex items-center justify-center cursor-pointer hover:border-primary/30 transition-colors"
              >
                <div className="text-center">
                  <ImageIcon className="w-6 h-6 mx-auto text-muted-foreground/30 mb-2" />
                  <span className="text-xs text-muted-foreground/40">이미지 추가</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="gap-1.5">
            <Plus className="w-4 h-4" />
            이미지 업로드
          </Button>
        </TabsContent>

        <TabsContent value="music">
          <div className="space-y-3 mb-6">
            <Card className="border-dashed">
              <CardContent className="p-6 text-center">
                <Music className="w-8 h-8 mx-auto text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground mb-3">
                  다정의 사운드트랙 후보들
                </p>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <LinkIcon className="w-3.5 h-3.5" />
                    Spotify 링크 추가
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    YouTube 링크 추가
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">세계관 메모</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={memoContent}
                onChange={(e) => setMemoContent(e.target.value)}
                className="min-h-[300px] text-sm leading-relaxed border-none bg-transparent p-0 resize-none focus-visible:ring-0"
                placeholder="시대 배경, 톤, 분위기, 모티프..."
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
