import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap');

:root {
  /* DEFAULT COLORS */
  --color-primary: #A72F2F;
  --color-secondary: #bdc4c9;
  --color-tertiary: #fff;
  --color-quaternary: #000;
  --color-blue: #0061ff;
  --color-blue-light: #2C8ED6;
  --color-border: #bdc4c9;
  --box-shadow: #0000001F;
  --search: #20232;
  --white: #D9D9D9;
  --gray: #7A7A7A;
  --outline: #2F3336;
  --retweet: #00c068;
  --like: #E8265E;
  --twitter: #33A1F2;
  --twitter-dark-hover: #011017;
  

  /* GRAY SCALES */
  --veryDarkGray: rgba(66,65,65,0.8);
  --darkGray: rgba(66,65,65,0.6);
  --gray: rgba(66,65,65,0.3);
  --lightGray: rgba(66,65,65,0.08);

  /*ALERTS*/
  --green: #28AB5C;
  --red: #FF4747;
  --yellow: #F6BB30;
  --orange: #F5912E;
  --pink: #FC56FC;
  --blue: #3B86FF;

  /* Font FAMILY */
  --primaryFontFamily: 'Nunito Sans';
}

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
max-height: 100vh;
max-width: 100vw;

width: 100%;
height: 100%
}
*, button, input {
  border: 0;
  background: none;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
html {
  background: var(--primary);
}
`;
