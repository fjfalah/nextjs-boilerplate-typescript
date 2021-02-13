import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    white: '#ffffff',
    black: '#101419',
    background: '#6699CC',
    green: '#1b998b',
    red: '#c1292e',
    grey: '#dee7e7',
    yellow: '#fff275',
    blue: '#6c91c2',
  },
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  boxShadowHover:
    '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  fontFamily: {
    baloo: 'Baloo Thambi, cursive',
    nunito: 'Nunito, sans-serif',
  },
};

export type Theme = typeof theme;
const styled = baseStyled as ThemedStyledInterface<Theme>;
export default styled;