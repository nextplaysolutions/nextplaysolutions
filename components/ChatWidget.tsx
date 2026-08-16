"use client";

import { useEffect, useRef, useState } from "react";

/**
 * "Ask NextPlay" — floating text chat, bottom-right on every page.
 *
 * Only rendered when the server has ANTHROPIC_API_KEY set (gated in
 * app/layout.tsx), so the site never shows a chat that can't answer.
 * Backend: app/api/chat/route.ts.
 */

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Ask me anything about NextPlay — what the assessment covers, how it works, or how to get started.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, busy, open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting is client-side boilerplate; the API expects the
        // conversation to start with a user turn.
        body: JSON.stringify({ messages: next.slice(1).slice(-20) }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            data.reply ??
            "Something went wrong — email hello@nextplaysolutions.ai and a founder will answer directly.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Something went wrong — email hello@nextplaysolutions.ai and a founder will answer directly.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="flex flex-col w-[calc(100vw-2.5rem)] max-w-[380px] h-[520px] max-h-[calc(100vh-7rem)] bg-white border border-np-rule shadow-[0_8px_40px_rgba(20,33,61,0.18)]"
          role="dialog"
          aria-label="Ask NextPlay chat"
        >
          <div className="flex items-center justify-between bg-np-navy px-5 py-4">
            <span className="np-label" style={{ color: "var(--np-rust-light)" }}>
              Ask NextPlay
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/70 hover:text-white text-xl leading-none px-1"
            >
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-[0.9375rem] leading-[1.55] max-w-[90%] px-4 py-3 whitespace-pre-wrap ${
                  m.role === "user"
                    ? "ml-auto bg-np-navy text-white"
                    : "bg-np-tint text-np-body"
                }`}
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="bg-np-tint text-np-muted text-[0.9375rem] px-4 py-3 max-w-[90%]">
                Thinking…
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex border-t border-np-rule"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={2000}
              placeholder="Type a question"
              aria-label="Your question"
              className="flex-1 px-5 py-4 text-[0.9375rem] text-np-navy outline-none placeholder:text-np-muted"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="np-label px-5 disabled:opacity-40"
              style={{ color: "var(--np-rust)" }}
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="bg-np-navy text-white px-5 py-3.5 shadow-[0_4px_24px_rgba(20,33,61,0.3)] hover:bg-np-blue transition-colors"
      >
        <span className="np-label" style={{ color: "var(--np-rust-light)" }}>
          {open ? "Close" : "Ask NextPlay"}
        </span>
      </button>
    </div>
  );
}
