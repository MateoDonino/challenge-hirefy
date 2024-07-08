import React from "react";

const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <div className="flex items-center gap-2">
          <p className="text-black text-sm font-semibold">Sort by:</p>
          <div
            tabIndex={0}
            role="button"
            className="text-black text-sm font-bold py-2 border border-gray-300 rounded-full w-32 px-3 m-1 "
          >
            All
          </div>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a className="text-black text-sm font-semibold">Fix</a>
          </li>
          <li>
            <a className="text-black text-sm font-semibold">Feat</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
