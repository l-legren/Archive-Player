import React from "react";
import { ThemeProvider } from "styled-components";

// Local imports
import GlobalStyle from "./global";
import theme from "./theme";
import Header from "./Components/Header/Header";
import InputSection from "./Components/SearchPlayerInput/SearchPlayerInput";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <InputSection />
        </ThemeProvider>
    );
};

export default App;
