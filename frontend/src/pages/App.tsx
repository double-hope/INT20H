import { Modal } from 'conponents/primitives/modal';
import { ThemeProvider } from 'providers/ThemeProvider';
import { FunctionComponent } from 'react';

const  App: FunctionComponent = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Modal></Modal>
    </ThemeProvider>
  );
}

export default App;
