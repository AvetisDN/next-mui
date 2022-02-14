import {createTheme} from '@mui/material'

const darkTheme = createTheme({
    shape: {
        borderRadius: 12,
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    lineHeight: '16px',
                    padding: '.85em 1.5em .8em 1.5em',
                    fontWeight: 700,
                }
            }
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#C4B5FD',
            light: '#DDD6FE',
            dark: '#A78BFA',
            contrastText: '#1E293B',
        },
        secondary: {
            main: '#67E8F9',
            light: '#A5F3FC',
            dark: '#22D3EE',
            contrastText: '#1E293B',
        },
        error: {
            main: '#FCA5A5',
            light: '#FECACA',
            dark: '#F87171',
            contrastText: '#44403C',
        },
        warning: {
            main: '#FCD34D',
            light: '#FDE68A',
            dark: '#FBBF24',
            contrastText: '#44403C',
        },
        success: {
            main: '#86EFAC',
            light: '#BBF7D0',
            dark: '#4ADE80',
            contrastText: '#1E293B',
        },
        info: {
            main: '#93C5FD',
            light: '#BFDBFE',
            dark: '#60A5FA',
            contrastText: '#1E293B',
        },
        background: {
            default: '#111827',
            paper: '#1F2937'
        },
    }
})

export default darkTheme