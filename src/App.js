import React from 'react'
import './App.css'
import NewRecord from "./components/NewRecord/NewRecord";
import Records from "./components/Records/Records";
function App() {
  return (
    <main className="App">
      <p>tracker</p>
        <NewRecord/>
        <Records/>
    </main>
  );
}

export default App;
