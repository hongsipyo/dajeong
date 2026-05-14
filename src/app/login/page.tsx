"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"password" | "magic">("password");

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center pb-2">
          <h1 className="font-serif text-3xl font-bold text-primary mb-1">다정</h1>
          <CardTitle className="text-sm font-normal text-muted-foreground">
            비공개 작업 공간
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {mode === "password" && (
            <div>
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          <Button className="w-full">
            {mode === "password" ? "로그인" : "매직 링크 전송"}
          </Button>
          <button
            onClick={() => setMode(mode === "password" ? "magic" : "password")}
            className="text-xs text-muted-foreground hover:text-foreground w-full text-center block"
          >
            {mode === "password"
              ? "매직 링크로 로그인"
              : "비밀번호로 로그인"}
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
