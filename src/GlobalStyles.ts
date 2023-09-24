import { createGlobalStyle } from 'styled-components';
import { mediaQuery } from './utils/mediaQuery';


export const colors = {
  lightGray: '#F2F2F2',
  white: '#FFFFFF',
  gray: '#647196',
  blue: "#1D4ED8",
  lightBlue: '#E9EFFF',
  grayishBlue: '#D7E5FD',
  skyBlue: '#B1CDFD',
  whitishGray: '#F9FAFF',
  ///
  red: '#D73737',
  lightRed: '#E98888',
  peach: '#F49F85',
  darkViolet: '#7400A6',
  violet: '#AD1FEA',
  lightViolet: '#C75AF6',
  whitishViolet: '#FADDFF',
  
  
  spaceNavy: '#373F68',
  navy: '#3A4374',
  lightNavy: '#656EA3',
  transparentGray: '#8C92B33F',
  shadowGray: '#373F6859',
  
};

const GlobalStyles = createGlobalStyle`
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: ${colors.whitishGray};
    color-scheme: light dark;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: ${colors.navy};
    scrollbar-width: thin;
    scrollbar-color: ${colors.gray} ${colors.white};
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.3rem;
  }

  *::-webkit-scrollbar-track {
    background: ${colors.white};
    border-radius: 1rem;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.gray};
    border: 1px solid ${colors.white};
    border-radius: 1rem;
  }
  
  #root {
    min-height: 100vh;
    
    ${mediaQuery('lg')}{
      display: grid;
      grid-template-columns: 10rem auto;
    }
  }

  .space-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;

export default GlobalStyles;
