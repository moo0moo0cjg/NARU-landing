/**
 * 나루(Naru) 랜딩페이지 카피 모음
 * - 문구는 이 파일에서만 수정하세요. 컴포넌트 코드는 건드리지 않아도 됩니다.
 * - 금지 표현(의료 효능·상담 서비스 오인·무거운 통계·경쟁사 실명)은 넣지 마세요.
 *   → `npm run check:copy` 로 검사할 수 있어요.
 */

export type EmotionKey =
  | "lethargy"
  | "gloom"
  | "anxiety"
  | "anger"
  | "joy"
  | "calm"
  | "confusion";

/** 히어로 헤드라인 A/B — 여기서 바꾸면 바로 반영돼요. */
export const HERO_VARIANT: "A" | "B" = "A";

export const site = {
  name: "나루",
  nameEn: "Naru",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://naru.example.com",
  title: "나루 — 내 감정이 몬스터 친구가 되는 감정 기록 앱",
  description:
    "상담은 부담되고, 일기는 작심삼일이라면. 지금 기분을 고르면, 그 마음을 닮은 몬스터가 이야기를 들어줘요. 짧은 설문으로 나루를 함께 만들어 주세요.",
  ogHeadline: "내 감정이\n친구가 되는 시간", // OG 이미지는 줄바꿈(\n) 위치를 직접 지정
  instagram: "https://instagram.com/naru.app", // TODO: 실제 계정으로 교체
  contactEmail: "hello@naru.app", // TODO: 실제 문의 메일로 교체
  /** 구글 폼 링크 — 비워두면 버튼이 페이지 안의 설문 안내 섹션으로 이동해요 */
  surveyUrl: process.env.NEXT_PUBLIC_SURVEY_URL ?? "", // TODO: 구글 폼 링크 연결
};

export const features = {
  /** S7 내 감정 몬스터 테스트 — 2차 배포 때 true로 */
  monsterTest: false,
};

export const nav = {
  cta: "설문 참여하기",
};

export const hero = {
  badge: "12월 출시 예정 · 설문 참여자 모집 중",
  headline: {
    A: "오늘 마음,\n몬스터 친구에게\n털어놔 보실래요?",
    B: "내 감정이\n친구가 되는 시간",
  },
  sub: "상담은 부담되고, 일기는 작심삼일이라면.\n지금 기분을 고르면, 그 마음을 닮은 몬스터가 이야기를 들어줘요.",
  bubble: "오늘도 수고했어요",
  naruAlt: "구름 위에 앉아 웃고 있는 하얀 구름 캐릭터 나루",
  cta: "설문 참여하기",
  ctaMeta: "약 3분 소요", // TODO: 실제 설문 소요 시간으로 수정
  note: "응답해 주신 분들 중 몇 분께는 인터뷰를 따로 요청드릴 수 있어요.",
};

export const empathy = {
  headline: "이런 날, 있지 않나요?",
  cards: [
    { icon: "bubble", text: "누구한테 말하긴 애매한데,\n혼자 삭이긴 버거운 날" },
    { icon: "phone", text: "일기 앱은 깔았는데…\n3일째부터 안 열게 되는 날" },
    { icon: "tangle", text: "상담까지는 아닌 것 같은데,\n마음이 정리가 안 되는 날" },
  ] as const,
};

export const how = {
  eyebrow: "이렇게 써요",
  headline: "하루 한 번, 세 걸음이면 충분해요",
  steps: [
    {
      title: "오늘의 감정 고르기",
      body: "감정 몬스터 중 지금 내 마음과 닮은 아이를 골라요.",
      footnote: "지금 내 감정에 스스로 이름을 붙이는 것만으로도 마음이 조금 정리돼요.",
    },
    {
      title: "몬스터와 이야기하기",
      body: "몬스터가 들어주고, 공감하고, 때로는 같이 화내줘요. 충분하면 \"오늘은 이걸로 충분해\"를 눌러 주세요.",
      // 채팅 예시는 친구처럼 반말
      chat: [
        { from: "monster", text: "뭐?? 걔가 진짜 그랬다고?? 내가 다 화나네!" },
        { from: "me", text: "그치? 나만 이상한 거 아니지…" },
        { from: "monster", text: "전혀! 그 상황이면 나라도 속상할 것 같은데!" },
      ],
      enough: "오늘은 이걸로 충분해",
    },
    {
      title: "마음이 정리되면, 몬스터도 편안해져요",
      body: "불안정했던 몬스터가 대화가 끝나면 차분해져요. 그 모습이 곧 내 마음이에요.",
      before: "대화 전",
      after: "대화 후",
    },
  ],
};

/**
 * 1차 공개 몬스터 4종 (무기력·우울·분노·평온). 나머지 감정은 추후 추가 예정.
 */
export const monsters: {
  key: EmotionKey;
  emotion: string;
  name: string;
  line: string;
  style: string;
  /** /public/monsters/{key}.png 를 넣으면 SVG 대신 그 이미지를 써요 */
  image?: string;
}[] = [
  {
    key: "lethargy",
    emotion: "무기력",
    name: "무무",
    line: "아무것도 안 해도 괜찮아. 오늘은 그냥 같이 늘어져 있자.",
    style: "그냥 곁에서 같이 늘어져 줘요",
  },
  {
    key: "gloom",
    emotion: "우울",
    // 시울: 눈시울·입시울의 가장자리
    name: "시울",
    line: "말 안 해도 돼. 네 옆에 있을게.",
    style: "말없이 옆에 있어 줘요",
  },
  {
    key: "anger",
    emotion: "분노",
    // 부아: 노엽거나 분한 마음 (부아가 나다)
    name: "부아",
    line: "뭐?? 걔가 그랬다고?? 내가 다 화나네!",
    style: "먼저 같이 화내 줘요",
  },
  {
    key: "calm",
    emotion: "평온",
    name: "보라",
    line: "지금 이 편안함, 천천히 느껴 봐.",
    style: "편안한 순간을 오래 기억하게 도와요",
  },
];

export const monsterSection = {
  eyebrow: "감정 몬스터",
  headline: "당신의 마음을 닮은 친구들",
  sub: "몬스터마다 위로하는 방식이 달라요. 카드를 눌러 한마디를 들어 보세요.",
  tapHint: "눌러서 한마디 듣기",
};

export const featureSection = {
  eyebrow: "그리고 이런 것도",
  headline: "기록이 쌓일수록, 더 다정해져요",
  items: [
    {
      key: "heatmap",
      title: "감정 히트맵",
      body: "한 달의 마음이 색으로 남아요. 다꾸하듯 모아 보는 나만의 감정 캘린더.",
    },
    {
      key: "memory",
      title: "기억하는 친구",
      body: "지난번에 털어놓은 이야기, 몬스터가 기억하고 먼저 물어봐요.",
      // 몬스터 말풍선은 친구처럼 반말
      bubbles: [
        { monster: "gloom", text: "지난주에 말한 면접 어떻게 됐어? 계속 궁금했어!" },
        { monster: "lethargy", text: "어제 잠 잘 못 잤다고 했잖아. 오늘은 좀 푹 잤어?" },
        { monster: "calm", text: "저번에 말한 전시회 다녀왔어? 어땠는지 얘기해 줘!" },
      ],
    },
    {
      key: "grow",
      title: "함께 자라는 몬스터",
      body: "다양한 감정을 마주할수록, 몬스터에게 그 색이 새겨져요.",
    },
  ] as const,
};

export const promise = {
  eyebrow: "우리가 지키는 약속",
  headline: "오래 붙잡지 않을게요.\n하루 한 번이면 충분해요.",
  items: [
    { icon: "lock", title: "나만 보는 기록", body: "감정 기록은 민감정보로 보호하고, 나만 볼 수 있어요." },
    { icon: "bot", title: "AI 친구예요", body: "몬스터는 AI예요. 숨기지 않아요." },
    { icon: "hands", title: "힘든 순간엔 함께 찾아요", body: "위기 신호가 보이면 전문 상담 기관을 안내해요." },
    { icon: "timer", title: "과하게 쓰지 않게", body: "오래 쓰게 만드는 앱이 아니라, 마음이 편해지면 닫아도 되는 앱이에요." },
  ] as const,
  disclaimer: "나루는 의료·상담 서비스가 아니며, 전문적인 진단이나 치료를 대신하지 않아요.",
};

export const research = {
  eyebrow: "함께 만들어 주세요",
  headline: "나루를 함께 만들어 갈\n분들을 찾고 있어요",
  sub: "나루는 아직 만들어 가는 중인 앱이에요.\n여러분의 솔직한 이야기가 나루를 더 다정하게 만들어요.",
  steps: [
    {
      title: "설문 참여",
      meta: "약 3분", // TODO: 실제 소요 시간
      body: "요즘 마음을 어떻게 돌보고 계신지, 어떤 기능이 있으면 좋을지 여쭤봐요.",
    },
    {
      title: "인터뷰 요청",
      meta: "일부 응답자",
      body: "설문에 인터뷰 참여 의사를 남겨 주신 분들 중 몇 분께 개별로 연락드려요.",
    },
    {
      title: "1:1 인터뷰",
      meta: "30분 내외", // TODO: 실제 인터뷰 시간·방식
      body: "편한 시간에 온라인으로, 감정을 기록하고 정리하는 경험에 대해 편하게 이야기 나눠요.",
    },
  ],
  interview: {
    title: "인터뷰 안내",
    items: [
      { label: "누구에게", text: "설문에서 인터뷰 참여에 동의하고 연락처를 남겨 주신 분 중 일부" },
      { label: "어떻게", text: "남겨 주신 연락처로 개별 연락 후, 원하시는 일정에 온라인(화상·전화)으로 진행해요" },
      { label: "얼마나", text: "30분 내외" },
      { label: "무엇을", text: "평소 감정을 다루는 방법, 기록 습관, 나루에 대한 첫인상 등을 여쭤봐요" },
    ],
    notes: [
      "연락을 받으셔도 참여 여부는 자유롭게 정하실 수 있어요.",
      "어려운 질문에는 답하지 않으셔도 괜찮아요.",
      "남겨 주신 연락처는 인터뷰 연락에만 쓰고, 조사가 끝나면 바로 파기해요.",
      "인터뷰 내용은 서비스 개선에만 쓰이며, 개인을 알아볼 수 없도록 정리해요.",
    ],
  },
  cta: "설문 참여하기",
  ctaNote: "구글 폼으로 연결돼요",
};

export const faq = {
  headline: "자주 묻는 질문",
  items: [
    {
      q: "무료인가요?",
      a: "기본 기능은 무료예요. 더 깊은 대화와 기록 보관은 구독으로 제공할 예정이에요(12월 출시).",
    },
    {
      q: "상담 앱인가요?",
      a: "아니요. 상담 이전에 내 마음을 정리하는 감정 기록 앱이에요. 전문적인 진단이나 치료를 대신하지 않아요.",
    },
    {
      q: "내 기록은 안전한가요?",
      a: "감정 기록은 민감정보로 보호하고, 나만 볼 수 있어요. 몬스터가 AI라는 것도 숨기지 않고, 위기 신호가 보이면 전문 상담 기관을 안내해요.",
    },
    {
      q: "설문은 얼마나 걸리나요?",
      a: "3분 정도면 충분해요. 답하기 어려운 질문은 건너뛰셔도 괜찮아요.",
    },
    {
      q: "인터뷰는 꼭 해야 하나요?",
      a: "아니요. 설문에서 인터뷰 참여를 원하신 분들 중 일부께만 연락드리고, 연락을 받으셔도 참여 여부는 자유롭게 정하실 수 있어요.",
    },
    {
      q: "언제 출시하나요?",
      a: "2026년 12월이에요. 웹에서 먼저 열리고, 홈 화면에 추가하면 앱처럼 쓸 수 있어요.",
    },
  ],
};

export const footer = {
  ctaHeadline: "나루를 함께\n만들어 주실래요?",
  cta: "설문 참여하기",
  ctaSub: "짧은 설문 하나가 큰 힘이 돼요. 응답자 중 몇 분께는 인터뷰를 요청드릴 수 있어요.",
  links: {
    instagram: "인스타그램",
    contact: "문의하기",
  },
  business: "사업자 정보는 11월 등록 후 업데이트될 예정이에요.", // TODO: 사업자 등록 후 교체
  copyright: "© 2026 Naru. All rights reserved.",
};
