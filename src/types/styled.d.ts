// import original module declarations
import 'styled-components';

// and extend them
declare module 'styled-components' {
  export interface DefaultTheme {
    gray: string;
    lightGray: string;
    white: string;
    blue: string;
    lightBlue: string;
    grayishBlue: string;
    skyBlue: string;
    whitishGray: string;
    shadowGray: string;
    green: string;
    lightGreen: string;
    ////
    spaceNavy: string;
    navy: string;
    lightNavy: string;
    transparentGray: string;
    
  }
}