
// http://paletton.com/
// https://www.canva.com/colors/color-palettes/pomegranate-crush/
// https://coolors.co/1976d2-2196f3-71bcf7-97cef9-c2e2fb
// https://colors.styled-components.com/
// https://www.sprucerd.com/blog/how-to-select-a-color-palette-for-your-branding

const theme = {
  palette: {} as any,
  fonts: {} as any,
  sizes: {} as any
}

// middle color is the right color
theme.palette = {
  // PANTONE 17-1564 TPX Fiesta, Charcoal, Honey Gold
  primary: ['rgb(220, 68, 58)', 'rgb(54, 69, 79)', 'rgb(209, 160, 84)'],
  // PANTONE 17-1564 TPX Fiesta: light 1, light 2, dark 1 and dark 2
  secondary: {
    light: ['#FF958C', '#EB675C'],
    dark: ['#CA2619', '#AF1408']
  },
  // pastel yellow, pastel blue, pastel green
  neutral: ['rgb(252,247,222)', 'rgb(222,243,253)', 'rgb(222,253,224)'],
  // pastel red
  danger: 'rgb(255,105,97)',
  // pastel oragen
  alert: 'rgb(255,179,71)',
  // pasgel green
  success: 'rgb(222,253,224)',
  // pastel blue
  info: 'rgb(222,243,253)',
  grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#ffffff']
}

theme.fonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
  code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
}

theme.sizes = {
  maxWidth: '1100px',
  font: '15px',
  headerHeight: '70px',
  footerHeight: '540px'
}

export type ThemeType = typeof theme;
export default theme;