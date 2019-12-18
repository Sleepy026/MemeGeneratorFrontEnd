import React from "react";
import "./App.css";
import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard"
import CreateNewMeme from "./components/CreateNewMeme"
import MemeList from "./components/MemeList"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={MemeList}/>
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/create" component={CreateNewMeme} />
      </div>
    </Router>
  );
}

export default App;
