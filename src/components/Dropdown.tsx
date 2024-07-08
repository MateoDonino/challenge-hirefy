import React from "react";

interface DropdownProps {
  filter: "all" | "feat" | "fix";
  setFilter: (filter: "all" | "feat" | "fix") => void;
}

const Dropdown = ({ filter, setFilter }: DropdownProps) => {
  return (
    <>
      <div className="dropdown">
        <div className="flex items-center gap-2">
          <p className="text-black text-sm font-semibold">Sort by:</p>
          <div
            tabIndex={0}
            role="button"
            className="capitalize text-black text-sm font-bold py-2 border border-gray-300 rounded-full w-32 px-3 m-1 "
          >
            {filter}
          </div>
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => setFilter("all")}>
            <p className="text-black text-sm font-semibold">All</p>
          </li>
          <li onClick={() => setFilter("feat")}>
            <p className="text-black text-sm font-semibold">Feat</p>
          </li>
          <li onClick={() => setFilter("fix")}>
            <p className="text-black text-sm font-semibold">Fix</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
