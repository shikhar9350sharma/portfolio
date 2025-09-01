import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [themeChanger, setThemeChanger] = useState('light')
    // theme in localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) setThemeChanger(storedTheme);
    }, []);
    useEffect(() => {
        document.documentElement.className = themeChanger;
        localStorage.setItem('theme', themeChanger);
    }, [themeChanger]);

    const toggleButton = () => {
        const newTheme = themeChanger === 'light' ? 'dark' : 'light';
        setThemeChanger(newTheme);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ themeChanger, toggleButton }}>
            {children}
        </ThemeContext.Provider>
    );
};
// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
