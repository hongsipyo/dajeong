"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Feather, Sparkles, Save, Loader2 } from "lucide-react";
import { saveScratch } from "@/lib/supabase/actions";

export default function ZenPage() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleConnect = async () => {
    if (!text.trim()) return;
    setSaving(true);
    setSummary(null);

    // 저장
    await saveScratch(`[zen] ${text.trim()}`);

    // 연결 요약
    const content = text.trim();
    const connections: string[] = [];

    if (/다정|주인공/.test(content)) connections.push("다정 캐릭터");
    if (/장면|씬/.test(content)) connections.push("장면");
    if (/대사|말/.test(content)) connections.push("대사");
    if (/설정|세계관/.test(content)) connections.push("세계관");
    if (/갈등|관계/.test(content)) connections.push("갈등 구조");
    if (/웹툰|웹소설|영화|플랫폼/.test(content)) connections.push("플랫폼 전략");

    if (connections.length > 0) {
      setSummary(`연결: ${connections.join(" · ")}`);
    } else {
      setSummary("새로운 아이디어 — 파편으로 저장됨.");
    }

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleClear = () => {
    setText("");
    setSummary(null);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 min-h-screen flex flex-col">
      <div className="flex items-center gap-2 mb-12">
        <Feather className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          zen
        </span>
      </div>

      <div className="flex-1 flex flex-col">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="그냥 써."
          className="flex-1 min-h-[400px] text-base leading-relaxed border-none shadow-none resize-none focus-visible:ring-0 placeholder:text-muted-foreground/30 font-serif"
          autoFocus
        />
      </div>

      {summary && (
        <div className="mt-6 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-medium text-primary">프로젝트 연결</span>
          </div>
          <p className="text-sm text-foreground/70">{summary}</p>
        </div>
      )}

      <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/30">
        <span className="text-[10px] text-muted-foreground">
          {text.length > 0 ? `${text.length}자` : "빈 칸"}
        </span>
        <div className="flex gap-2">
          {text.length > 0 && (
            <Button variant="ghost" size="sm" onClick={handleClear} className="text-xs">
              비우기
            </Button>
          )}
          <Button
            size="sm"
            onClick={handleConnect}
            disabled={!text.trim() || saving}
            className="gap-1.5"
          >
            {saving ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : saved ? (
              <Save className="w-3.5 h-3.5" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            {saved ? "저장됨" : "연결"}
          </Button>
        </div>
      </div>
    </div>
  );
}
