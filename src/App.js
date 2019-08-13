import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import styled from "styled-components";

//component Imports
import {TitleComponent} from "./components/TitleComponent";
import {PictureComponent} from "./components/PictureComponent";
import {ExplanationComponent} from "./components/ExplanationComponent";
import {DateComponent} from "./components/DateComponent";
import {CopyrightComponent} from "./components/CopyrightComponent";

const Body = styled.body`
  width: 75%;
  margin: 0 auto;
  font-size: 1rem;
  color: red;
`

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
    <Body>
      <TitleComponent title={info.title}/>
      <PictureComponent picSrc={info.url}/>
      <ExplanationComponent explanation={info.explanation}/>
      <DateComponent date={info.date}/>
      <CopyrightComponent copyright={info.copyright}/>
    </Body>
  );
}

export default App;
