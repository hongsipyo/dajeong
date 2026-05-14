"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, ImageIcon, Music, FileText, Plus, ExternalLink, Trash2 } from "lucide-react";
import { useState } from "react";

interface MusicItem {
  id: string;
  title: string;
  artist: string;
  url: string;
  note: string;
}

const INITIAL_MUSIC: MusicItem[] = [
  {
    id: "1",
    title: "Leave the Door Open",
    artist: "Bruno Mars, Anderson .Paak, Silk Sonic",
    url: "https://music.apple.com/kr/album/leave-the-door-open/1551901062?i=1551901065",
    note: "뮤지컬 씬 핵심곡. 반지하, 하인 분장, 멱살 잡기",
  },
  {
    id: "2",
    title: "말달리자",
    artist: "",
    url: "",
    note: "락페 난입 장면. 보컬 밀치고 부르다가 말 타고 키스",
  },
];

export default function WorldPage() {
  const [memoContent, setMemoContent] = useState(
    "시대: 2020년대 초중반, 광명\n톤: 매지컬 리얼리즘 + 한국적 정서\n서술: 3인칭인데 1인칭에 존나 가까움, 객관화 시도하다 실패\n\n핑크색 풍선 — 어릴 때 힘들면 핑크색 풍선으로 회피. 사랑에 빠지면 핑크색 풍선 나타남. 파랑색 풍선과 부풀어오름(썸) → 터짐.\n\n오행 시스템 — 가볍게, 재미용. 불의 기운 타고나서 불 좋아한다 이런 정도.\n\n할머니 수호신 — 라이프오브파이처럼 환상/현실 불명확. 호메로스/서유기처럼 보이지 않는 것들이 뒤에서 도움.\n\n사랑의 시각적 변화 — 흰우유→딸기우유, 주변 모든 것 바뀜.\n\n밥그릇 — 정우 트라우마. 어릴 때 밥그릇 없어서 환영 봄, 사랑의 표시로 밥그릇 줌.\n\n온기 — 여자는 (온기)로 덥혀져야 하는데 그 온기는 엄마가 (볼)로 전달.\n\nADHD 연출 — 인사이드아웃식. 팽이 돌아가며 DDR(racing thoughts). 머릿속 7개 채널."
  );

  const [musicList, setMusicList] = useState<MusicItem[]>(INITIAL_MUSIC);
  const [newTitle, setNewTitle] = useState("");
  const [newArtist, setNewArtist] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newNote, setNewNote] = useState("");

  const addMusic = () => {
    if (!newTitle.trim()) return;
    setMusicList([
      ...musicList,
      {
        id: String(Date.now()),
        title: newTitle.trim(),
        artist: newArtist.trim(),
        url: newUrl.trim(),
        note: newNote.trim(),
      },
    ]);
    setNewTitle("");
    setNewArtist("");
    setNewUrl("");
    setNewNote("");
  };

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
            <p className="text-sm text-muted-foreground mb-4">
              다정의 사운드트랙 후보들
            </p>

            {musicList.map((item) => (
              <Card key={item.id} className="group">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <Music className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-medium">{item.title}</h4>
                          {item.artist && (
                            <span className="text-xs text-muted-foreground">
                              — {item.artist}
                            </span>
                          )}
                        </div>
                        {item.note && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.note}
                          </p>
                        )}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1.5"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Apple Music에서 듣기
                          </a>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => setMusicList(musicList.filter((m) => m.id !== item.id))}
                      className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add new music */}
            <Card className="border-dashed">
              <CardContent className="p-4 space-y-3">
                <p className="text-xs text-muted-foreground font-medium">새 곡 추가</p>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="곡 제목"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="text-sm"
                  />
                  <Input
                    placeholder="아티스트"
                    value={newArtist}
                    onChange={(e) => setNewArtist(e.target.value)}
                    className="text-sm"
                  />
                </div>
                <Input
                  placeholder="Apple Music 링크 (선택)"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="text-sm"
                />
                <Input
                  placeholder="메모 (어떤 장면?)"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="text-sm"
                />
                <Button variant="outline" size="sm" onClick={addMusic} className="gap-1.5">
                  <Plus className="w-3.5 h-3.5" />
                  추가
                </Button>
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
                className="min-h-[400px] text-sm leading-relaxed border-none bg-transparent p-0 resize-none focus-visible:ring-0"
                placeholder="시대 배경, 톤, 분위기, 모티프..."
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
