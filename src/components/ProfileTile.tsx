export default function ProfileTile() {
  return (
    <div className="relative col-span-1 aspect-square rounded-[2rem] overflow-hidden shadow-sm">
      <img
        src="/profile.jpg"
        alt="Lora Piterson"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#2a1d18]/90 via-[#2a1d18]/30 to-transparent opacity-90"></div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col mb-1">
            <h2 className="text-white text-[22px] font-medium tracking-tight">
              Lora Piterson
            </h2>
            <p className="text-white/70 text-[13px] font-medium mt-0.5">
              UX/UI Designer
            </p>
          </div>

          <button className="px-5 py-2 rounded-full border-2 border-white/75 bg-white/10 backdrop-blur-sm text-white text-[15px] font-medium hover:bg-white/20 transition-colors">
            $1,200
          </button>
        </div>
      </div>
    </div>
  );
}
