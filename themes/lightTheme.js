import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    shape: {
        borderRadius: 12,
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "16px",
                    lineHeight: "16px",
                    padding: ".85em 1.5em .8em 1.5em",
                    fontWeight: 700,
                },
            },
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#8B5CF6",
            light: "#A78BFA",
            dark: "#7C3AED",
            contrastText: "#F0F9FF",
        },
        secondary: {
            main: "#06B6D4",
            light: "#22D3EE",
            dark: "#0891B2",
            contrastText: "#ECFEFF",
        },
        error: {
            main: "#EF4444",
            light: "#F87171",
            dark: "#DC2626",
            contrastText: "#FEF2F2",
        },
        warning: {
            main: "#FBBF24",
            light: "#FCD34D",
            dark: "#F59E0B",
            contrastText: "#44403C",
        },
        success: {
            main: "#22C55E",
            light: "#4ADE80",
            dark: "#16A34A",
            contrastText: "#F0FDF4",
        },
        info: {
            main: "#3B82F6",
            light: "#60A5FA",
            dark: "#2563EB",
            contrastText: "#F0FDF4",
        },
        background: {
            default: "#D1D5DB",
            paper: "#F3F4F6",
        },
    },
});

export default lightTheme;
