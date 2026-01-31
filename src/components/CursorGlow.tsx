"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;

    const move = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        raf = 0;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.12), transparent 80%)`,
      }}
    />
  );
}
