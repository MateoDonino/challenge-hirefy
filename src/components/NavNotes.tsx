import React from "react";

const NavNotes = () => {
  return (
    <div className="col-span-12 md:col-span-4 md:block space-y-4 mt-5">
      <h3 className="text-2xl text-black font-bold">All release notes</h3>
      <ul className="space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="text-[#7D879C]">
            Release {index + 1}: ...
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavNotes;
