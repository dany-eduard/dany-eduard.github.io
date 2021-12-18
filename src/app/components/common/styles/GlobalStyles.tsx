import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {

  /***** Screen sizes *****/
  --mobile-screen: 960px;


  /***** Fonst *****/
  --primary-fonts: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --code-fonts: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;

  /***** Font sizes *****/
  --fz-xxs: 12px;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;

  /***** Colors *****/
  --primary-color: #7510f7;
  --primary-color-claro: #9e5dff;
  --secondary-color: #290755;
  --secondary-color-transparent: #5b1e8a41;
  --transparent-color: #ffffff00;
  --transparent-background: rgba(255, 255, 255, 0.15);
  --slate-color: #8892b0;
  --light-slate-color: #a8b2d1;
  --lightest-slate-color: #ccd6f6;
  --grey: #828282;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* img {
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: fill;
}

body {
  margin: 0;
  background-color: azure;
  font-family: var(--primary-fonts);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: var(--code-fonts);
}

`;

export default GlobalStyles;
