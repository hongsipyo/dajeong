import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  // TODO: fetch from Supabase
  const episodes = Array.from({ length: 16 }, (_, i) => ({
    number: i + 1,
    title: `${i + 1}부`,
    progress: 0,
  }));
  const overallProgress = 0;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Cover & Title */}
      <section className="text-center mb-16">
        <div className="w-48 h-64 mx-auto mb-8 bg-card rounded-lg border border-border flex items-center justify-center shadow-2xl">
          <span className="font-serif text-4xl font-bold text-primary">다정</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">다정</h1>
        <p className="text-muted-foreground text-lg">
          내 젊음을 농축한 16부작 드라마
        </p>
      </section>

      {/* Overall Progress */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            전체 진행률
          </h2>
          <span className="text-sm text-muted-foreground">{overallProgress}%</span>
        </div>
        <Progress value={overallProgress} className="h-2" />

        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-6">
          {episodes.map((ep) => (
            <div
              key={ep.number}
              className="aspect-square rounded-lg bg-card border border-border flex flex-col items-center justify-center gap-1 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <span className="text-xs text-muted-foreground">{ep.number}부</span>
              <span className="text-[10px] text-muted-foreground/60">
                {ep.progress}%
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Fragment */}
      <section>
        <Card className="bg-card/50 border-dashed">
          <CardContent className="p-8 text-center">
            <Sparkles className="w-6 h-6 mx-auto mb-4 text-primary" />
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              오늘의 파편
            </h3>
            <p className="text-foreground/80 italic leading-relaxed">
              &ldquo;인생에 의미는 없지만 형태는 있다. 머리에 담은 것, 보내는 시간.&rdquo;
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
