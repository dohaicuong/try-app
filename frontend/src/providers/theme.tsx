import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

type ThemeProviderProps = {
  children?: React.ReactNode
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
