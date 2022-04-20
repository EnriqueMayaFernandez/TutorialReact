import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import {Link, Route } from "wouter"



function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href="/gif/panda">Gifs de pandas</Link>
        <Link href="/gif/mapache">Gifs de mapaches</Link>
        <Link href="/gif/gato">Gifs de gatos</Link>
        <Route component={ListOfGifs} path="/gif/:keyword"/>
      </section>
    </div>
  );
}

export default App;
