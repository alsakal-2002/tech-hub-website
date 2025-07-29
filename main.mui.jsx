import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.mui.jsx';

// Create a custom theme to match your Tech Hub style
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4fc3f7',
    },
    secondary: {
      main: '#00bcd4',
    },
    background: {
      default: '#0e0e10',
      paper: '#1e1e22',
    },
    text: {
      primary: '#eaeaea',
      secondary: '#bbb',
    },
  },
  typography: {
    fontFamily: "'JetBrains Mono', monospace",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e22',
          borderRadius: '12px',
          border: '1px solid #333',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        containedPrimary: {
          color: '#000',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#eaeaea',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
