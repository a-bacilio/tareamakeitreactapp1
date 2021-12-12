import { createGlobalStyle } from "styled-components";
import BarlowSemiCondensedMedium from './fonts/BarlowSemiCondensed-Medium.ttf';
import BarlowSemiCondensedSemiBold from './fonts/BarlowSemiCondensed-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: 'Barlow',
        src: local('BarlowSemiCondensed-Medium'), local('BarlowSemiCondensed-SemiBold'),
        url(${BarlowSemiCondensedMedium}) format('ttf'),
        url(${BarlowSemiCondensedSemiBold}) format('ttf'),
        font-weight:500;
        font-weight:600;
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
    --smallFS: 14px;
    --mediumFS: 15px;
    --normalFS:16px;
    --bigFS: 24px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
  }

  #root{
    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
    background-color:var(--color5);
  }

`;


export default GlobalStyle;