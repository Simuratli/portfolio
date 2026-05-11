"use client";

import { useState, useRef, useEffect } from "react";
import { IconX, IconSend, IconSparkles } from "@/assets/icons";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hey! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    // placeholder reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I'll get back to you on that shortly!",
        },
      ]);
    }, 600);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      {/* Chat box */}
      <div
        className={`absolute bottom-full mb-3 right-0 w-[calc(100vw-3rem)] sm:w-96 h-[28rem] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-out origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span className="text-sm font-semibold text-gray-800">Chat</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <IconX className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2 scroll-smooth">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <span
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                  msg.role === "user"
                    ? "bg-gray-900 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Preset questions */}
        <div className="flex flex-wrap gap-1.5 px-3 pt-2 pb-1">
          {["Who are you?", "Your experience", "Best projects"].map((q) => (
            <button
              key={q}
              onClick={() => {
                setMessages((prev) => [...prev, { role: "user", text: q }]);
                setTimeout(() => {
                  setMessages((prev) => [
                    ...prev,
                    { role: "assistant", text: "I'll get back to you on that shortly!" },
                  ]);
                }, 600);
              }}
              className="text-xs px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors whitespace-nowrap"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-3 border-t border-gray-100">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message…"
            className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 outline-none focus:border-gray-400 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            aria-label="Send"
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-900 text-white disabled:opacity-30 hover:bg-gray-700 active:scale-95 transition-all"
          >
            <IconSend className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center justify-center"
      >
        {open ? (
          <IconX className="w-5 h-5 text-gray-700" />
        ) : (
          <IconSparkles className="w-5 h-5 text-gray-700" />
        )}
      </button>
    </div>
  );
}
