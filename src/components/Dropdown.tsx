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
            className="flex justify-between items-center capitalize text-black text-sm font-bold py-2 border border-gray-300 rounded-full w-32 px-3 m-1 "
          >
            <span> {filter}</span>
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.510249 3.47877L4.97278 7.99047C5.64474 8.66984 6.73023 8.66984 7.40219 7.99047L11.8647 3.47877C12.933 2.38133 12.1749 0.5 10.6414 0.5L1.73357 0.5C0.182881 0.499999 -0.575232 2.38133 0.510249 3.47877Z"
                fill="#0D5287"
              />
            </svg>
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
