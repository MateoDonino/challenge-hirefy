import React from "react";

const allReleases = [
  {
    id: 1,
    text: "Release 6.5: New features and enhanced algorith...",
  },
  {
    id: 2,
    text: "Release 6.4: Hirefy: Precision Unleashed",
  },
  {
    id: 3,
    text: "Release 6.3: Hirefy is Expanding Horizons",
  },
  {
    id: 4,
    text: "Release 6.2: Time for some Bug Squashing",
  },
  {
    id: 5,
    text: "Release 6.1: Augmented Reality Talent Portfolios are Live",
  },
  {
    id: 6,
    text: "Release 6.0: Augmented Reality Talent Portfolios are in BETA",
  },
  {
    id: 7,
    text: "Release 5.4: Bug Fixes and Performance Optimization",
  },
  {
    id: 8,
    text: "Release 5.3: Simplified Job Posting Analytics",
  },
  {
    id: 9,
    text: "Release 5.2: Interactive Interview Feedback",
  },
  {
    id: 10,
    text: "Release 5.1: Responsive Design Tweaks: Your tablet is ready for Hirefy!",
  },
  {
    id: 11,
    text: "Release 5.0: Expanded Language Support",
  },
  {
    id: 12,
    text: "Release 4.3: Server Performance Optimization",
  },
  {
    id: 13,
    text: "Release 4.2: Intelligent Candidate Recommendations and Collaborative Talent Projects",
  },
  {
    id: 14,
    text: "Release 4.1: Our Mobile app is on the store",
  },
  {
    id: 15,
    text: "Release 4.0: Advanced Networking Communities",
  },
  {
    id: 16,
    text: "Release 3.3: Personalized Skill Development Recommendations",
  },
  {
    id: 17,
    text: "Release 3.2: Community-Reported Bug Fixes",
  },
  {
    id: 18,
    text: "Release 3.1: Getting ready for Mobile Launch",
  },
  {
    id: 19,
    text: "Release 3.0: Our family is getting bigger",
  },
  {
    id: 20,
    text: "Release 2.2: The importance of Consent",
  },
  {
    id: 21,
    text: "Release 2.1: AI-Powered Skill Gap Analysis",
  },
  {
    id: 22,
    text: "Release 2.0: Cloud Infrastructure Scaling",
  },
  {
    id: 23,
    text: "Release 1.4: Baby steps..",
  },
  {
    id: 24,
    text: "Release 1.3: Proactive Community Bug Hunt",
  },
  {
    id: 25,
    text: "Release 1.2: User-Centric Performance Enhancements",
  },
  {
    id: 26,
    text: "Release 1.1: Server Response Time Tweaks",
  },
  {
    id: 27,
    text: "Release 1.0: Initial Launch: Navigating the Beginning",
  },
];

const NavNotes = () => {
  return (
    <div className="col-span-12 md:col-span-4 md:block space-y-4 mt-5">
      <h3 className="text-2xl text-black font-bold">All release notes</h3>
      <ul className="space-y-4">
        {allReleases.map((release, index) => (
          <li className={index > 10 ? "hidden md:block" : ""} key={release.id}>
            {release.text}
          </li>
        ))}
        <li className="md:hidden text-blue-400 font-semibold">View More</li>
      </ul>
    </div>
  );
};

export default NavNotes;
