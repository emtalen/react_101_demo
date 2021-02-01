import logo from './logo.svg';
import React, { useEffect } from 'react'
import EmployeeList from './components/EmployeeList'
const App = () => {
  useEffect(() => {
    myOwnFunction()
  }, [])

  const myOwnFunction = () => {

  }
  return (
    <div className="App">
       <EmployeeList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>Test</button>
      </header>
    </div>
  );
}

export default App;
