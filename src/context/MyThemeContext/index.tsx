import { createContext, ReactNode, useCallback, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';

interface IMyThemeContextInitialData {
    toggleTheme: (handleTheme: 'light' | 'dark' | null) => void;
    theme: DefaultTheme;
}

interface IMyThemeProviderProps {
    children: ReactNode;
}

export const MyThemeContext = createContext({} as IMyThemeContextInitialData);

export const MyThemeProvider = ({ children }: IMyThemeProviderProps) => {
    const [theme, setTheme] = useState(light);
    const toggleTheme = useCallback((handleTheme: 'light' | 'dark' | null) => {
        if (handleTheme) {
            setTheme(handleTheme == 'light' ? light : dark);
            return;
        }
        setTheme((state) => (state.title === 'light' ? light : dark));
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <MyThemeContext.Provider value={{ toggleTheme, theme }}>{children}</MyThemeContext.Provider>
        </ThemeProvider>
    );
};
