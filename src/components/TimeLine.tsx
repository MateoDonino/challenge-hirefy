import React from "react";
import TimeLineItem from "./TimeLineItem";
import Dropdown from "./Dropdown";
interface TimeLineProps {
  data: any;
}

const TimeLine: React.FC<TimeLineProps> = ({ data }) => {
  return (
    <section className="col-span-8 max-w-4xl grid place-content-center mx-auto p-4 relative">
      <div className="flex justify-between">
        <h3 className="text-4xl text-black ">Release 6.5</h3>
        <Dropdown />
      </div>
      <hr className="my-5" />
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
