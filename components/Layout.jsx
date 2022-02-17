import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, Switch } from "@mui/material";
import createEmotionCache from "../lib/createEmotionCache";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const clientSideCache = createEmotionCache();

const Layout = ({ children, emotionCache = clientSideCache }) => {
    const { darkMode, toggleDarkMode } = useContext(AppContext);
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                <Switch checked={darkMode} onChange={toggleDarkMode} />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
};

export default Layout;
