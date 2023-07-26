import { Component } from 'react';
import { Box } from '@mui/material';
import Todos from './components/Todos/Todos';
import './app.css';
import { ThemesColorContext, themesColors } from './components/ThemesColorContext/ThemesColorContext';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light'
        ? 'dark'
        : 'light',
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemesColorContext.Provider value={themesColors[theme]}>
        <ThemesColorContext.Consumer>
          {({ generalBackground }) => (
            <Box className="container" sx={generalBackground}>
              <button type="button" onClick={() => this.toggleTheme()}>asadasd</button>
              <header className="header">todos</header>
              <main className="main">
                <Todos />
              </main>
            </Box>

          )}
        </ThemesColorContext.Consumer>
      </ThemesColorContext.Provider>
    );
  }
}
