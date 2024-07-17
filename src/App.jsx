import React from "react";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-4 ">
      <RevenueCard title={"Amount Pending"} amount={92312.2} orderCount={13} />
    </div>
  );
}

export default App;
