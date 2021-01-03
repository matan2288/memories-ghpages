import React from "react";
import "./App.css";
import MemoryForm from "./components/CreateMemory/MemoryForm";
import { MemoryProvider } from "./components/Context/MemoryContext";
import MainHeader from "./components/MainHeader/MainHeader.js";

export default function App() {
  return (
    <div className="app-main-container">
      <div id="header-container">
        <MainHeader />
      </div>

      <MemoryProvider>
        <MemoryForm />
      </MemoryProvider>

      <span id="Footer">Made by Matan Elmaliach ✌.</span>
    </div>
  );
}
