"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "@/components/ArrowRight";
import { SurveyLink } from "@/components/CtaLink";
import { track } from "@/lib/analytics";
import { PageEffects } from "@/components/PageEffects";
import { autumnFriends, faq, research, promise, site, footer } from "@/content";

const friends = autumnFriends;

export function Friend({
  index,
  settled = false,
  className = "",
}: {
  index: number;
  settled?: boolean;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`${friends[index].name}${settled ? "의 편안해진 모습" : ""}`}
      className={`friend-sprite ${index === 3 ? "friend-clover" : ""} ${className}`}
      style={{
        backgroundPosition: `${(index * 100) / 3}% ${settled ? 100 : 0}%`,
      }}
    />
  );
}

function FriendCard({
  index,
  onChoose,
}: {
  index: number;
  onChoose: () => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const f = friends[index];
  return (
    <button
      type="button"
      className={`friend-card portrait-flip ${flipped ? "is-flipped" : ""}`}
      aria-pressed={flipped}
      aria-label={`${f.name} · ${f.emotion} · ${flipped ? f.line + " · 다시 누르면 앞면으로 돌아가요" : "눌러서 한마디 듣기"}`}
      onClick={() => {
        if (!flipped) track("monster_card_open", { monster: f.name });
        setFlipped(!flipped);
        onChoose();
      }}
    >
      <div className="portrait-turn">
        <div className="portrait-face portrait-front" aria-hidden={flipped}>
          <div className="friend-card-top">
            <span className="friend-number">0{index + 1}</span>
            <span className="friend-tag">{f.emotion}</span>
          </div>
          <Friend index={index} />
          <p className="friend-name">{f.name}</p>
          <p className="portrait-description">{f.desc}</p>
          <p className="friend-habit">{f.symbol}</p>
          <span className="friend-action">
            이 친구의 이야기 듣기 <ArrowRight />
          </span>
        </div>
        <div className="portrait-face portrait-back" aria-hidden={!flipped}>
          <div className="portrait-chat-heading">
            <Friend index={index} settled />
            <span>{f.name}</span>
          </div>
          <p className="portrait-chat-bubble">{f.line}</p>
          <span className="portrait-return">
            한 번 더 누르면 돌아가요 <ArrowRight />
          </span>
        </div>
      </div>
    </button>
  );
}

export function AutumnLanding() {
  const [selected, setSelected] = useState(0);
  const [settled, setSettled] = useState(false);
  return (
    <>
      <header className="autumn-header">
        <a href="#top" className="wordmark" aria-label="나루 홈">
          나루
        </a>
        <nav aria-label="주 메뉴">
          <a href="#friends">마음 친구들</a>
          <a href="#how">나루 사용법</a>
          <SurveyLink location="header" className="header-cta">
            설문 참여하기 <ArrowRight />
          </SurveyLink>
        </nav>
      </header>
      <main>
        <section id="top" className="autumn-hero">
          <Image
            src="/art/paper-cove-v3.webp"
            alt="조개 속에서 자는 무무, 눈물 한 방울을 흘리는 시울, 보랏빛 바위 틈에 숨은 조아, 친구들을 찾아다니는 짧고 둥근 문어발을 가진 클로버 친구 보리"
            fill
            priority
            sizes="100vw"
            className="hero-landscape"
          />
          <div className="hero-wash" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> 12월 출시 예정 · 함께 만드는 나루
            </p>
            <h1>
              오늘도,
              <br />
              너의 마음과 함께.
            </h1>
            <p className="hero-description">
              말로 다 하지 못한 오늘의 마음.
              <br />
              나를 닮은 작은 친구에게 살짝 건네 보세요.
            </p>
            <div data-cta>
              <SurveyLink location="hero" className="primary-cta">
                3분 설문 참여하기 <ArrowRight />
              </SurveyLink>
              <p className="cta-caption">당신의 이야기가 나루의 시작이 돼요</p>
            </div>
          </div>
          <div className="hero-bottom">
            <span>마음이 잠시 쉬어 가는 곳, 나루</span>
            <a href="#intro" aria-label="나루 소개로 내려가기">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>
        </section>
        <section id="intro" className="intro-section section-wrap">
          <p className="eyebrow">A LITTLE PAUSE FOR YOUR HEART</p>
          <h2>
            마음에도,
            <br className="mobile-break" /> 잠깐 머물 곳이 필요하니까.
          </h2>
          <p className="section-description">
            누구에게 말하기엔 애매하고, 혼자 넘기기엔 버거운 날.
            <br />
            나루는 그 마음을 닮은 친구와 이야기하는 감정 기록 앱이에요.
          </p>
          <div className="empathy-lines">
            <span>오늘은 아무것도 하기 싫어.</span>
            <span>내 마음인데, 잘 모르겠어.</span>
            <span>그냥 누가 들어줬으면 좋겠어.</span>
          </div>
          <p className="intro-closing">어떤 마음으로 와도 괜찮아요.</p>
          <span className="tiny-leaf" aria-hidden>
            ❧
          </span>
        </section>
        <section id="friends" className="friends-section section-wrap">
          <div className="section-top">
            <div>
              <p className="eyebrow">MEET YOUR LITTLE FRIENDS</p>
              <h2 className="friends-title">
                네 마음을 닮은, 네 명의 작은 친구들.
              </h2>
            </div>
            <p className="section-description">
              잘 지내는 날도, 그렇지 않은 날도.
              <br />
              각자의 방식으로 곁에 있어 줄게요.
            </p>
          </div>
          <div className="friend-grid">
            {friends.map((f, i) => (
              <FriendCard
                key={f.name}
                index={i}
                onChoose={() => {
                  setSelected(i);
                  setSettled(false);
                }}
              />
            ))}
          </div>
        </section>
        <section id="how" className="how-section">
          <div className="section-wrap">
            <div className="section-top">
              <div>
                <p className="eyebrow">ONE DAY, THREE LITTLE STEPS</p>
                <h2>
                  거창하지 않아도 괜찮아요.
                  <br />
                  오늘의 마음부터, 하나씩.
                </h2>
              </div>
              <span className="subtle-note">나루 사용 장면 미리보기</span>
            </div>
            <div className="journey-grid">
              <article>
                <div className="demo-panel mood-demo">
                  <div className="demo-label">오늘의 마음</div>
                  <p className="demo-title">지금, 어떤 기분이에요?</p>
                  <div className="mood-options">
                    {friends.map((f, i) => (
                      <button
                        key={f.name}
                        aria-label={`${f.emotion} 선택`}
                        aria-pressed={selected === i}
                        className={selected === i ? "active" : ""}
                        onClick={() => {
                          setSelected(i);
                          setSettled(false);
                          track("monster_card_open", { monster: f.name });
                        }}
                      >
                        <Friend index={i} />
                        <span>{f.emotion}</span>
                      </button>
                    ))}
                  </div>
                  <p className="demo-small">
                    정답은 없어요. 지금 마음에 가까운 쪽으로.
                  </p>
                </div>
                <div className="step-title">
                  <span>01</span>
                  <h3>오늘의 감정 고르기</h3>
                </div>
                <p>
                  지금 내 마음과 닮은 친구를 골라요.
                  <br />
                  이름을 붙이는 것부터 시작해 보세요.
                </p>
              </article>
              <article>
                <div className="demo-panel chat-demo">
                  <div className="chat-heading">
                    <Friend index={selected} />
                    <span>
                      {friends[selected].name}
                      <small>네 이야기를 듣고 있어요</small>
                    </span>
                    <span className="online-dot" />
                  </div>
                  <p className="chat-bubble mine">
                    그냥, 오늘은 좀 지친 것 같아.
                  </p>
                  <p className="chat-bubble">
                    그랬구나. 애써 괜찮은 척하지 않아도 돼.
                  </p>
                  <p className="chat-bubble">오늘은 내가 옆에 있을게.</p>
                  <div className="demo-input">
                    천천히 이야기해도 괜찮아 <span>↑</span>
                  </div>
                </div>
                <div className="step-title">
                  <span>02</span>
                  <h3>친구에게 이야기 건네기</h3>
                </div>
                <p>
                  정리된 말이 아니어도 괜찮아요.
                  <br />
                  친구가 듣고, 기억하고, 공감해 줘요.
                </p>
              </article>
              <article>
                <div className="demo-panel settle-demo">
                  <p className="demo-label">오늘은 이걸로 충분해</p>
                  <Friend index={selected} settled={settled} />
                  <p className="settle-line">
                    {settled
                      ? "마음이 한결 가벼워졌어요."
                      : "우리, 잠깐 쉬어 갈까?"}
                  </p>
                  <button
                    onClick={() => setSettled(!settled)}
                    className="settle-button"
                  >
                    {settled ? "처음 모습 보기" : "이야기를 마친 친구 보기"}{" "}
                    <span>↗</span>
                  </button>
                </div>
                <div className="step-title">
                  <span>03</span>
                  <h3>조금 편안해진 마음 만나기</h3>
                </div>
                <p>
                  대화를 마치면 친구도 편안해져요.
                  <br />
                  오늘의 마음을 작은 기록으로 남겨요.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="memory-section section-wrap">
          <div className="memory-copy">
            <p className="eyebrow">LITTLE MOMENTS, LASTING MEMORIES</p>
            <h2>
              흘려보낸 마음도,
              <br />
              모이면 나의 계절이 돼요.
            </h2>
            <p className="section-description">
              색으로 남는 감정 캘린더.
              <br />
              지난 이야기를 기억하는 친구.
              <br />
              하루하루 쌓이는, 나를 알아 가는 시간.
            </p>
            <div className="memory-note">
              <span>❧</span>
              <p>
                잘 쓴 일기보다,
                <br />
                <strong>솔직한 한마디면 충분해요.</strong>
              </p>
            </div>
          </div>
          <div className="journal">
            <div className="journal-top">
              <span>나의 마음 기록</span>
              <span>NOVEMBER, 2026</span>
            </div>
            <h3>11월의 마음</h3>
            <div className="calendar">
              <div className="weekdays">
                {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="calendar-days">
                {Array.from({ length: 35 }, (_, i) => (
                  <span
                    key={i}
                    className={i < 30 ? "calendar-day" : "empty"}
                    style={
                      i < 30
                        ? {
                            background:
                              friends[(i * 7 + Math.floor(i / 4)) % 4].color,
                          }
                        : {}
                    }
                  >
                    {i < 30 && i + 1}
                    {i < 30 && <i aria-hidden>{["·", "♡", "✧", "⌣"][i % 4]}</i>}
                  </span>
                ))}
              </div>
            </div>
            <div className="journal-bottom">
              <Friend index={3} settled />
              <p>
                어떤 색의 하루든,
                <br />
                <strong>전부 소중한 내 마음이에요.</strong>
              </p>
            </div>
            <span className="sample-label">
              이해를 돕기 위한 기록 예시입니다
            </span>
          </div>
        </section>
        <section className="promise-section section-wrap">
          <p className="eyebrow">OUR PROMISE TO YOU</p>
          <h2>
            곁에 있지만,
            <br />
            오래 붙잡지는 않을게요.
          </h2>
          <div className="promise-grid">
            {promise.items.map((item, i) => (
              <article key={item.title}>
                <span className="promise-icon" aria-hidden>
                  {["◇", "✧", "♡", "◷"][i]}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="disclaimer">{promise.disclaimer}</p>
        </section>
        <section id="survey" className="survey-section">
          <div className="section-wrap survey-layout">
            <div>
              <p className="eyebrow">LET’S MAKE NARU TOGETHER</p>
              <h2>
                나루의 첫 계절을
                <br />
                함께 만들어 주세요.
              </h2>
              <p className="section-description">
                아직 만들어 가는 중인 나루.
                <br />
                당신의 솔직한 이야기를 기다리고 있어요.
              </p>
              <div data-cta>
                <SurveyLink location="survey" className="primary-cta">
                  3분 설문 참여하기 <ArrowRight />
                </SurveyLink>
                <p className="cta-caption">
                  설문 페이지로 연결돼요 · 인터뷰 참여는 선택이에요
                </p>
              </div>
              <div className="survey-friends">
                {friends.map((f, i) => (
                  <Friend key={f.name} index={i} settled />
                ))}
              </div>
            </div>
            <div className="research-details">
              <h3>작은 이야기가 큰 도움이 돼요</h3>
              <ol>
                {research.steps.map((step, i) => (
                  <li key={step.title}>
                    <span>0{i + 1}</span>
                    <div>
                      <h4>
                        {step.title}
                        <small>{step.meta}</small>
                      </h4>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <details>
                <summary>
                  인터뷰에 대해 더 알아보기 <span>＋</span>
                </summary>
                <dl>
                  {research.interview.items.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.text}</dd>
                    </div>
                  ))}
                </dl>
                <ul>
                  {research.interview.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </section>
        <section className="faq-section section-wrap">
          <div>
            <p className="eyebrow">A FEW THINGS TO KNOW</p>
            <h2>
              궁금한 마음에,
              <br />
              답해 드려요.
            </h2>
          </div>
          <div className="faq-list">
            {faq.items.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span>＋</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="autumn-footer">
        <div className="footer-top">
          <a href="#top" className="wordmark">
            나루
          </a>
          <p>오늘도, 너의 마음과 함께.</p>
          <SurveyLink location="footer" className="footer-cta">
            나루 함께 만들기 <ArrowRight />
          </SurveyLink>
        </div>
        <div className="footer-bottom">
          <div>
            <p>{footer.business}</p>
            <p>{footer.copyright}</p>
          </div>
          <nav aria-label="하단 링크">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              인스타그램 ↗
            </a>
            <a href={`mailto:${site.contactEmail}`}>문의하기 ↗</a>
          </nav>
        </div>
      </footer>
      <PageEffects />
    </>
  );
}
