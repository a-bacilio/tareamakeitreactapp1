import { createGlobalStyle } from "styled-components";
import BarlowSemiCondensedMedium from './fonts/BarlowSemiCondensed-Medium.ttf';
import BarlowSemiCondensedSemiBold from './fonts/BarlowSemiCondensed-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: 'Barlow Semi Condensed',
        src: local('BarlowSemiCondensed-Medium'), local('BarlowSemiCondensed-SemiBold'),
        url(${BarlowSemiCondensedMedium}) format('ttf'),
        url(${BarlowSemiCondensedSemiBold}) format('ttf'),
        font-weight:500,600;
        font-style:normal;
    }


  :root {
    --mobileWidth: 3785px;
    --breakWidth: 768px;
    --maxWidth: 1440px;
    --white: hsl(0, 0%, 100%);
    --lightGrey: #eee;
    --color1: hsl(263, 55%, 52%);
    --color2: hsl(217, 19%, 35%);
    --color3: hsl(219, 29%, 14%);
    --color4: hsl(0, 0%, 81%);
    --color5: hsl(210, 46%, 95%);
    --normalFontSize:13px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

`;


export default GlobalStyle;