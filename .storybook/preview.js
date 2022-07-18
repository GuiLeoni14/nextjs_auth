import GlobalStyles from '../src/styles/global'
import { MyThemeProvider } from '../src/context/MyThemeContext'
export const decorators = [
    (Story) => (
      <MyThemeProvider>
        <Story />
        <GlobalStyles />
      </MyThemeProvider>
    )
  ];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}