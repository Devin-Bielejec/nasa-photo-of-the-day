import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [data, changeData] = useState();

  useEffect( () => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => console.log(res));
    };

    fetchData();
  }, []);
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
