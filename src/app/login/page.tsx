"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Pen } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  // Check if already logged in
  useEffect(() => {
    async function check() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        window.location.href = "/home";
      } else {
        setChecking(false);
      }
    }
    check();
  }, []);

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }

      // Hard redirect to ensure cookies are sent with next request
      window.location.href = "/home";
    } catch {
      setError("로그인 중 오류가 발생했습니다");
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-rose-50 to-yellow-50">
        <p className="text-muted-foreground text-sm">확인 중...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-amber-50 via-rose-50 to-yellow-50">
      <Card className="w-full max-w-sm shadow-lg shadow-rose-100/50 border-rose-200/60">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="font-serif text-4xl font-bold bg-gradient-to-b from-rose-400 to-amber-500 bg-clip-text text-transparent">
              다정
            </h1>
            <div className="flex items-center justify-center gap-1.5">
              <Pen className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">작가 홍시표의 작업 공간</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {error && (
              <p className="text-xs text-destructive text-center">{error}</p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "로그인 중..." : "로그인"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
