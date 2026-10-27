import { features } from "@/content";

/**
 * S7. 내 감정 몬스터 테스트 (2차 배포 예정)
 * - content.ts 의 features.monsterTest 를 true 로 바꾸면 노출돼요.
 * - 구현 계획: 5문항 → 몬스터 중 1마리 결과 + 9:16 공유 카드 → 결과 화면에 설문 참여 버튼(SurveyLink) 재노출.
 */
export function MonsterTest() {
  if (!features.monsterTest) return null;
  return (
    <section aria-label="내 감정 몬스터 테스트" className="px-4 py-16">
      {/* TODO: 테스트 UI */}
    </section>
  );
}
