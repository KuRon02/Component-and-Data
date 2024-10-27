import React, { useState } from "react";
import Fact from './Fact.jsx';

export default function App() {

  const [text, setCounter] = useState("kissa teito");


  async function getData() {
    const url = "https://cat-fact.herokuapp.com/facts/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.text();
      const parsedData = JSON.parse(json);
      setCounter(parsedData.text);

    } catch (error) {
      console.error(error.message);
    }
  }

  return(

    <div>
      <h1>Random cat fact generator</h1>
      <button onClick={getData}>Generate fact</button>
      <Fact text={text} />
    </div>

  );
}