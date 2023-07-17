import React from 'react';

import './App.css';

const App = () => {
  const name: string = 'james'
  const age: number = 27
  const isMarried: boolean = false

  const getName = (name: string): number => {
    if (name === "james"){
    return 20
    } else {
      return 0
    }
  }

  return (
    <div className="App">
      {name}
      {age}
      {isMarried}
    </div>
  );
}

export default App;
