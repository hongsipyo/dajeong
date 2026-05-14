"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Edit2, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { CHARACTERS } from "@/lib/data";

export default function CharacterDetailPage() {
  const params = useParams();
  const char = CHARACTERS.find((c) => c.id === params.id);

  const [notes, setNotes] = useState(char?.notes ?? "");
  const [editing, setEditing] = useState(false);

  if (!char) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link
          href="/people"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          인물 목록
        </Link>
        <p className="text-muted-foreground">인물을 찾을 수 없습니다.</p>
      </div>
    );
  }

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

      {/* Details & Relationships */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">기본 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {Object.entries(char.details).map(([key, val]) => (
              <div key={key} className="flex gap-3 text-sm">
                <span className="text-muted-foreground w-20 shrink-0">
                  {key}
                </span>
                <span>{val}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">관계</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {char.relationships.map((rel, i) => (
              <p key={i} className="text-sm text-foreground/80">
                {rel}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Key Lines */}
      {char.keyLines.length > 0 && (
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">핵심 대사</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {char.keyLines.map((line, i) => (
              <p key={i} className="text-sm text-foreground/80 italic">
                &ldquo;{line}&rdquo;
              </p>
            ))}
          </CardContent>
        </Card>
      )}

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
