import { CheckIcon } from "../../icons/index";

export default function ServiceItem({ text }) {
  return (
    <li className="group flex items-start gap-3 px-2 py-1.5 transition-all duration-300 hover:translate-x-1">
      
      {/* Icon */}
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#c1c1c1] transition-all duration-300 group-hover:bg-[#c1c1c1] group-hover:text-black">
        <CheckIcon />
      </span>

      {/* Text */}
      <span className="text-sm leading-relaxed text-white/55 transition-all duration-300 group-hover:text-white">
        {text}
      </span>

    </li>
  );
}