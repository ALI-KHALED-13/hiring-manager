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
    ////
    red: string;
    lightRed: string;
    peach: string;
    darkViolet: string;
    violet: string;
    lightViolet: string;
    whitishViolet: string;
    spaceNavy: string;
    navy: string;
    lightNavy: string;
    transparentGray: string;
    shadowGray: string;
  }
}