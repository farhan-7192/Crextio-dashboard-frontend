import React from "react";
import { Play, Pause, ArrowUpRight, Clock } from "lucide-react";

const TimeTrackerTile: React.FC = () => {
  const svgSize = 160;
  const radius = 70;
  const cx = svgSize / 2;
  const cy = svgSize / 2;
  const strokeWidthBackground = 2.5;
  const strokeWidthProgress = 8;
  const circumference = 2 * Math.PI * radius;

  const progressPercentage = 0.67;
  const dashLength = circumference * progressPercentage;
  const gapLength = circumference - dashLength;

  return (
    <div className="bg-white/40 backdrop-blur-sm border border-black/5 rounded-[2.5rem] p-5 flex flex-col items-center gap-6 shadow-xl aspect-square col-span-1">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[20px] font-medium text-slate-800 tracking-tight">
          Time tracker
        </h3>
        <button className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-400/40 bg-white/30 backdrop-blur-sm shadow-inner hover:bg-white/50 transition">
          <ArrowUpRight className="h-5 w-5 text-slate-600" />
        </button>
      </div>

      <div className="grow flex justify-center items-center">
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="relative"
        >
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="#9ca3af"
            strokeWidth={strokeWidthBackground}
            strokeOpacity="0.8"
            strokeDasharray="1 5"
          />

          <g transform={`rotate(-90 ${cx} ${cy})`}>
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke="#ffcb4a"
              strokeWidth={strokeWidthProgress}
              strokeLinecap="round"
              strokeDasharray={`${dashLength} ${gapLength}`}
            />
          </g>

          <text
            x={cx}
            y={cy - strokeWidthProgress / 2 + 5}
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-[32px] font-medium text-slate-900"
          >
            02:35
          </text>
          <text
            x={cx}
            y={cy - strokeWidthProgress / 2 + 25}
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-xs text-slate-500"
          >
            Work Time
          </text>
        </svg>
      </div>

      <div className="w-full flex justify-between items-center mt-auto">
        <div className="flex gap-2">
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300/60 bg-white/30 backdrop-blur-sm shadow-sm hover:bg-white/50 transition">
            <Play className="h-4 w-4 text-slate-600" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300/60 bg-white/30 backdrop-blur-sm shadow-sm hover:bg-white/50 transition">
            <Pause className="h-4 w-4 text-slate-600" />
          </button>
        </div>
        <button className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300/60 bg-[#2c2d30] text-white shadow-lg hover:bg-[#3f4044] transition">
          <Clock className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TimeTrackerTile;
