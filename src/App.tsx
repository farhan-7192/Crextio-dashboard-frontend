import Navbar from "./components/Navbar";
import WelcomeHeading from "./components/WelcomeHeading";
import StatsBar from "./components/StatsBar";
import SummaryMetrics from "./components/SummaryMetrics";
import DashboardGrid from "./components/DashboardGrid";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#e4e5e7] to-[#f5e5c2] p-4 md:p-6 lg:p-8 font-sans text-slate-900 overflow-x-hidden">
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

        <DashboardGrid />
      </div>
    </div>
  );
}
