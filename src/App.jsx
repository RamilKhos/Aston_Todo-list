import { Component } from 'react';
import { Box, Button } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Todos from './components/Todos/Todos';
import './app.css';
import { ThemesColorContext, themesColors } from './components/ThemesColorContext/ThemesColorContext';
import { btnThemeColor } from './tools/customStylesMuiComponents';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  toggleThemeHandler = () => {
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

              <header className="header">todos</header>

              <Button onClick={() => this.toggleThemeHandler()} sx={btnThemeColor}>
                {theme === 'light' ? (
                  <NightlightIcon sx={{ color: '#3b3939' }} />
                ) : (
                  <LightModeIcon sx={{ color: 'white' }} />
                )}
              </Button>

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
