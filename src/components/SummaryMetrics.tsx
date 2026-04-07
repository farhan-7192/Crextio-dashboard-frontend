import { Users, UserPlus, Monitor } from "lucide-react";

export default function SummaryMetrics() {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center justify-end h-full mb-1">
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400/50 bg-white/20 backdrop-blur-sm mb-1.5">
            <Users className="w-3.5 h-3.5 text-slate-700" strokeWidth={2} />
          </div>
          <span className="text-[12px] font-medium text-slate-800 tracking-wide">
            Employe
          </span>
        </div>
        <span className="text-[64px] leading-none font-extralight tracking-[-3px] text-slate-900">
          78
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center justify-end h-full mb-1">
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400/50 bg-white/20 backdrop-blur-sm mb-1.5">
            <UserPlus className="w-3.5 h-3.5 text-slate-700" strokeWidth={2} />
          </div>
          <span className="text-[12px] font-medium text-slate-800 tracking-wide">
            Hirings
          </span>
        </div>
        <span className="text-[64px] leading-none font-extralight tracking-[-3px] text-slate-900">
          56
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center justify-end h-full mb-1">
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400/50 bg-white/20 backdrop-blur-sm mb-1.5">
            <Monitor className="w-3.5 h-3.5 text-slate-700" strokeWidth={2} />
          </div>
          <span className="text-[12px] font-medium text-slate-800 tracking-wide">
            Projects
          </span>
        </div>
        <span className="text-[64px] leading-none font-extralight tracking-[-3px] text-slate-900">
          203
        </span>
      </div>
    </div>
  );
}
