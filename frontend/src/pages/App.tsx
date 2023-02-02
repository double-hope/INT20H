// import { Modal } from 'conponents/primitives/modal';
import { ThemeProvider } from 'providers/ThemeProvider';
import { FunctionComponent } from 'react';
import { SignPage } from './sign';

const  App: FunctionComponent = (): JSX.Element => {
  return (
    <ThemeProvider>
      {/* <Modal visible={true}>ffff</Modal> */}
      <SignPage />
    </ThemeProvider>
  );
}

export default App;
