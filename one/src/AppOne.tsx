import React from "react";
import "./AppOne.css";

const AppTwo = React.lazy(() => import("twoJsonProp/AppTwo"));
const AppThree = React.lazy(() => import("threeJsonProp/AppThree"));

function App() {
  return (
    <div className="App">
      App One
      <AppTwo />
      <AppThree />
    </div>
  );
}

export default App;
