// src/App.tsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import mock from "./services/data.json";
import TimeLine from "./components/TimeLine";
import NavNotes from "./components/NavNotes";

const App: React.FC = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(mock);
  }, []);

  return (
    <section className="min-h-screen  bg-white">
      <Header />

      <div className="md:w-[90vw] mx-auto gap-10 grid grid-cols-12 mt-8 px-6">
        {data && <TimeLine data={data} />}
        <NavNotes />
      </div>
    </section>
  );
};

export default App;
