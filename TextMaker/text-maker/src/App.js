import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [userText, setText] = useState('initialized');
  // const [hyphenText, setHyphenText] = useState('initialized');

  const Hyphens = (previousValue) => {

    let currentValue = '';
    for(let i=0; previousValue.length>i ;i++){

      currentValue += previousValue [i];
      if (i !== previousValue.length -1){
        currentValue += '-';
      }
      // possibly implement a join in the future
      // currentValue.join('-');
    }
    return currentValue;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          <form>
            <label>
              Name:
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
        
      </header>
    </div>
  );  
}


export default App;
