import React from 'react'
import './App.css'
import NewRecord from "./components/NewRecord/NewRecord";
import Records from "./components/Records/Records";
function App() {
  return (
    <div className="App">
      <p>tracker</p>
        <NewRecord/>
        <Records/>
    </div>
  );
}

export default App;
