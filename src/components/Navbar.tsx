import { Bell, Settings, User } from "lucide-react";

export default function Navbar() {
  const navItems = [
    "Dashboard",
    "People",
    "Hiring",
    "Devices",
    "Apps",
    "Salary",
    "Calendar",
    "Reviews",
  ];

  return (
    <div className="w-full flex items-center pt-2">
      <div className="w-1/3 flex justify-start">
        <div className="px-6 h-12 flex items-center rounded-[2rem] border border-gray-400/30 bg-white/20 backdrop-blur-sm">
          <span className="text-[22px] font-normal text-slate-900 tracking-tight">
            Crextio
          </span>
        </div>
      </div>


      <div className="flex-1 flex justify-end items-center gap-2 pr-2">
        <nav className="h-12 flex items-center gap-1 px-1 rounded-full border border-gray-300/40 bg-white/30 backdrop-blur-sm shadow-sm">
          {navItems.map((item) => (
            <button
              key={item}
              className={`h-10.5 px-4 rounded-full text-[14px] font-medium transition-colors flex items-center justify-center ${
                item === "Dashboard"
                  ? "bg-[#2b2c30] text-white"
                  : "text-slate-800 hover:text-slate-900 hover:bg-white/40"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="h-12 flex items-center gap-2 px-4 rounded-full border border-gray-300/40 bg-white/30 backdrop-blur-sm text-slate-800 hover:text-slate-900 hover:bg-white/50 transition-colors shadow-sm">
          <Settings className="w-4.5 h-4.5" strokeWidth={2} />
          <span className="text-[15px] font-medium">Setting</span>
        </button>

        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300/40 bg-white/30 backdrop-blur-sm text-slate-800 hover:text-slate-900 hover:bg-white/50 transition-colors shadow-sm">
          <Bell className="w-4.5 h-4.5" strokeWidth={2} />
        </button>

        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300/40 bg-white/30 backdrop-blur-sm text-slate-800 hover:text-slate-900 hover:bg-white/50 transition-colors shadow-sm">
          <User className="w-4.5 h-4.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
