import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [userText, setText] = useState('initialized');
  // const [hyphenText, setHyphenText] = useState('initialized');

  const Hyphens = (previousValue: string) => {

    let currentValue = '';
    for(let i=0; previousValue.length>i ;i++){

      currentValue += previousValue[ i ];
      if (i !== previousValue.length -1){
        currentValue += '-';
      }
      // possibly implement a join in the future
      // currentValue.join('-');
    }
    return currentValue;
  }

  const SpongeBob = (previousValue: string) => {
    let currentValue = ''
    for(let i=0; previousValue.length>i ;i++){
      if((i%2) === 0){
        currentValue += previousValue[i].toUpperCase();
      }
      else{
        currentValue += previousValue[i].toLowerCase();
      }
    }
    return currentValue;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <form>
            <label>
              Type something: 
              <input 
                type="text" 
                name="name" 
                onChange={(e) => setText(e.target.value)}
                />
            </label>
          </form>
        </p>

        <p>
            You entered: {userText}
        </p>

        <p>
            Hyphens: {Hyphens(userText)}
        </p>

        <p>
            SpongeBob: {SpongeBob(userText)}
        </p>

      </header>
    </div>
  );  
}


export default App;
