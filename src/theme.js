const colors = {
  primary: "#13f268",
  complementary: "#a41bbf",
  error: "#bc1232",
  success: "#1ac925",
  light: "#ecc7f2",
  lighter: "#e9cced",
  lightest: "#f0e1f2",
  dark: "#262930",
  darker: "#0a0a15",
  darkest: "#050414",
};

const sizes = {
  borderRadius: {
    m: "8px",
    l: "16px",
  },
  border: {
    m: "2px",
  },
};

const space = {
  s: 6,
  m: 12,
  l: 22,
  xl: 36,
};

const fonts = {
  body: "'Work Sans', sans-serif",
  heading: "'Montserrat', sans-serif",
  logo: "'Work Sans', sans-serif",
};

const shared = {
  colors,
  sizes,
  fonts,
  space,
};

export const lightTheme = {
  ...shared,
  background: colors.lighter,
  text: colors.darker,
  buttonText: colors.lightest,
  cardBackground: colors.light,
  headerBackground: colors.lighter,
};

export const darkTheme = {
  ...shared,
  background: colors.darker,
  text: colors.lighter,
  buttonText: colors.darker,
  cardBackground: colors.dark,
  headerBackground: colors.darkest,
};
