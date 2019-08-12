import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

//component Imports
import {TitleComponent} from "./components/TitleComponent/TitleComponent";
import {PictureComponent} from "./components/PictureComponent/PictureComponent";
import {ExplanationComponent} from "./components/ExplanationComponent/ExplanationComponent";
import {DateComponent} from "./components/DateComponent/DateComponent";

function App() {
  const [info, setInfo] = useState("");

  useEffect( () => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => setInfo(res.data));
    };

    fetchData();
  }, []);

  console.log("data",info);
  console.log(info.copyright)
  return (
    <div className="App">
      <TitleComponent title={info.title}/>
      <PictureComponent picSrc={info.url}/>
      <ExplanationComponent explanation={info.explanation}/>
      <DateComponent date={info.date}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
