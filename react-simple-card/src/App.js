import React from "react";
import './App.css';
import Title from './Title';
import Discription from './Discription';
// import './Images';
import Images from './Images';

function App() {
  return (
   <>
    <div className="main">
    <Images />
   <Title />
   <Discription />
    </div>
   </>
  );
}

export default App;
