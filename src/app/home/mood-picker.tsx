"use client";

import Link from "next/link";

interface MoodOption {
  emoji: string;
  label: string;
  recommendation: string;
  href: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const MOODS: MoodOption[] = [
  {
    emoji: "😌",
    label: "차분해",
    recommendation: "세계관 메모, 인물 질문",
    href: "/world",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200/60",
    textColor: "text-sky-700",
  },
  {
    emoji: "🔥",
    label: "에너지 넘쳐",
    recommendation: "장면 쓰기, 어려운 프롬프트",
    href: "/scenes",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200/60",
    textColor: "text-orange-700",
  },
  {
    emoji: "😢",
    label: "우울해",
    recommendation: "감정 장면, 다정이 내면",
    href: "/people/dajeong",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200/60",
    textColor: "text-violet-700",
  },
  {
    emoji: "🤔",
    label: "생각 많아",
    recommendation: "브레인스토밍, 구조 질문",
    href: "/brainstorm",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200/60",
    textColor: "text-amber-700",
  },
  {
    emoji: "😴",
    label: "졸려/귀찮아",
    recommendation: "딱 한 문장만 + 메모",
    href: "/scratch",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200/60",
    textColor: "text-rose-700",
  },
];

export function MoodPicker() {
  return (
    <section className="space-y-4">
      <div className="text-center">
        <h2 className="text-sm font-medium text-amber-700/80 uppercase tracking-wider">
          오늘 기분이 어때?
        </h2>
        <p className="text-xs text-rose-400/70 mt-1">
          기분에 따라 작업을 추천해줄게
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {MOODS.map((mood) => (
          <Link key={mood.label} href={mood.href}>
            <div
              className={`${mood.bgColor} ${mood.borderColor} border rounded-xl p-4 text-center space-y-2 hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full`}
            >
              <span className="text-3xl block">{mood.emoji}</span>
              <p className={`text-sm font-medium ${mood.textColor}`}>
                {mood.label}
              </p>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {mood.recommendation}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
