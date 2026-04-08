import ProfileTile from "./ProfileTile";
import ProgressTile from "./ProgressTile";

export default function DashboardGrid() {
  return (
    <main className="w-full grid grid-cols-4 gap-4 mt-6">
      {/* Row 1, Col 1: Actual Profile Tile */}
      <ProfileTile />

      {/* Row 1, Col 2: Actual Progress Tile */}
      <ProgressTile />

      {/* Row 1, Col 3: Time Tracker Square Placeholder */}
      <div className="col-span-1 aspect-square rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">
          Time Tracker Tile
        </span>
      </div>

      {/* Side Column, Spans Row 1 & 2: Onboarding Vertical Rectangle */}
      <div className="col-span-1 row-span-2 rounded-[2.5rem] border-2 border-gray-500/30 border-dashed bg-[#2c2d30]/80 backdrop-blur-sm flex items-center justify-center">
        <span className="text-white/60 font-medium text-sm">
          Onboarding Task
        </span>
      </div>

      {/* Row 2, Col 1: Pension/Devices Square Placeholder */}
      <div className="col-span-1 aspect-square rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">List Tile</span>
      </div>

      {/* Row 2, Col 2 & 3: Calendar Rectangle Placeholder (Spans 2 columns) */}
      <div className="col-span-2 rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">
          Calendar Tile
        </span>
      </div>
    </main>
  );
}
