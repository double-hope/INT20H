const colors = {
    background: '#FFFFFF',
    light: '#FFFFFF',
    lightHover: '#F1F1F1',
    text: '#000000',
    accent: '#B03F00',
    accentHover: '#9F3900',
    dark: '#241E51'
};

const iconSizes = {
  xs: '16px',
  sm: '20px',
  md: '30px',
  lg: '35px'
}

const fontSizes = {
  h1: '100px',
  avatar: '30px',
  icons: '20px',
  body: '16px',
  button: '18px',
  caption: '12px',
};

const fontWeights = {
  h1: '600',
  body: '700',
  button: '700',
  caption: '500'
};

const lineHeights = {
  h1: '180px',
  body: '28px',
  button: '28px',
  caption: '24px',
};

const spaces = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  xl1: '30px',
  xl2: '35px',
  xl3: '40px',
  xl4: '45px',
  xl5: '50px',
  xl6: '55px',
  xl7: '60px',
  xl8: '65px',
  xl9: '70px',
  xl10: '75px',
  xl11: '80px',
};

const radiuses = {
  xxs: '2px',
  xs: '5px',
  sm: '7px',
  md: '10px',
  lg: '40px',
  modal: '24px',
  circle: '50%',
  cardTub: '15px',
};

const shadows = {
  upper: '2px 5px 10px 0px #c3c3c340',
  bottom: '2px 5px 10px 0px #c3c3c340',
  dropdown:
    '-3px 0px 9px rgba(222, 222, 222, 0.25), 2px 2px 8px rgba(222, 222, 222, 0.25);',
};

const borders = {
  recipeItem: `10px solid ${colors.background}`,
};

const opacities = {
  lg: 0.2,
  md: 0.4,
  sm: 0.6,
};

const zIndex = {
  toast: 1000,
  tooltip: 999,
  popover: 998,
  burgerOverlay: 997,
  modalWrapper: 100,
  header: 99,
};

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const mq = Object.keys(breakpoints).map(
  (bp) => `@media (min-width: ${breakpoints[bp]}px)`,
);

const maxMq = Object.keys(breakpoints).map(
  (bp) => `@media (max-width: ${breakpoints[bp]}px)`,
);

const lightTheme = {
  colors,
  iconSizes,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
  radiuses,
  shadows,
  borders,
  breakpoints,
  mq,
  maxMq,
  zIndex,
  opacities,
};

export { lightTheme };
