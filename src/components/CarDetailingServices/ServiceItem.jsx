import { CheckIcon } from "../../icons/index";

export default function ServiceItem({ text }) {
  return (
    <li className="flex items-start gap-3 px-2 py-1.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#c1c1c1]">
        <CheckIcon />
      </span>
      <span className="text-sm leading-relaxed text-white/55">{text}</span>
    </li>
  );
}