/* layout.tsx */
import React from "react";
import Sidebar from "../ui/default/side-bar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex max-w-6xl mx-auto">
        <Sidebar />
        <div className="flex-1 ml-64 mr-80">
          {children}
        </div>
      </div>
    </div>
  );
}
