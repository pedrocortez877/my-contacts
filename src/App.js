import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div className="App">
        <h1>My Contacts</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
