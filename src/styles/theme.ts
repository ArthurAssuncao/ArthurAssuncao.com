const color = {
  bg: '#fff',
  fg: '#333',
  primary: '#DC443A',
  primaryLighted1: '#EB675C',
  primaryLighted2: '#FF958C',
  primaryDarkened1: '#CA2619',
  primaryDarkened2: '#AF1408',
  pastelBlue: '#DEF3FD',
  pastelYellow: '#FCF7DE',
  pastelGreen: '#DEFDE0',
  text: '#ccc',
  shadow: '#999'
};

const font = {
  family: "'Segoe UI', 'Helvetica Neue', sansserif",
  size: '15px'
}

const size = {
  headerHeight: '70px',
  footerHeight: '500px',
}

const theme = {
  color,
  font,
  size
};

export type ThemeType = typeof theme;
export default theme;