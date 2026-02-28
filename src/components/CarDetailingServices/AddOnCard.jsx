import { useState } from "react";
import { PlusIcon } from "../../icons/index";

export default function AddOnCard({ Icon, name, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={`group flex w-full items-start gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
        open
          ? "border-[#c1c1c1]/50 bg-[#c1c1c1]/[0.08]"
          : "border-white/10 bg-white/[0.03] hover:border-[#c1c1c1]/25 hover:bg-white/[0.05]"
      }`}
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
        open ? "bg-[#c1c1c1] text-black scale-105" : "bg-white/5 text-[#c1c1c1]"
      }`}>
        <Icon />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className={`text-sm font-semibold transition-colors duration-200 ${open ? "text-[#c1c1c1]" : "text-white"}`}>
            {name}
          </p>
          <span className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45 text-[#c1c1c1]" : "text-white/30"}`}>
            <PlusIcon />
          </span>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-20 opacity-100 mt-1.5" : "max-h-0 opacity-0"}`}>
          <p className="text-xs leading-relaxed text-white/55">{desc}</p>
        </div>

        {!open && (
          <p className="mt-0.5 text-xs text-white/40 truncate">{desc}</p>
        )}
      </div>
    </button>
  );
}