"use client";
import React from "react";

interface TimeLineProps {
  title: string;
  date: string;
  description: string;

  chipLabel: string;
}

const TimeLine: React.FC<TimeLineProps> = ({
  title,
  date,
  description,
  chipLabel,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 relative">
      <div className="relative pl-10">
        <div className="absolute left-4 top-0 h-full border-l-4 border-[#39D3BB]"></div>
        <div className="flex items-center space-x-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-black">{title}</h2>
            <div className="flex items-center space-x-2 py-5">
              <span className="bg-[#FFF8E5] text-[#FFB800] text-xs font-semibold mr-2 px-3 py-1 rounded-full">
                {chipLabel}
              </span>
              <p className="text-gray-500">{date}</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[#7D879C]">{description}</p>

          <div className="text-black space-y-4 font-semibold">
            <li>Unable to attach PDF to tasks using the Adobe integration.</li>
            <li>
              The total contract time between talent and clients cannot be
              updated.
            </li>
            <li>Some files are not loading when uploaded to portfolio.</li>
            <li>You cannot update the company photo.</li>
            <li>
              You cannot update the job post list from the talent dashboard.
            </li>
            <li>
              The marketplace filters were not working correctly, they
              duplicated cards.
            </li>
            <li>
              sers could enter a talent's portfolio without having to log in.
            </li>
            <li>Homepage: new images with correct shadows.</li>
            <li>Email Hirefy signatures displayed incorrect padding.</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
