import { ArrowUpRight } from "lucide-react";

export default function ProgressTile() {
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
      <div className="flex items-start justify-between">
        <h3 className="text-[17px] font-medium text-slate-900">Progress</h3>
        <button className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white transition-colors shadow-sm">
          <ArrowUpRight className="w-5 h-5 text-slate-800" strokeWidth={2} />
        </button>
      </div>

      <div className="flex items-center gap-2.5 mt-1 xl:mt-2">
        <span className="text-[36px] xl:text-[40px] font-light tracking-[-1.5px] text-slate-900 leading-none">
          6.1 h
        </span>
        <span className="text-[11px] xl:text-[12px] leading-tight text-slate-500 font-medium tracking-tight">
          Work Time
          <br />
          this week
        </span>
      </div>

      <div className="flex-1 mt-2 w-full flex flex-col justify-end">
        <div className="relative w-full h-35 px-1 xl:px-2">
          <div className="absolute bottom-12.5 left-0 right-0 z-0 h-0.5">
            <svg width="100%" height="100%">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                strokeDasharray="3 8"
              />
            </svg>
          </div>

          <div className="absolute inset-0 flex justify-between items-end z-10">
            {chartData.map((day, idx) => (
              <div
                key={idx}
                className="relative w-7 h-full flex justify-center"
              >
                <div
                  className={`absolute flex flex-col items-center w-full ${day.bottom}`}
                >
                  {day.showTooltip && (
                    <div className="absolute bottom-[calc(100%+6px)] px-2.5 py-1 bg-[#f8d462] rounded-[10px] text-[11px] font-medium text-slate-900 whitespace-nowrap shadow-sm">
                      5h 23m
                    </div>
                  )}

                  <div
                    className={`w-2 rounded-full ${day.h} ${day.barClass}`}
                  ></div>
                </div>

                <div
                  className={`absolute bottom-0 w-1.5 h-1.5 rounded-full ${day.dotClass}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

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
