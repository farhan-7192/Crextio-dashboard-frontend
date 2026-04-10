import ProfileTile from "./ProfileTile";
import ProgressTile from "./ProgressTile";
import TimeTrackerTile from "./TimeTrackerTile";
import ListTile from "./ListTile";
import CalendarTile from "./CalendarTile";
import OnboardingTile from "./OnboardingTile";

export default function DashboardGrid() {
  return (
    <main className="w-full grid grid-cols-4 gap-4 mt-6">
      <ProfileTile />

      <ProgressTile />

      <TimeTrackerTile />

      <OnboardingTile />

      <ListTile />

      <CalendarTile />
    </main>
  );
}
