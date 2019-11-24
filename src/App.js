import React from "react";
import "./App.css";
import ControlPanel from "./components/control-panel";
import FileZone from "./components/file-zone";

const App = () => (
    <div className="App">
        <header>
            <span>Simple Text Editor</span>
        </header>
        <main>
            <ControlPanel />
            <FileZone />
        </main>
    </div>
);

export default App;
