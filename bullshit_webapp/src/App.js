import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
