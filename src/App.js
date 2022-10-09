import React from "react";
import './App.css';
import ProgressBar from "./ProgressBar/ProgressBar";

const items = [
  {name: 'Sold', color: '#b024a9', value: 677},
  {name: 'Got free', color: '#ff5cff', value: 23},
  {name: 'Burned', color: '#1ddf55', value: 202},
  {name: 'Free float', color: '#99a5b1', value: 323},
]

export function App() {
  return (
    <div className="App">
      <ProgressBar items={items} width={800} height={40}/>
    </div>
  );
}

export default App;
