import './App.css';

function callBackend() {
  alert("backend")
  fetch("http://localhost:5000/api")
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function App() {
  return (
    <div name="content">
      <p>Hello World</p>
      <button onClick={callBackend}>Run</button>
    </div>
  );
}

export default App;
