import { Monitor, Zap, MessageCircle, Ruler, Link2, Check } from "lucide-react";

export default function OnboardingTile() {
  const progressSegments = [
    {
      width: "w-[42%]",
      label: "30%",
      color: "bg-[#f8d462]",
      text: "Task",
      showLine: true,
    },
    {
      width: "w-[33%]",
      label: "25%",
      color: "bg-[#2c2d30]",
      text: "",
      showLine: true,
    },
    {
      width: "w-[25%]",
      label: "0%",
      color: "bg-gray-400/80",
      text: "",
      showLine: false,
    },
  ];

  const tasks = [
    {
      icon: Monitor,
      title: "Interview",
      time: "Sep 13, 08:30",
      completed: true,
      strikethrough: true,
    },
    {
      icon: Zap,
      title: "Team Meeting",
      time: "Sep 13, 10:30",
      completed: true,
      strikethrough: true,
    },
    {
      icon: MessageCircle,
      title: "Project Update",
      time: "Sep 13, 13:00",
      completed: false,
    },
    {
      icon: Ruler,
      title: "Discuss Q3 Goals",
      time: "Sep 13, 14:45",
      completed: false,
    },
    {
      icon: Link2,
      title: "HR Policy Review",
      time: "Sep 13, 16:30",
      completed: false,
    },
  ];

  return (
    <div className="col-span-1 row-span-2 rounded-[2.5rem] bg-white/40 backdrop-blur-sm border border-black/5 flex flex-col shadow-xl overflow-hidden relative">
      <div className="p-6 pb-2">
        <div className="flex justify-between items-end mb-5">
          <h3 className="text-[22px] font-medium text-slate-800 tracking-tight">
            Onboarding
          </h3>
          <span className="text-[34px] font-light leading-none text-slate-900 tracking-tight">
            18%
          </span>
        </div>

        <div className="flex gap-2 h-14 mt-6">
          {progressSegments.map((seg, i) => (
            <div key={i} className={`flex flex-col relative ${seg.width}`}>
              <div className="flex items-start mb-2 relative">
                <span className="text-[13px] font-medium text-slate-800 leading-none">
                  {seg.label}
                </span>
                {seg.showLine && (
                  <div className="absolute right--1.25 top-1 h-10 w-[1.5px] bg-gray-400/50 z-0"></div>
                )}
              </div>
              <div
                className={`h-8 rounded-[10px] ${seg.color} flex items-center px-3 z-10`}
              >
                {seg.text && (
                  <span className="text-[12px] font-medium text-slate-800">
                    {seg.text}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 mt-6">
        <div className="absolute top-0 left-5 right-5 h-12 bg-[#8c8d8f] rounded-t-[2.5rem] z-10"></div>

        <div className="absolute top-4 left-0 right-0 bottom-0 bg-[#2c2d30] rounded-t-[2.5rem] p-6 pb-8 flex flex-col z-20">
          <div className="flex justify-between items-end mb-6 mt-2 px-1 shrink-0">
            <h4 className="text-[20px] text-white font-medium tracking-tight">
              Onboarding Task
            </h4>
            <span className="text-[32px] text-white font-light leading-none">
              2/8
            </span>
          </div>

          <div className="flex flex-col justify-between flex-1">
            {tasks.map((task, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors 
                    ${task.completed ? "bg-[#3f4044] text-white/80" : "bg-white text-slate-900"}`}
                  >
                    <task.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <div className="flex flex-col justify-center gap-0.5">
                    <span
                      className={`text-[15px] font-medium leading-none 
                      ${task.completed ? "text-white/50" : "text-white/90"} 
                      ${task.strikethrough ? "line-through decoration-white/40" : ""}`}
                    >
                      {task.title}
                    </span>
                    <span
                      className={`text-[12px] font-medium leading-none
                      ${task.completed ? "text-gray-400/50" : "text-gray-400/70"}`}
                    >
                      {task.time}
                    </span>
                  </div>
                </div>

                <div>
                  {task.completed ? (
                    <div className="w-5.5 h-5.5 rounded-full bg-[#f8d462] flex items-center justify-center shadow-sm">
                      <Check
                        className="w-3.5 h-3.5 text-slate-900"
                        strokeWidth={3}
                      />
                    </div>
                  ) : (
                    <div className="w-5.5 h5.5 rounded-full bg-[#3f4044]"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
