"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

export type RFQItem = {
  id: string;
  name: string;
  detail?: string;
};

type RFQState = {
  items: RFQItem[];
  add: (item: RFQItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<RFQState | null>(null);
const KEY = "vkk-rfq";

export function RFQProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RFQItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = useCallback((item: RFQItem) => {
    setItems((prev) => (prev.some((i) => i.id === item.id) ? prev : [...prev, item]));
    setOpen(true);
  }, []);
  const remove = useCallback((id: string) => setItems((prev) => prev.filter((i) => i.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);
  const has = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  return (
    <Ctx.Provider value={{ items, add, remove, clear, has, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useRFQ() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRFQ must be used within RFQProvider");
  return ctx;
}
