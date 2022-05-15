import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [userText, setText] = useState('initialized');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
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
        

      </header>
    </div>
  );
}

export default App;
