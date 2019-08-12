import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

//component Imports
import {TitleComponent} from "./components/TitleComponent/TitleComponent";
import {PicutreComponent}
function App() {
  const [data, setData] = useState();

  useEffect( () => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => setData(res.data));
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <TitleComponent title={data.title}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
