export default function StatsBar() {
  const pillBaseClass =
    "h-[48px] rounded-full px-4 flex items-center shadow-inner transition-colors";

  return (
    <div className="flex items-center gap-1.5 pt-5 w-full relative">

      <div className="w-[9%] flex flex-col gap-1 items-start">
        <span className="text-[13px] font-medium text-slate-800 pb-1.5 pl-0.5">
          Interviews
        </span>
        <div className={`w-full ${pillBaseClass} bg-[#2c2d30] text-white`}>
          <span className="text-[14px] font-medium">15%</span>
        </div>
      </div>

      <div className="w-[7%] flex flex-col gap-1 items-start">
        <span className="text-[13px] font-medium text-slate-800 pb-1.5 pl-0.5">
          Hired
        </span>
        <div className={`w-full ${pillBaseClass} bg-[#f8d462] text-slate-900`}>
          <span className="text-[14px] font-medium">15%</span>
        </div>
      </div>

      <div className="w-[25%] flex flex-col gap-1 items-start">
        <span className="text-[13px] font-medium text-slate-800 pb-1.5 pl-0.5">
          Project time
        </span>
        <div
          className={`w-full ${pillBaseClass} border border-gray-400/40 bg-white/20 backdrop-blur-sm text-slate-900`}
        >
          <span className="text-[14px] font-medium">60%</span>
        </div>
      </div>

      <div className="w-[7%] flex flex-col gap-1 items-start">
        <span className="text-[13px] font-medium text-slate-800 pb-1.5 pl-0.5">
          Output
        </span>
        <div
          className={`w-full ${pillBaseClass} border border-gray-400/40 bg-white/20 backdrop-blur-sm text-slate-900`}
        >
          <span className="text-[14px] font-medium">10%</span>
        </div>
      </div>
    </div>
  );
}
