// 금지 표현 검사: node scripts/check-copy.mjs
// 브리프 5장 — 의료 효능 / 상담 서비스 오인 / 무거운 통계 / 경쟁사 실명
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const banned = [
  "치료해", "치료 효과", "치료합", "완치", "우울증 개선", "우울증 극복", "불안장애", "효과 입증", "효과가 입증",
  "24시간 상담", "상담사", "심리상담", "AI 상담",
  "자살률", "유병률", "OECD",
  "제타", "Character.AI", "캐릭터챗",
];

const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(f)) files.push(p);
  }
})("src");

let hits = 0;
for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    for (const word of banned) {
      if (line.includes(word)) {
        hits++;
        console.log(`✗ ${file}:${i + 1}  "${word}"  →  ${line.trim()}`);
      }
    }
  });
}
console.log(hits ? `\n금지 표현 ${hits}건 발견` : "✓ 금지 표현 없음");
process.exit(hits ? 1 : 0);
