// ============================================================
// 다정 — 모든 작품 데이터 (대화에서 추출)
// Supabase 연결 전까지 이 파일이 진실의 원천
// ============================================================

export interface CharacterData {
  id: string;
  name: string;
  description: string;
  element: string | null;
  animal: string | null;
  details: Record<string, string>;
  relationships: string[];
  notes: string;
  keyLines: string[];
}

export interface EpisodeData {
  number: number;
  title: string | null;
  firstLine: string | null; // "다정이는 ___이다"
  synopsis: string | null;
  focusCharacter: string | null;
  scenes: { title: string; content: string }[];
  keyFragments: string[];
  progress: number;
}

export interface FragmentData {
  id: string;
  content: string;
  tags: string[];
  character?: string;
  episode?: number;
  type: "text" | "voice" | "image";
  createdAt: string;
}

export interface RefData {
  id: string;
  type: string;
  title: string;
  note: string;
  tags: string[];
}

// ============================================================
// CHARACTERS
// ============================================================
export const CHARACTERS: CharacterData[] = [
  {
    id: "dajeong",
    name: "다정",
    description: "25살, 서울여대 영어과, 픽사 꿈, ADHD, 광명 공부방 딸",
    element: "水",
    animal: "물고기 (본인 생각) → 실제는?",
    details: {
      나이: "25살 (97년생)",
      학교: "서울여대 영어영문학과",
      꿈: "픽사에서 일하기 — 영어과 간 이유",
      가족: "공부방 딸, 둘째. 언니(아정), 남동생",
      성격: "착함, 규칙 지키려 노력, ADHD, 정신 산만",
      외모: "미정",
      말투: "자기 언어 사용 신중, 트위터식 유행어 안 씀",
      거주: "신림동 (룸메 삼촌 빌라) / 광명 본가",
      알바: "편의점 + 공부방 도우미 (세련되지 않은 자영업)",
      ADHD: "지하철역 지나침, 머릿속 7개 채널, 계획 세우지만 실패",
      핵심: "올바른 하루를 베끼려 함, 규칙 못 지켜도 규칙을 크게 생각",
    },
    relationships: [
      "정우 — 남자친구 (나중에 헤어짐, 돈 집착 때문)",
      "서현 — 동경했다가 차갑게 식음",
      "할머니 — 수호신, 나중에 사라짐",
      "엄마 — 공부방 원장, 동정과 답답함",
      "아빠 — 흐릿함, 좋지도 싫지도 않지만 미운 마음",
      "언니(아정) — 식이장애, 착하지만 다정이 남자 만나는 것에 열등감",
    ],
    notes: "다정이는 '착해야' 되고 전형적 페미니스트가 아님. 좋아할만한 사람이어야 함. slay queen 이런 거 안 함. 여자 찐따/ADHD는 규칙 못 지켜도 규칙을 존나 크게 생각함.",
    keyLines: [
      "다들 어떻게 그렇게들 사는지.",
      "내 이름은 다정. 선생님은 내가 말을 잘 하니 영업사원이 돼도 좋겠다고 하셨다.",
      "만약 가난이 전염병 같은 거라고 믿는다면, 내 이야기는 보지 않아도 좋다.",
    ],
  },
  {
    id: "jungwoo",
    name: "정우",
    description: "카페블라썸 사장, 청소업→카페, 돈 집착, 젠틀한 학생이었음",
    element: "土/金",
    animal: null,
    details: {
      직업: "카페블라썸 사장 (좆구린 동네 감성카페, 월천순수익)",
      전직: "청소업체 → 매장 청소하며 노하우 → 카페",
      성격: "규칙적/체계적, 통제 중시, 진상 다 커트",
      카톡: "ㅎ 하나만 씀 → 다정이가 두 개 붙이라고 알려줌",
      트라우마: "어릴 때 밥그릇 없어서 밥그릇 환영 봄, 밥그릇 집착",
      머릿속: "규칙 도미노 쌓는데 다정이와 말하면 무너짐",
      연결: "공부방에서 젠틀한 학생이었음 → 다정이네 공부방 출신",
    },
    relationships: [
      "다정 — 여자친구 (헤어짐: 돈을 너무 중요하게 생각)",
      "수박형(정수) — 모자란 형, 나중에 죽음",
      "서현 — 친구, 쎈수학 사건으로 싸움",
      "연우 — 카페 직원, 잘생긴 친구",
      "한울 — 눈치 없는 친구",
    ],
    notes: "핵심 씬: 다정이한테 차이고 형 죽고 사업 엉망이고 친구들 떠나가서 카페 유리창에 머리 박음. 이전에도 잊고 싶을 때 유리창에 머리 박는 습관. 친구들이 유리 치워줌. 픽사 이력서를 제본해서 다정이에게 줌.",
    keyLines: [
      "일단 있어야 채우지. (픽사 이력서 건네며)",
    ],
  },
  {
    id: "seohyun",
    name: "서현",
    description: "병원 직원, 민사고 못간 수재, 회피형, 김민석 배우 얼굴",
    element: "金",
    animal: null,
    details: {
      나이: "26-27살",
      직업: "병원 사무직 (의사 아님, 의사보다 똑똑한데)",
      가족: "엄마 없음 (도망/이혼), 아빠 혼자 키움",
      성격: "회피형, 주변과 잘 안 싸움, 감정 삼킴",
      외모: "김민석 배우 느낌, 상남자 스타일 아님",
      학력: "민사고 입학시험 1등, 전국 1등, 집안 어려워져서 일반대학",
      핵심감정: "굳어감, 작아짐, 빠져나감",
      대학: "다시 간다는 생각 자체가 언감생심",
    },
    relationships: [
      "정우 — 친구 (쎈수학 사건으로 싸움, 울음)",
      "다정 — 다정이가 동경, 나중에 차갑게 식음",
      "수박형 — 유일하게 진심으로 대해준 사람",
      "아빠 — 자랑 ('우리 애 민사고 1등') → '아버지 그만하세요'",
    ],
    notes: "서현 부는 간접적으로만 드러남. 아빠가 친척/고객/친구들에게 '우리 애 전국 1등이었는데 집안만 안 어려웠으면' 반복. 서현이 '아버지 그만하세요'. 쎈수학 사건: '니가 있는 문제를 다 풀었으면 대학을 그렇게 갔겠냐? 쎈수학 문제도 안 푼 새끼가 씨발' → 울음. 수박형만 와서 '넌 우리중에 제일 똑똑하니까 이딴 거 하면서 살면 안 된다'",
    keyLines: [
      "뭐 문제가 있으면 다 풀어? 니가 있는 문제를 다 풀었으면 대학을 그렇게 갔겠냐? 쎈수학 문제도 안 푼 새끼가 씨발",
      "아버지, 그만하세요.",
    ],
  },
  {
    id: "subak",
    name: "수박형 (정수)",
    description: "정우의 형, 착하고 힘세지만 모자란, 나중에 죽음",
    element: "木",
    animal: null,
    details: {
      관계: "정우의 형",
      직업: "수박가게 취업 (정우가 거래처 사장과 딜)",
      성격: "착함, 싸움 잘하지만 그냥 맞음, 눈빛 제대로 본 사람 없음",
      외모: "못생김 (카페 일 안 시킴), 큰 덩치",
      죽음: "불합리한 죽음 (구체적 원인 미정)",
    },
    relationships: [
      "정우 — 동생",
      "서현 — '넌 제일 똑똑하니까 이딴 거 하면서 살면 안 된다'",
      "연우 — 죽빵 때려서 이 부러뜨림",
    ],
    notes: "수박형 죽음 이후 정우 붕괴 → 유리창 머리 박기. 젊은 여자가 도와줌, 과일가게 아줌마에게 모성애. 고백하지 않음 — 잘생겼으면 이미 섹스했을 거라고 생각.",
    keyLines: [
      "넌 우리 중에 제일 똑똑하니까 이딴 거 하면서 살면 안 된다.",
    ],
  },
  {
    id: "yeonwoo",
    name: "연우",
    description: "잘생긴 카페 직원, 아빠 바람둥이, 이 부러짐",
    element: null,
    animal: null,
    details: {
      직업: "카페블라썸 직원",
      외모: "잘생김",
      가족: "아빠 바람둥이, 잘 데 갈 데 없음, 자기 수염 뽑음",
      특이사항: "수박형한테 이 부러짐 → 사귀는 누나가 안 해줘서 그대로 다님",
    },
    relationships: [
      "정우 — 카페 동료/친구",
      "수박형 — 죽빵 맞음",
    ],
    notes: "",
    keyLines: [],
  },
  {
    id: "hanul",
    name: "한울",
    description: "눈치 없음, 항상 옆에 있음, 전문하사 지원",
    element: null,
    animal: null,
    details: {
      성격: "약간 얄밉지만 늘 옆에 있음, 눈치 좆같이 없음",
      군대: "상근 → 전문하사 하려 함",
    },
    relationships: ["정우 패거리"],
    notes: "",
    keyLines: [],
  },
  {
    id: "mom",
    name: "엄마",
    description: "공부방 원장, ADHD, 열심히 가르침, 시간관리 X",
    element: "火",
    animal: null,
    details: {
      직업: "광명 공부방/교습소 원장",
      성격: "ADHD, 열심히 함, 가르침 잘함, 시간/행정 못 함",
      핵심감정: "집에 있는 애 신경 쓰이는데 밖에서 일해야 하고, 하루종일 기분 안 좋고 자기 일 다 못하는 느낌",
      악담: "조용하게 악담 — '원래 안되는 사람은 저런 데 운을 다 써서 안 되는 거야'",
    },
    relationships: [
      "다정 — 딸, 공부방 도우미로 부림",
      "아빠 — 한량 남편",
      "아정 — 식이장애 딸 걱정",
    ],
    notes: "다정이네 엄마도 ADHD. 공부방 오픈 시간 맨날 늦음, 행정 못함, 근데 가르치는 건 잘함. 다정이 역할: 시간 맞추기, 학부모 연락, 청소, 행정. 엄마도 자기한테 안 맞는 자영업을 어거지로 하는 사람.",
    keyLines: [
      "원래 안 되는 사람은 저런 데 운을 다 써서 안 되는 거야. 인생이 잘되야지.",
    ],
  },
  {
    id: "dad",
    name: "아빠",
    description: "한량, 흐릿한 존재, 로또 연구",
    element: null,
    animal: null,
    details: {
      성격: "한량, 사회적 자살",
      일상: "매일 로또 긁음, 꿈에서 깨면 번호 메모",
      존재감: "흐릿함 — 좋지도 싫지도 않지만 미운 마음, 사랑하기엔 애매",
    },
    relationships: ["다정 — 딸"],
    notes: "아빠는 깊이 안 다룸. 배경으로만. 공부방 한쪽에 앉아있음, TV 봄, 도움 안 됨.",
    keyLines: [
      "아버지가 가진 꿈의 주파수는 SBS의 주파수와 잘 만나지 못했다.",
    ],
  },
  {
    id: "ajung",
    name: "언니 (아정)",
    description: "식이장애, 원래 공부 잘함(영어), 편의점 알바",
    element: "火 부족",
    animal: null,
    details: {
      성격: "착하지만 다정이가 남자 만나는 것에 열등감",
      식이장애: "편의점 알바→황치즈빵 폭식→돈 거덜→매일 폭식의 잔해",
      해결: "남초직장에서 매일 국밥 먹음, 남자들이 밥 챙겨줌, 조금 나아짐",
      이후: "다시 안 좋은 습관으로 돌아오지만, 조금 나아져 있음",
    },
    relationships: [
      "다정 — 동생",
      "별명: 요아정 (놀림)",
    ],
    notes: "언니는 인생은 적정체중을 가진 사람들의 무대라고 생각함. 회사 친구가 자꾸 간식줌. 청소도 못하고 인지능력 낮아져서 경계성 비슷.",
    keyLines: [],
  },
  {
    id: "grandma",
    name: "할머니",
    description: "수호신, 다정을 따라다님, 나중에 사라짐",
    element: "火 (온기)",
    animal: null,
    details: {
      존재: "죽은 할머니 — 수호신처럼 다정을 따라다님",
      방식: "다정이만 보임 (또는 느낌), 진짜인지 환상인지 불명확",
      사라짐: "다정이 더이상 필요 없어질 때",
      신촌: "신촌 가면 마음 편한 이유 — 할머니/강아지/불 기운",
    },
    relationships: ["다정 — 손녀"],
    notes: "라이프 오브 파이처럼 — 환상 vs 현실, 어느 쪽을 믿고 싶어? 호메로스/서유기처럼 보이지 않는 것들이 뒤에서 도움. '너에게 필요한 동안은 네 마음 속에 남아 있어.'",
    keyLines: [
      "항상 남아 있어. 살면서 사랑했던 것은 절대 떠나지 않아.",
    ],
  },
];

// ============================================================
// EPISODES (16부작 옴니버스 — 안나 카레니나 구조)
// ============================================================
export const EPISODES: EpisodeData[] = [
  {
    number: 1,
    title: "올바른 하루",
    firstLine: "다정이는 올바르다",
    synopsis: "다정이는 올바른 하루를 위한 계획을 세운다. 다른 사람들을 보고 올바른 하루를 베끼려 한다. 손걸레를 미리 개놓는 다른 집 엄마를 보고, 다정이는 엄마를 위해 손걸레를 개놓으려 한다.",
    focusCharacter: "다정",
    scenes: [
      { title: "다정이 아침 — 계획 세우기", content: "다른 집 엄마는 손걸레를 미리 개놓음. 다정이는 따라하려 함" },
      { title: "공부방 — 정리정돈 집착", content: "알바가 아닌 자영업 도우미. 상품 라벨 전면, 줄 맞춤. 계속 흐트러짐" },
      { title: "집 — 좆쓰레기", content: "화장 안 지우고 머리도 안 감고 잠. 계획과 현실의 괴리" },
    ],
    keyFragments: [
      "다들 어떻게 그렇게들 사는지.",
      "인생에 의미는 없지만 형태는 있다. 머리에 담은 것, 보내는 시간.",
    ],
    progress: 15,
  },
  {
    number: 2,
    title: null,
    firstLine: "다정이는 착하다",
    synopsis: null,
    focusCharacter: "다정/엄마",
    scenes: [],
    keyFragments: ["원래 안 되는 사람은 저런 데 운을 다 써서 안 되는 거야."],
    progress: 0,
  },
  {
    number: 3,
    title: null,
    firstLine: "다정이는 딸이다",
    synopsis: null,
    focusCharacter: "엄마",
    scenes: [],
    keyFragments: [],
    progress: 0,
  },
  {
    number: 4,
    title: null,
    firstLine: null,
    synopsis: null,
    focusCharacter: "서현",
    scenes: [],
    keyFragments: [
      "서현이는 자기도 모르는 새에 자기에게서 무언가가 빠져나가고, 또 자기가 굳어지고, 어쩌면 더 작아지는 것을 느꼈다.",
    ],
    progress: 0,
  },
  {
    number: 5,
    title: null,
    firstLine: null,
    synopsis: null,
    focusCharacter: "정우",
    scenes: [],
    keyFragments: [],
    progress: 0,
  },
  { number: 6, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 7, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 8, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 9, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 10, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 11, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 12, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 13, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  { number: 14, title: null, firstLine: null, synopsis: null, focusCharacter: null, scenes: [], keyFragments: [], progress: 0 },
  {
    number: 15,
    title: "뮤지컬",
    firstLine: "다정이는 사랑받는다",
    synopsis: "정우가 반지하를 예쁘게 꾸며서 다정 초대. 친구들 하인 분장. Leave the Door Open. 현실/환상 경계 흐릿. 다정이 멱살 잡아끌기.",
    focusCharacter: "정우/다정",
    scenes: [
      { title: "반지하 꾸미기", content: "정우 청소 능력 발휘, 친구들 하인 분장, 턴테이블" },
      { title: "Leave the Door Open", content: "Just shaved 위해 왁싱, If you smoke 담배(말레), 코러스 같이 부르며 춤" },
      { title: "2절 이후", content: "옷/배경 계속 바뀜 (파리로도). 현실인지 환상인지 구분 안 감" },
      { title: "엔딩", content: "쑥맥 → 다정이 멱살 잡아끌어당김. 하인들 도망" },
    ],
    keyFragments: [],
    progress: 5,
  },
  {
    number: 16,
    title: "다정이는 다정이다",
    firstLine: "다정이는 다정이다",
    synopsis: "지하철에 계속 타있는 다정. 사람들 오고 감. 신도시 도착. 광명 본가 귀가. 또 역 지나침(ADHD). 누군가 기다려줌. '늦더라도 오면 됐지.'",
    focusCharacter: "다정",
    scenes: [
      { title: "지하철", content: "계속 타있는 다정. 수많은 사람들 타고 내림 (토하기도, 남주 패거리도). 신도시 도착, 아무도 없음" },
      { title: "편의점 어린 다정", content: "다정이 어린 자신 목격. 도와주려 하는데 엄마가 '그냥 가자' 손 잡아끔" },
      { title: "광명 본가 귀가", content: "또 지하철역 지나침. 늦게 도착. 누군가 기다려줌. '늦더라도 오면 됐지'" },
    ],
    keyFragments: [
      "다정이는 다정이다.",
      "늦더라도 오면 됐지.",
    ],
    progress: 5,
  },
];

// ============================================================
// FRAGMENTS (대화에서 나온 모든 파편)
// ============================================================
export const FRAGMENTS: FragmentData[] = [
  // 테마/철학
  { id: "f1", content: "인생에 의미는 없지만 형태는 있다. 머리에 담은 것, 보내는 시간.", tags: ["테마", "철학"], type: "text", createdAt: "2026-02-27" },
  { id: "f2", content: "착각과 환상은 우리를 두 곳 중 하나로 이끈다. 깨진 유리더미와 토범벅이 된 침대시트가 있는 방, 그게 아니면 예술.", tags: ["테마", "착각"], type: "text", createdAt: "2026-02-02" },
  { id: "f3", content: "문제가 있었던 곳은 반드시 새로운 문제가 생기지만, 꿈이 있던 자리에 다른 꿈이 다시 생기지는 않아.", tags: ["테마", "꿈"], type: "text", createdAt: "2026-02-02" },
  { id: "f4", content: "꿈은 문제와 짝꿍이야. 문제를 들여다보기 힘들어서 옆을 보면, 거기엔 꿈이 자라고 있지.", tags: ["테마", "꿈"], type: "text", createdAt: "2026-02-02" },
  { id: "f5", content: "꿈은 이 자리에 없어서 만들고 싶은 것. 이 자리에 없는 것도 없고, 따로 만들고 싶은 것도 없어. 삶이 지금 여기에 와 있거든.", tags: ["테마", "꿈"], type: "text", createdAt: "2026-02-02" },
  { id: "f6", content: "꿈이 없어졌다는 건 어쩌면 엄청나게 행복한 일이야.", tags: ["테마", "꿈"], type: "text", createdAt: "2026-02-02" },

  // 첫 문장 / 인트로
  { id: "f7", content: "다들 어떻게 그렇게들 사는지.", tags: ["첫문장", "다정"], type: "text", createdAt: "2026-02-18" },
  { id: "f8", content: "내 이름은 다정. 선생님은 내가 말을 잘 하니 영업사원이 돼도 좋겠다고 하셨다. 하지만 난 사람들 사이에서 늘 손해를 본다. 내가 조금 잘 하는 건 남을 웃기는 것 뿐이다.", tags: ["인트로", "다정"], type: "text", createdAt: "2026-02-02" },
  { id: "f9", content: "만약 가난이 전염병 같은 거라고 믿는다면, 내 이야기는 보지 않아도 좋다. 이건 내가 사랑했던 것들에 대한 이야기고, 무엇보다 나를 위한 이야기다.", tags: ["인트로", "다정"], type: "text", createdAt: "2026-02-02" },

  // 대사/장면
  { id: "f10", content: "무일푼이 되려면 아직 구십칠만원이 더 필요했다.", tags: ["대사", "다정", "빚"], type: "text", createdAt: "2026-02-27" },
  { id: "f11", content: "아버지가 가진 꿈의 주파수는 SBS의 주파수와 잘 만나지 못했다.", tags: ["대사", "아빠"], type: "text", createdAt: "2026-02-27" },
  { id: "f12", content: "내개 사업을 하면서 폭력이라는 수단이 있다는 것을 염두에 두지 않았다니. 이건 요리를 할 때 마늘이라는 게 있다는 것을 모르고 요리한 것과 같았다.", tags: ["대사", "사업"], type: "text", createdAt: "2026-02-02" },
  { id: "f13", content: "대가리가 너무 커서 팔베개 한번 해주면 다음날 토미존수술 해야한다", tags: ["대사", "유머"], type: "text", createdAt: "2026-02-02" },
  { id: "f14", content: "여자는 택시와 같음. 돈 없으면 못 타고 야간엔 프리미엄이 붙어", tags: ["대사"], type: "text", createdAt: "2026-02-02" },
  { id: "f15", content: "달력은 병신들이나 보는 거야.", tags: ["대사"], type: "text", createdAt: "2026-02-02" },
  { id: "f16", content: "원래 안 되는 사람은 저런 데 운을 다 써서 안 되는 거야. 인생이 잘되야지.", tags: ["대사", "엄마"], type: "text", createdAt: "2026-02-02" },
  { id: "f17", content: "햄버거 임신하겠다 / 햄버거도 저정도까지 허락하진 않았을 거 같은데", tags: ["대사", "유머"], type: "text", createdAt: "2026-02-02" },

  // 서현
  { id: "f18", content: "서현이는 하루의 9시부터 6시, 사실은 6시 40분 정도까지를 일하는 데 썼다. 어렵지 않은 내용들을 듣고 어렵지 않은 내용들을 말했다. 그런데 그 일은, 서현이가 더 어려운 일을 할 때보다도 더 진이 빠졌다.", tags: ["서현", "장면"], type: "text", createdAt: "2026-02-27" },
  { id: "f19", content: "서현이는 자기도 모르는 새에 자기에게서 무언가가 빠져나가고, 또 자기가 굳어지고, 어쩌면 더 작아지는 것을 느꼈다. 서현이는 가끔 병원의 빈 침대에 몸을 말아서 쪼그려 눕고 싶었다.", tags: ["서현", "장면"], type: "text", createdAt: "2026-02-27" },
  { id: "f20", content: "뭐 문제가 있으면 다 풀어? 니가 있는 문제를 다 풀었으면 대학을 그렇게 갔겠냐? 쎈수학 문제도 안 푼 새끼가 씨발", tags: ["서현", "대사", "싸움"], type: "text", createdAt: "2026-03-12" },

  // 수박형
  { id: "f21", content: "넌 우리 중에 제일 똑똑하니까 이딴 거 하면서 살면 안 된다.", tags: ["수박형", "대사"], type: "text", createdAt: "2026-03-15" },

  // 매지컬 리얼리즘
  { id: "f22", content: "음악을 틀 때엔 강아지가 돌아와. 그럼 강아지는 어디로 간 걸까? 음악 속으로 들어간 것 아닐까? 아니야. 항상 남아 있어. 살면서 사랑했던 것은 절대 떠나지 않아.", tags: ["매지컬리얼리즘", "강아지"], type: "text", createdAt: "2026-02-02" },
  { id: "f23", content: "핑크색 풍선이라는 걸 키워드로 삼음. 어릴때 핑크색 풍선으로 회피함 힘들면. 여자가 사랑에 빠지면 핑크색 풍선이 나타남.", tags: ["모티프", "핑크풍선"], type: "text", createdAt: "2026-02-02" },
  { id: "f24", content: "사랑에 빠졌을때 손에 든 흰우유가 빨간 딸기우유로 바뀌고 주변의 모든 것이 바뀌는 연출.", tags: ["연출", "매지컬리얼리즘"], type: "text", createdAt: "2026-02-02" },

  // Occupation
  { id: "f25", content: "Occupy는 시간이나 공간을 차지한다는 뜻이고, occupation... 다정이는 자기 인생의 의미는 알 수 없었지만, 인생의 형태가 어떤 것인지는 알게 되었다. 머릿 속의 공간에 무언가를 담으면서 시간을 보내는 것이 인생이다.", tags: ["테마", "Occupation"], type: "text", createdAt: "2026-02-27" },

  // 엔딩
  { id: "f26", content: "나는 이제 두렵지 않다. 아니 사실 존나 두렵다.", tags: ["엔딩", "웹툰"], type: "text", createdAt: "2026-02-02" },
  { id: "f27", content: "처음 눈에 보이는 3개의 글자가 당신의 미래입니다. → 행복이 없음 → 구불구불하게 연결해서 동그라미를 쳐버림.", tags: ["엔딩", "장면"], type: "text", createdAt: "2026-02-02" },
  { id: "f28", content: "Life will only get better.", tags: ["대사", "영어"], type: "text", createdAt: "2026-02-02" },

  // 기타 아이디어
  { id: "f29", content: "학교 선생님 성대모사로 먹고사는 내신선생님", tags: ["아이디어", "인물"], type: "text", createdAt: "2026-02-02" },
  { id: "f30", content: "선생 빡치게하기 포인트제도를 운영", tags: ["아이디어"], type: "text", createdAt: "2026-02-02" },
  { id: "f31", content: "화면전환을 GTA5처럼 함. 그리고 각자 배경음이 이어폰에서, 엠피쓰리에서, 스피커에서 나오면서 시그니처 장면이 나옴", tags: ["연출", "GTA"], type: "text", createdAt: "2026-02-02" },
  { id: "f32", content: "고민하는 장면에서 사우스파크처럼 노래를 넣는데, 한국어로 라이브는 그러니까 애니캐릭터가 부르도록 함", tags: ["연출"], type: "text", createdAt: "2026-02-02" },
  { id: "f33", content: "2024년에 도착한 이상과 정지용은 세련된 건축적 양식의 실현을 보기 위해 도쿄까지 갈 필요가 없다.", tags: ["아이디어"], type: "text", createdAt: "2026-02-02" },
  { id: "f34", content: "서현이 아빠가 '얘 민사고 입학시험 1등했다 전국 1등이었는데' 주변 누구한테든 말하는데 서현이가 '아버지 그만하세요'", tags: ["서현", "장면"], type: "text", createdAt: "2026-03-15" },
  { id: "f35", content: "정우가 다정이한테 차이고 형 죽고 사업 엉망이고 친구들 떠나가서 카페유리창에 머리박음. 친구들이 유리 치워줌.", tags: ["정우", "핵심장면"], type: "text", createdAt: "2026-02-28" },
  { id: "f36", content: "다정이는 '픽사 이력서'를 머릿속에만 가지고 있음. 빈칸 투성이. 정우가 그걸 제본해서 줌. '일단 있어야 채우지.'", tags: ["정우", "다정", "핵심장면"], type: "text", createdAt: "2026-02-11" },
  { id: "f37", content: "편마다 연출을 조금 다르게. 어떤 편에서는 예능처럼, 어떤 편은 리얼다큐처럼.", tags: ["연출"], type: "text", createdAt: "2026-02-02" },
  { id: "f38", content: "다정이가 간 곳은 신림동. 첫키스도.", tags: ["다정", "장소"], type: "text", createdAt: "2026-02-02" },
  { id: "f39", content: "서현과 정우가 싸울때 정우는 '돈 없는 새끼' '의사 따까리 새끼'라고 욕함", tags: ["정우", "서현", "싸움"], type: "text", createdAt: "2026-03-12" },
  { id: "f40", content: "성균관대 나온 학원하다 망해서 치킨집하는 사람 잘 부리는 법을 모르는, 뚱뚱하고 기타를 잘 치는 주성치를 좋아하는 남자 아저씨", tags: ["인물", "아이디어"], type: "text", createdAt: "2026-02-02" },
  { id: "f41", content: "다정은 성의있는 이름. 그러나 착하게 자라라는 컴플렉스를 심어준 것이기도 함.", tags: ["다정", "테마"], type: "text", createdAt: "2026-02-02" },
  { id: "f42", content: "마지막엔 지하철에 계속 타있는 다정. 타고 내리는 수많은 사람들. 도착해서 내리니 집은 신도시가 되어 있고 아무도 없음.", tags: ["엔딩", "장면"], type: "text", createdAt: "2026-02-02" },
];

// ============================================================
// REFS
// ============================================================
export const REFS: RefData[] = [
  { id: "r1", type: "소설", title: "성석제 — 투명인간", note: "나레이션 스타일 참고. 건조+유머. 옴니버스식 나레이션이 한회에 조금씩", tags: ["나레이션", "톤"] },
  { id: "r2", type: "영화", title: "인사이드 아웃", note: "머릿속 연출. ADHD=팽이+DDR, 자폐=도미노. 다정이 픽사 꿈의 계기", tags: ["연출", "픽사"] },
  { id: "r3", type: "영화", title: "라이프 오브 파이", note: "환상 vs 현실 — 둘 다 진실. 할머니 수호신 처리법", tags: ["매지컬리얼리즘"] },
  { id: "r4", type: "게임", title: "GTA5", note: "화면전환 — 각자 배경음+시그니처 장면", tags: ["연출"] },
  { id: "r5", type: "소설", title: "양귀자 — 모순", note: "여자 주인공 결말 참고 (다정이는 다르게)", tags: ["구조"] },
  { id: "r6", type: "영화", title: "아일랜드 마이걸", note: "골든벨 장면 패러디", tags: ["장면"] },
  { id: "r7", type: "소설", title: "체호프 — 귀여운 여인", note: "여자가 남자로 해결되는 구조 참고 (다정이는 다르게)", tags: ["구조"] },
  { id: "r8", type: "음악", title: "Bruno Mars — Leave the Door Open", note: "뮤지컬 씬 핵심곡. 반지하, 하인 분장, 멱살 잡기", tags: ["장면", "음악"] },
  { id: "r9", type: "기타", title: "호메로스 / 서유기", note: "보이지 않는 수호신/기운이 사람들을 돕는 구조", tags: ["매지컬리얼리즘"] },
  { id: "r10", type: "기타", title: "매지컬 리얼리즘", note: "핵심 톤. 환상이 당연하게 서술됨. 마르케스 스타일", tags: ["톤"] },
];

// ============================================================
// 오늘의 미션 — 랜덤으로 하나 제시
// ============================================================
export const DAILY_MISSIONS = [
  "1부 '올바른 하루'에서 다정이가 아침에 세우는 계획을 3줄 써봐.",
  "서현이 병원 퇴근 후 장면을 5문장으로 써봐.",
  "엄마의 조용한 악담 하나 더 만들어봐.",
  "정우가 카페 유리창에 머리 박는 순간, 주변 소리를 묘사해봐.",
  "다정이 지하철에서 역 지나치는 순간 머릿속 7개 채널 중 3개를 써봐.",
  "편의점 어린 다정 장면 — 엄마가 '그냥 가자' 하기 직전 1분을 써봐.",
  "수박형이 서현에게 '이딴 거 하면서 살면 안 된다' 말하는 전후 맥락을 써봐.",
  "핑크색 풍선이 처음 나타나는 순간을 묘사해봐.",
  "다정이가 픽사 채용공고를 보는 장면을 써봐.",
  "'늦더라도 오면 됐지' — 이 말을 하는 사람과 상황을 구체화해봐.",
  "할머니가 다정이 옆에 앉는 장면. 3인칭인데 1인칭에 가깝게 써봐.",
  "정우의 카톡 화면을 묘사해봐. ㅎ 하나만 쓰는 그 대화.",
  "뮤지컬 씬에서 옷/배경이 파리로 바뀌는 순간을 써봐.",
  "서현 아빠가 또 '전국 1등'을 자랑하는 구체적 상황을 하나 써봐.",
  "다정이네 공부방의 냄새, 소리, 빛을 묘사해봐.",
  "Occupation — 인생의 형태에 대한 다정이의 생각을 3문장으로 확장해봐.",
];

// ============================================================
// HELPERS
// ============================================================
export function getRandomFragment(): FragmentData {
  return FRAGMENTS[Math.floor(Math.random() * FRAGMENTS.length)];
}

export function getRandomMission(): string {
  return DAILY_MISSIONS[Math.floor(Math.random() * DAILY_MISSIONS.length)];
}

export function getDailyMission(): string {
  // 날짜 기반으로 고정 (하루에 하나)
  const today = new Date();
  const dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % DAILY_MISSIONS.length;
  return DAILY_MISSIONS[dayIndex];
}

export function getDailyFragment(): FragmentData {
  const today = new Date();
  const dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % FRAGMENTS.length;
  return FRAGMENTS[dayIndex];
}

export function getOverallProgress(): number {
  const total = EPISODES.reduce((sum, ep) => sum + ep.progress, 0);
  return Math.round(total / 16);
}

export function getFilledEpisodes(): number {
  return EPISODES.filter(ep => ep.title || ep.synopsis || ep.scenes.length > 0).length;
}

export function getTotalFragments(): number {
  return FRAGMENTS.length;
}

export function getTotalCharacters(): number {
  return CHARACTERS.length;
}
