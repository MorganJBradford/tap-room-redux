import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App() {
  return (
    <div className="container">
        <Header />
        <div className="mainContent">
          <KegControl />
        </div>
    </div>
  );
}

export default App;
