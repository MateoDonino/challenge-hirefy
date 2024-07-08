import React from "react";

export interface ItemProps {
  title: string;
  date: string;
  description: string;
  image?: string;
  chiplabel: string;
  content?: {
    id: number;
    text: string;
  }[];
}
const TimeLineItem = ({
  title,
  date,
  description,
  image,
  chiplabel,
  content,
}: ItemProps) => {
  return (
    <article className="relative space-y-4 border-l-4 border-[#39D3BB] pl-10">
      <div className="absolute -left-5 top-0 p-4 rounded-full bg-[#39D3BB]" />
      <div className="space-y-4">
        <h3 className="text-4xl text-black font-semibold">{title}</h3>
        <div className="flex items-center space-x-2">
          <p
            className={`rounded-full bg-${
              chiplabel === "Fix" ? "yellow-100" : "green-100"
            } text-[#${
              chiplabel === "Fix" ? "FFB800" : "1CB59C"
            }] text-xs font-semibold mr-2 px-3 py-1`}
          >
            {chiplabel}
          </p>
          <p className="text-[#7D879C]">{date}</p>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-[#7D879C]">{description}</p>
        {content && (
          <ul className="text-black space-y-4 ml-5">
            {content.map((item) => (
              <li className="list-disc" key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>
        )}
        {image && <img className="" src={image} alt={title} />}
      </div>
    </article>
  );
};

export default TimeLineItem;
