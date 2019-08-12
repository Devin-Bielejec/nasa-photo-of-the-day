import React, {useState} from "react";
import "./App.css";

function App() {
  const [data, changeData] = useState();
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
