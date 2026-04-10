const VerticalDottedLine = () => (
  <div className="absolute top-14 bottom-2 w-px flex justify-center z-0">
    <svg width="2" height="100%">
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="100%"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        strokeDasharray="3 8"
      />
    </svg>
  </div>
);

export default function CalendarTile() {
  const days = [
    { d: "Mon", n: "22", active: false },
    { d: "Tue", n: "23", active: false },
    { d: "Wed", n: "24", active: true },
    { d: "Thu", n: "25", active: false },
    { d: "Fri", n: "26", active: false },
    { d: "Sat", n: "27", active: false },
  ];

  const times = ["8:00 am", "9:00 am", "10:00 am", "11:00 am"];

  return (
    <div className="col-span-2 rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-black/5 p-6 flex flex-col shadow-xl overflow-hidden relative">
      <div className="w-full flex justify-between items-center mb-6 px-2">
        <button className="px-5 py-1.5 rounded-full bg-white/70 text-[13px] text-slate-500 font-medium shadow-sm">
          August
        </button>
        <span className="text-[17px] font-medium text-slate-900 tracking-tight">
          September 2024
        </span>
        <button className="px-5 py-1.5 rounded-full bg-white/70 text-[13px] text-slate-500 font-medium shadow-sm">
          October
        </button>
      </div>

      <div className="flex-1 flex w-full relative">
        <div className="w-17.5 flex flex-col justify-between pt-17 pb-2.5 text-[12px] font-medium text-slate-500 shrink-0">
          {times.map((time) => (
            <span key={time} className="leading-none">
              {time}
            </span>
          ))}
        </div>

        <div className="flex-1 flex justify-between relative">
          {days.map((day, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-[16.66%] relative"
            >
              <div className="flex flex-col items-center gap-1 z-10">
                <span
                  className={`text-[13px] font-medium ${day.active ? "text-slate-900" : "text-slate-500"}`}
                >
                  {day.d}
                </span>
                <span
                  className={`text-[14px] ${day.active ? "text-slate-900 font-semibold" : "text-slate-400 font-medium"}`}
                >
                  {day.n}
                </span>
              </div>
              <VerticalDottedLine />
            </div>
          ))}

          <div className="absolute top-17.5 left-[12%] w-[48%] bg-[#2c2d30] rounded-3xl p-3.5 px-4 flex items-center justify-between shadow-md z-20">
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-white leading-tight">
                Weekly Team Sync
              </span>
              <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                Discuss progress on projects
              </span>
            </div>
            <div className="flex -space-x-1.5 shrink-0 ml-2">
              <img
                src="/profile.jpg"
                alt="Team"
                className="w-6 h-6 rounded-full border-2 border-[#2c2d30] object-cover"
              />
              <img
                src="/profile.jpg"
                alt="Team"
                className="w-6 h-6 rounded-full border-2 border-[#2c2d30] object-cover"
              />
              <img
                src="/profile.jpg"
                alt="Team"
                className="w-6 h-6 rounded-full border-2 border-[#2c2d30] object-cover"
              />
            </div>
          </div>

          <div className="absolute top-42.5 left-[42%] w-[46%] bg-white/90 backdrop-blur-md rounded-3xl p-3.5 px-4 flex items-center justify-between shadow-lg border border-gray-200/50 z-20">
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-slate-900 leading-tight">
                Onboarding Session
              </span>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5">
                Introduction for new hires
              </span>
            </div>
            <div className="flex -space-x-1.5 shrink-0 ml-2">
              <img
                src="/profile.jpg"
                alt="Hire"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/profile.jpg"
                alt="Hire"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
