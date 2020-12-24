import './App.css';
import React from "react";
import Tweet from './tweet';

function App() {
  return (
    <div className="app">
      <Tweet name = "Jennifer" message = "Merry"/>
      <Tweet name = "Margaret" message = "Christmas"/>
      <Tweet name = "Joseph" message = "Eve"/>
    </div>
  );
}

export default App;
