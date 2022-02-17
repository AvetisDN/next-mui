import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        localStorage.darkMode = !darkMode;
        setDarkMode(!darkMode);
        console.log(darkMode);
    };

    useEffect(() => {
        setDarkMode(
            localStorage.darkMode ? Boolean(localStorage.darkMode) : false
        );
    }, []);

    return (
        <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
