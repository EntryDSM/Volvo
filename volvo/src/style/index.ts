export const color = {
  main: '#f57278',
  sub: '#ff8888',
  backgorund: 'white',
  fail: '#707070',
  middleBar: '#cbcbcb',
  light: '#ffebec',
  disable: '#afafaf',
};

const HTML_FONT_SIZE = 16;

export const pxToRem = (px: number): number => {
  return px / HTML_FONT_SIZE;
};
