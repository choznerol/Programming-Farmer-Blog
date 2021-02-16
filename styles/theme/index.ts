export const theme = {
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.75rem', // 28px
    '4xl': '2rem', // 32px
    '5xl': '2.25rem', // 36px
    '6xl': '2.5rem', // 40px
    '7xl': '2.75rem', // 44px
    '8xl': '2.75rem', // 48px
    '9xl': '3.75rem', // 60px
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  zIndexs: {
    auto: 'auto',
    hide: -1,
    base: 0,
    navigater: 100,
    dropdown: 200,
    overlay: 300,
    modal: 400,
    toast: 500,
  },
  borderRadius: {
    none: '0',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '100%',
  },
  breakpoints: {
    mobileS: '360px',
    mobileM: '375px',
    mobileL: '414px',
    tabletS: '768px',
    tabletM: '1024px',
    tabletL: '1280px',
    desktopS: '1366px',
    desktopM: '1440px',
    desktopL: '1920px',
  },
};

export type Theme = typeof theme;
