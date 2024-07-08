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
    <section className="min-h-screen items-center justify-center bg-white">
      <Header />

      <div className="grid grid-cols-12">
        <TimeLine data={data} />
        <NavNotes />
      </div>
    </section>
  );
};

export default App;
