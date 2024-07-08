"use client";
import React from "react";

interface TimeLineProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  chipLabel: string;
}

const TimeLine: React.FC<TimeLineProps> = ({
  title,
  date,
  description,
  imageUrl,
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
              <span className="bg-green-100 text-[#1CB59C] text-xs font-semibold mr-2 px-3 py-1 rounded-full">
                {chipLabel}
              </span>
              <p className="text-gray-500">{date}</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[#7D879C]">{description}</p>
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
