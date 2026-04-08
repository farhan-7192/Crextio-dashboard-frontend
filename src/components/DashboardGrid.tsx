import React from "react";
import ProfileTile from "./ProfileTile";
import ProgressTile from "./ProgressTile";
import TimeTrackerTile from "./TimeTrackerTile";
import ListTile from "./ListTile";
import CalendarTile from "./CalendarTile"; // Added import

export default function DashboardGrid() {
  return (
    <main className="w-full grid grid-cols-4 gap-4 mt-6">
      {/* Row 1, Col 1: Profile Tile */}
      <ProfileTile />

      {/* Row 1, Col 2: Progress Tile */}
      <ProgressTile />

      {/* Row 1, Col 3: Time Tracker Tile */}
      <TimeTrackerTile />

      {/* Side Column, Spans Row 1 & 2: Onboarding Vertical Rectangle */}
      <div className="col-span-1 row-span-2 rounded-[2.5rem] bg-[#2c2d30] p-6 flex items-center justify-center shadow-xl">
        <span className="text-white/60 font-medium text-sm">
          [ Onboarding Task List Will Go Here ]
        </span>
      </div>

      {/* Row 2, Col 1: List Tile */}
      <ListTile />

      {/* Row 2, Col 2 & 3: Finalized Calendar Tile (Spans 2 columns) */}
      <CalendarTile />
    </main>
  );
}
