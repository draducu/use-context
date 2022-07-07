import React, { useState, createContext } from "react";
import FunctionContextComponent from "./components/FunctionContextComponent";
import "./App.css";

export const ThemeContext = createContext(); // am exportat un context crea!!!

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        {/* se uita value destul de usor*/}
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        {/* trebuie neaparat sa am componenta inauntru providerului */}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
