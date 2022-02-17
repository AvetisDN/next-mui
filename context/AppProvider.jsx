import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    let initialDarkMode = false;

    if (typeof window !== "undefined") {
        initialDarkMode = localStorage.darkMode || false;
    }

    const [darkMode, setDarkMode] = useState(initialDarkMode);
    const toggleDarkMode = () => {
        localStorage.darkMode = !darkMode;
        setDarkMode(!darkMode);
    };
    return (
        <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
