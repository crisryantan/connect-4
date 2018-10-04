import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: monospace, Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: monospace, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: monospace, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
