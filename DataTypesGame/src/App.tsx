import React from "react";
void React; // ← silences TS6133 without config changes
import ButtonOnlyTracingQuest from "./ButtonOnlyTracingQuest";

export default function App() {
  return (
    <>
      {/* Tailwind test box */}
      <div className="p-4 m-4 rounded-xl bg-emerald-500 text-white">
        Tailwind OK
      </div>

      {/* Your game */}
      <ButtonOnlyTracingQuest />
    </>
  );
}
