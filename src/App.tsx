import React from 'react';
import { ThemeProvider } from 'styled-components';

// Local imports
import GlobalStyle from './global';
import theme from './theme';
import Header from './Components/Header/Header';

const App:React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header></Header>
      </ThemeProvider>
  );
}

export default App;
