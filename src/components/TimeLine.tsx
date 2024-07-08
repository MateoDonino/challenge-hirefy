import React, { useEffect, useState } from "react";
import TimeLineItem from "./TimeLineItem";
import Dropdown from "./Dropdown";
interface TimeLineProps {
  data: any;
}

const TimeLine: React.FC<TimeLineProps> = ({ data }) => {
  const [filter, setFilter] = useState<"all" | "feat" | "fix">("all");

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (filter === "all") {
      setFilteredData(data);
    } else if (filter === "feat") {
      setFilteredData(data.filter((item: any) => item.chiplabel === "Feat"));
    } else if (filter === "fix") {
      setFilteredData(data.filter((item: any) => item.chiplabel === "Fix"));
    }
  }, [filter]);

  return (
    <section className="col-span-12 md:col-span-8 max-w-4xl grid place-content-center mx-auto p-4 relative">
      <div className="flex justify-between">
        <h3 className="text-4xl text-black ">Release 6.5</h3>
        <Dropdown filter={filter} setFilter={setFilter} />
      </div>
      <hr className="my-5" />
      {filteredData.map((item: any) => (
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
