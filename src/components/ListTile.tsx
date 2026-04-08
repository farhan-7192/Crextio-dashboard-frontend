import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";

const DottedDivider = () => (
  <div className="w-full h-px opacity-60">
    <svg width="100%" height="100%">
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeDasharray="2 7" 
      />
    </svg>
  </div>
);

export default function ListTile() {
  return (
    <div className="col-span-1 aspect-square rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-black/5 p-6 flex flex-col justify-between shadow-xl">
      <div className="w-full flex justify-between items-center py-1 cursor-pointer group">
        <span className="text-[16px] font-medium text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors">
          Pension contributions
        </span>
        <ChevronDown
          className="w-4.5 h-4.5 text-slate-600"
          strokeWidth={2}
        />
      </div>

      <DottedDivider />

      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between items-center py-1 cursor-pointer">
          <span className="text-[16px] font-medium text-slate-800 tracking-tight">
            Devices
          </span>
          <ChevronUp
            className="w-4.5 h-4.5 text-slate-600"
            strokeWidth={2}
          />
        </div>

        <div className="flex items-center justify-between mt-3 mb-1 pl-1 pr-1">
          <div className="flex items-center gap-4">
            <img
              src="/macbook.png"
              alt="MacBook Air"
              className="w-20 object-contain drop-shadow-sm"
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-medium text-slate-900 leading-none">
                MacBook Air
              </span>
              <span className="text-[13px] font-medium text-slate-500 leading-none">
                Version M1
              </span>
            </div>
          </div>

          <button className="text-slate-500 hover:text-slate-800 transition-colors p-1">
            <MoreVertical className="w-4.5 h-4.5" strokeWidth={2} />
          </button>
        </div>
      </div>

      <DottedDivider />

      <div className="w-full flex justify-between items-center py-1 cursor-pointer group">
        <span className="text-[16px] font-medium text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors">
          Compensation Summary
        </span>
        <ChevronDown
          className="w-4.5 h-4.5 text-slate-600"
          strokeWidth={2}
        />
      </div>

      <DottedDivider />

      <div className="w-full flex justify-between items-center py-1 cursor-pointer group">
        <span className="text-[16px] font-medium text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors">
          Employee Benefits
        </span>
        <ChevronDown
          className="w-4.5 h-4.5 text-slate-600"
          strokeWidth={2}
        />
      </div>

      <DottedDivider />
    </div>
  );
}
