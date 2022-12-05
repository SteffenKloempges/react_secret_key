// import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';
import apiKey from './apiKey.json'

function App() {
  console.log(apiKey);
  // const [data, setData] = useState()

  // useEffect(() => {
  //   fetch(`https://api.unsplash.com/photos/?client_id=${apiKey[0].key}`)
  //     .then(response => response.json())
  //     .then(json => setData(json))
  // }, [])

  // console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hallöchen ihr lieben</h1>
      </header>
    </div>
  );
}

export default App;
