import React from "react"
import './App.css';

function App() {
  const [info, setInfo] = React.useState("Click button");
  return (
    <div name="content">
      <p>Hello World</p>
      <button onClick={() => {
        fetch("http://localhost:5000/api")
        .then((response) => response.json())
        .then((data) => {
          setInfo(data.example);
        });
      }}>Run</button>
      <p name="rendered">{info}</p>
    </div>
  );
}

export default App;
