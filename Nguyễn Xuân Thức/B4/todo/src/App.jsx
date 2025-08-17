import React from "react";
import FrameCol from "./components/FrameCol";

function App() {
  return (
    <div className="flex gap-2 p-4 bg-white min-h-screen">
      <FrameCol nameCol="To Do" statusId={1} />
      <FrameCol nameCol="In Progress" statusId={2} />
      <FrameCol nameCol="In Review" statusId={3} />
      <FrameCol nameCol="Done" statusId={4} />
    </div>
  );
}

export default App;