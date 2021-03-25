import React from "react";
import Nav from "./components/Nav"
import Books from "./pages/Books"
import Results from "./components/Results"
import "./App.css";

const api = axios.create

function App() {
  return (
    <div>
      <Nav />  
      <Books />    
      <Results />
    </div>
  )
}


export default App;
