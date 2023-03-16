import './styles/App.css';
import React from 'react'
import Myquery from './form';
import Header from './Header'

function Container() {
  return (
    <div className="Container">
      <ul>
        <li>
          <img src={process.env.PUBLIC_URL + "agus.jpg"} alt='favico'/>
          <h6>Sansung Galazy s9</h6>
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "toshiba.jpg"} alt='favico'/>
          <h6>Sansung Galazy s9</h6>
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "samsung.jpg"} alt='favico'/>
          <h6>Sansung Galazy s9</h6>
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "portegx.png"} alt='favico'/>
          <h6>Sansung Galazy s9</h6>
        </li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div class='App'>
      <Header/>
      <Container/>
      <Myquery/>
      </div>
  )
}

export default App;
