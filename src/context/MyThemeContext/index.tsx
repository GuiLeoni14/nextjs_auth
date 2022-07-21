import { createContext, ReactNode, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from '../../styles/theme/light';

interface IMyThemeContextInitialData {
    theme: DefaultTheme;
}

interface IMyThemeProviderProps {
    children: ReactNode;
}

export const MyThemeContext = createContext({} as IMyThemeContextInitialData);

export const MyThemeProvider = ({ children }: IMyThemeProviderProps) => {
    const [theme] = useState(light);
    return (
        <ThemeProvider theme={theme}>
            <MyThemeContext.Provider value={{ theme }}>{children}</MyThemeContext.Provider>
        </ThemeProvider>
    );
};
