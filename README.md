# 나루(Naru) 랜딩페이지 — 설문·인터뷰 참여자 모집

Next.js 15 (App Router) + Tailwind CSS v4 · Vercel

- 목적: **수요조사 설문(구글 폼) 참여 유도 + 응답자 중 일부에게 인터뷰 요청 안내**
- 주색 **연보라**, 포인트 **연노랑**, 나머지 모두 파스텔 톤 (`src/app/globals.css` 의 `@theme` 토큰)
- 헤드라인 폰트 Jua, 본문 Pretendard · 모바일(375px) 우선

## 로컬 실행

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000
```

- `npm run check:copy` — 금지 표현(의료 효능·상담 오인·무거운 통계·경쟁사 실명) 검사
- `npm run build` — 프로덕션 빌드 확인

## 구글 폼 연결

`.env.local`(또는 Vercel 환경변수)에 `NEXT_PUBLIC_SURVEY_URL=https://forms.gle/...` 를 넣으면 모든 "설문 참여하기" 버튼이 새 탭으로 구글 폼을 열어요.
비워두면 버튼은 페이지 안의 설문·인터뷰 안내 섹션(`#survey`)으로 이동해요.

구글 폼에 넣어 두면 좋은 항목:
- 인터뷰 참여 의향 (예/아니요)
- 연락처 (인터뷰 참여 희망자만, 선택 입력)
- 개인정보 수집·이용 동의 — 예: "[필수] 인터뷰 연락을 위해 연락처를 수집하며, 조사 종료 후 즉시 파기합니다."
- 유입 경로 (인스타 / 쇼츠 / 에브리타임 / 지인 등) — 채널별 반응 비교용

## 환경변수

| 이름 | 필수 | 설명 |
|---|---|---|
| `NEXT_PUBLIC_SURVEY_URL` | ✅ | 설문 구글 폼 링크 |
| `NEXT_PUBLIC_SITE_URL` | ✅ | 배포 도메인 (OG 이미지 절대경로) |
| `NEXT_PUBLIC_GA_ID` | 선택 | GA4 측정 ID. 없으면 Vercel Analytics만 사용 |

## 구조

```
src/content.ts                 ← 모든 카피. 문구 수정/헤드라인 A·B 교체(HERO_VARIANT)는 여기서만
src/app/page.tsx               ← 섹션 순서
src/components/sections/       ← Hero, Empathy, HowItWorks, Monsters, Features, Trust,
                                  MonsterTest(비활성), Survey(설문·인터뷰 안내), Faq, Footer
src/components/CtaLink.tsx     ← SurveyLink: 모든 설문 버튼 (클릭 위치 기록)
src/components/Monster.tsx     ← 감정 몬스터 placeholder SVG
src/components/Naru.tsx        ← 대표 캐릭터 나루 placeholder SVG
src/app/opengraph-image.tsx    ← OG 이미지 1200×630 자동 생성
```

## 캐릭터 이미지 교체

실제 캐릭터 PNG를 `public/monsters/{key}.png` 에 넣고 `content.ts` 의 `monsters[].image` 에 경로를 적으면 SVG 대신 사용돼요.
현재 공개 4종 — key: `lethargy`(무무) `gloom`(시울) `anger`(부아) `calm`(보리)
추후 추가용 SVG도 준비돼 있어요: `anxiety` `joy` `confusion` (content.ts 의 monsters 배열에 추가하면 노출)

## 분석 이벤트

`cta_click`(location: header/hero/sticky/survey/footer) · `monster_card_open` · `faq_open` · `scroll_75`
> Vercel Analytics 커스텀 이벤트는 Pro 플랜 이상에서 집계돼요. Hobby 플랜이면 GA4 ID를 넣으세요.

## 공개 전 확인할 TODO

- [x] 구글 폼 링크 연결 (기본값: content.ts, `NEXT_PUBLIC_SURVEY_URL`로 덮어쓰기 가능)
- [ ] `content.ts` — 설문 소요 시간(현재 "약 3분"), 인터뷰 시간·방식(현재 "30분 내외, 온라인")
- [ ] `content.ts` — 인스타그램 URL, 문의 이메일, 사업자 정보
- [ ] 카카오톡 공유 미리보기 확인 (배포 후 카카오 디버거로 캐시 초기화)
