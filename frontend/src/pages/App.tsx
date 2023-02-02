import { ThemeProvider } from 'providers/ThemeProvider';
import { FunctionComponent } from 'react';
import { SignPage } from './sign';

const  App: FunctionComponent = (): JSX.Element => {
  return (
    <ThemeProvider>
      <SignPage />
    </ThemeProvider>
  );
}

export default App;
