export default function DashboardGrid() {
  return (
    <main className="w-full grid grid-cols-4 gap-4 mt-6">
      <div className="col-span-1 aspect-square rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">
          Profile Tile
        </span>
      </div>

      <div className="col-span-1 aspect-square rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">
          Progress Tile
        </span>
      </div>

      <div className="col-span-1 aspect-square rounded-[2rem] border-2 border-gray-400/30 border-dashed bg-white/10 backdrop-blur-sm flex items-center justify-center">
        <span className="text-slate-400/80 font-medium text-sm">
          Time Tracker Tile
        </span>
      </div>


      <div className="col-span-1 row-span-2 rounded-[2.5rem] border-2 border-gray-500/30 border-dashed bg-[#2c2d30]/80 backdrop-blur-sm flex items-center justify-center">
        <span className="text-white/60 font-medium text-sm">
          Onboarding Task
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
