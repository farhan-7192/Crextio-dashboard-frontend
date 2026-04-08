import ProfileTile from "./ProfileTile";
import ProgressTile from "./ProgressTile";
import TimeTrackerTile from "./TimeTrackerTile";

export default function DashboardGrid() {
  return (
    <main className="w-full grid grid-cols-4 gap-4 mt-6">
      <ProfileTile />

      <ProgressTile />

      <TimeTrackerTile />

      <div className="col-span-1 row-span-2 rounded-[2.5rem] bg-[#2c2d30] p-6 flex items-center justify-center">
        <span className="text-white/60 font-medium text-sm">
          [ Onboarding Task List Will Go Here ]
        </span>
      </div>

      <div className="col-span-1 aspect-square rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">List Tile</span>
      </div>

      <div className="col-span-2 rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">
          Calendar Tile
        </span>
      </div>
    </main>
  );
}
