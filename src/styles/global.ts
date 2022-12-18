import { createGlobalStyle } from 'styled-components';

import Inter from '../assets/fonts/Inter.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:"Inter";
    src: url(${Inter}) format("truetype");
  }

  :root {
    --primary-color: #DB1F26;
    --black-color: #202020;
    --grey-color: #828282;
  }
`;
