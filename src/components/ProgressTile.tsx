import { ArrowUpRight } from "lucide-react";

export default function ProgressTile() {
  // Adjusted bottom values up slightly to create a gap between the lowest bar and the new fixed dot line
  const chartData = [
    {
      label: "S",
      h: "h-[45px]",
      bottom: "bottom-[20px]",
      barClass: "bg-transparent border-[2px] border-dashed border-gray-400/60",
      dotClass: "bg-gray-300",
    },
    {
      label: "M",
      h: "h-[85px]",
      bottom: "bottom-[18px]",
      barClass: "bg-[#2c2d30]",
      dotClass: "bg-[#2c2d30]",
    },
    {
      label: "T",
      h: "h-[50px]",
      bottom: "bottom-[32px]",
      barClass: "bg-[#2c2d30]",
      dotClass: "bg-[#2c2d30]",
    },
    {
      label: "W",
      h: "h-[50px]",
      bottom: "bottom-[20px]",
      barClass: "bg-[#2c2d30]",
      dotClass: "bg-[#2c2d30]",
    },
    {
      label: "T",
      h: "h-[75px]",
      bottom: "bottom-[20px]",
      barClass: "bg-[#2c2d30]",
      dotClass: "bg-[#2c2d30]",
    },
    {
      label: "F",
      h: "h-[95px]",
      bottom: "bottom-[12px]",
      barClass: "bg-[#f8d462]",
      dotClass: "bg-[#f8d462]",
      showTooltip: true,
    },
    {
      label: "S",
      h: "h-[45px]",
      bottom: "bottom-[20px]",
      barClass: "bg-transparent border-[2px] border-dashed border-gray-400/60",
      dotClass: "bg-gray-300",
    },
  ];

  return (
    <div className="col-span-1 aspect-square rounded-[2rem] bg-white/40 backdrop-blur-sm border border-white/50 p-5 xl:p-6 flex flex-col shadow-sm">
      {/* Header Section */}
      <div className="flex items-start justify-between">
        <h3 className="text-[17px] font-medium text-slate-900">Progress</h3>
        <button className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center hover:bg-white transition-colors shadow-sm">
          <ArrowUpRight className="w-4 h-4 text-slate-800" strokeWidth={2} />
        </button>
      </div>

      {/* Subheader Section */}
      <div className="flex items-center gap-2.5 mt-1 xl:mt-2">
        <span className="text-[36px] xl:text-[40px] font-light tracking-[-1.5px] text-slate-900 leading-none">
          6.1 h
        </span>
        <span className="text-[11px] xl:text-[12px] leading-[1.25] text-slate-500 font-medium tracking-tight">
          Work Time
          <br />
          this week
        </span>
      </div>

      {/* Chart Area */}
      <div className="flex-1 mt-2 w-full flex flex-col justify-end">
        {/* Graph Container */}
        <div className="relative w-full h-[140px] px-1 xl:px-2">
          {/* The Horizontal Dotted Baseline 
              Raised to bottom-[50px] to accommodate the new higher bar positions 
          */}
          {/* The Custom Horizontal Dotted Baseline */}
          <div className="absolute bottom-[50px] left-0 right-0 z-0 h-[2px]">
            <svg width="100%" height="100%">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#9ca3af" /* Tailwind gray-400 */
                strokeWidth="1.5"
                strokeOpacity="0.8"
                strokeDasharray="3 8" /* THIS IS YOUR MAGIC CONTROL */
              />
            </svg>
          </div>

          {/* Render the Bars and Dots */}
          <div className="absolute inset-0 flex justify-between items-end z-10">
            {chartData.map((day, idx) => (
              <div
                key={idx}
                className="relative w-7 h-full flex justify-center"
              >
                {/* 1. The Floating Pill Bar (Positions dictate strictly by day.bottom) */}
                <div
                  className={`absolute flex flex-col items-center w-full ${day.bottom}`}
                >
                  {/* Tooltip Badge */}
                  {day.showTooltip && (
                    <div className="absolute bottom-[calc(100%+6px)] px-2.5 py-1 bg-[#f8d462] rounded-[10px] text-[11px] font-medium text-slate-900 whitespace-nowrap shadow-sm">
                      5h 23m
                    </div>
                  )}

                  {/* Vertical Pill Bar */}
                  <div
                    className={`w-2 rounded-full ${day.h} ${day.barClass}`}
                  ></div>
                </div>

                {/* 2. The Fixed Baseline Circle
                    Decoupled from the bar's floating wrapper.
                    Pinned strictly to absolute bottom-0 to create that perfect straight imaginary line.
                */}
                <div
                  className={`absolute bottom-0 w-[6px] h-[6px] rounded-full ${day.dotClass}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* X-Axis Labels positioned neatly below the graph */}
        <div className="flex justify-between items-center w-full px-1 xl:px-2 mt-2">
          {chartData.map((day, idx) => (
            <div key={idx} className="w-7 flex justify-center">
              <span className="text-[11px] text-slate-400 font-medium">
                {day.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
