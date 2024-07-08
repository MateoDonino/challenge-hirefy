"use client";
import React from "react";
import TimeLineItem from "./TimeLineItem";
interface TimeLineProps {
  data: any;
}

const TimeLine: React.FC<TimeLineProps> = ({ data }) => {
  console.log(data);

  return (
    <section className="col-span-8 max-w-4xl grid place-content-center mx-auto p-4 relative">
      {data.map((item: any) => (
        <TimeLineItem
          key={item.id}
          title={item.title}
          date={item.date}
          description={item.description}
          content={item.content}
          image={item.image}
          chiplabel={item.chiplabel}
        />
      ))}
    </section>
  );
};

export default TimeLine;
