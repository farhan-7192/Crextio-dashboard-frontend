import Navbar from "./components/Navbar";
import WelcomeHeading from "./components/WelcomeHeading";
import StatsBar from "./components/StatsBar";
import SummaryMetrics from "./components/SummaryMetrics";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#e4e5e7] from-5% to-[#FDEAB0] p-4 md:p-6 lg:p-8 font-sans text-slate-900 overflow-x-hidden">
      <div className="mx-auto max-w-400 h-full flex flex-col gap-8">
        <Navbar />

        <div className="relative w-full">
          <div className="flex flex-col w-full">
            <WelcomeHeading />
            <StatsBar />
          </div>

          <div className="absolute right-0 bottom-0 pb-1">
            <SummaryMetrics />
          </div>
        </div>

        <main className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
          <div className="xl:col-span-12 h-150 border border-black/10 border-dashed rounded-[2rem] flex items-center justify-center text-sm text-slate-500 bg-white/10 backdrop-blur-sm">
            [ Main Dashboard Content Will Go Here ]
          </div>
        </main>
      </div>
    </div>
  );
}
