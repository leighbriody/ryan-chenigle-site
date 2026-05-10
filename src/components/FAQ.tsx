"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

const FAQS: FAQItem[] = [
  {
    q: "I have never traded before. Can I still join?",
    a: "Yes. A large portion of the community starts from zero. The education inside is built for people who are learning from scratch, not people who already know what they are doing. You will not be left behind.",
  },
  {
    q: "Will I get trade ideas sent to my phone?",
    a: "Yes. Every trading day you receive real-time gold trade ideas directly to your phone — entry points, direction, and context — so you understand not just what the signal is, but why.",
  },
  {
    q: "Is this only for people who want to go full time?",
    a: "Not at all. Most members are working full-time jobs and fitting this around their schedule. The signals come in throughout the day and all the education is there whenever you have time.",
  },
  {
    q: "What kind of support do I get?",
    a: "You get direct access to me and my team inside the community. This is not a group chat where questions disappear. You ask, you get a real answer — from people who actually understand what they are talking about.",
  },
  {
    q: "What if I do not have much time?",
    a: "The whole system is built to fit around your life. A few minutes in the morning to check the brief, alerts that come straight to your phone, and education you can go through at your own pace. You do not need hours every day.",
  },
  {
    q: "What happens after I join? What does day one look like?",
    a: "You get immediate access to the private channel, the education materials, and the community. Day one, read the welcome guide and get familiar with the layout. From day two you are part of the daily signal feed.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Everything inside is for educational and commentary purposes only. Trading involves risk and past performance does not guarantee future results. Always use money you can afford to lose.",
  },
  {
    q: "How quickly will I see results?",
    a: "This depends entirely on you. Some members see consistent results within weeks. Others take a few months to build the discipline and understanding. There are no shortcuts, but the system works when you work it.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-16 lg:items-start">

          {/* ── Left: sticky heading ── */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.42em] text-gold-600">
              Common Questions
            </p>
            <h2 className="mt-3 font-display text-[30px] font-black leading-[1.04] tracking-[-0.03em] text-foreground sm:text-[38px]">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-[14px] leading-[1.75] text-muted">
              Everything you need to know before getting started. Cannot find
              what you are looking for?{" "}
              <a
                href="#access"
                className="font-medium text-foreground underline decoration-foreground/25 underline-offset-2 transition-colors hover:decoration-foreground/60"
              >
                Reach out directly.
              </a>
            </p>
          </div>

          {/* ── Right: accordion ── */}
          <div className="border-t border-foreground/[0.08]">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-foreground/[0.08]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none sm:py-5"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display text-[13.5px] font-semibold leading-snug tracking-[-0.005em] transition-colors duration-200 sm:text-[14px] ${
            isOpen ? "text-foreground" : "text-foreground/80"
          }`}
        >
          {faq.q}
        </span>
        <span
          aria-hidden
          className={`shrink-0 text-foreground/35 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Answer panel — max-height transition */}
      <div
        style={{
          maxHeight: isOpen ? "480px" : "0",
          overflow: "hidden",
          transition: "max-height 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)",
        }}
      >
        <p className="pb-5 pr-8 text-[13.5px] leading-[1.78] text-muted">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
