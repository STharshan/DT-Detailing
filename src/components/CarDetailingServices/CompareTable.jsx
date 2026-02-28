import { CheckIcon, MinusIcon }  from "../../icons/index";
import { compareRows } from "../../data/index";

export default function CompareTable() {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider uppercase text-white/35">Feature</th>
            <th className="px-4 py-4 text-center text-xs font-semibold tracking-wider uppercase text-white/35">Full Interior Reset</th>
            <th className="px-4 py-4 text-center text-xs font-semibold tracking-wider uppercase text-[#c1c1c1]">Showroom Full Detail</th>
            <th className="px-4 py-4 text-center text-xs font-semibold tracking-wider uppercase text-white/35">Paint Enhancement</th>
          </tr>
        </thead>
        <tbody>
          {compareRows.map((row, i) => (
            <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.012]" : ""}`}>
              <td className="px-6 py-3 text-sm text-white/65">{row.f}</td>
              {[row.t1, row.t2, row.t3].map((v, j) => (
                <td key={j} className="px-4 py-3 text-center">
                  {v
                    ? <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#c1c1c1]/15 text-[#c1c1c1]"><CheckIcon /></span>
                    : <span className="text-white/15"><MinusIcon /></span>
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}