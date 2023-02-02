import { BackgroundEnum, ButtonEnum } from 'common/enums';
import { BackgroundImage } from 'conponents/background';
import { FlexLayout } from 'conponents/layouts/flex-layout';
import { Button } from 'conponents/primitives/button/component';
import { Footer } from 'conponents/primitives/footer';
import React, { useState } from 'react';
import { ButtonLayout } from 'conponents/layouts/button-layout';
import { Modal } from 'conponents/primitives/modal';
import { SignIn } from 'pages/sign-in';
import { SignUp } from 'pages/sign-up';

const SignPage = () => {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);

  return (
    <>
      <FlexLayout>
          <h1>The Sunday bite</h1>
          <BackgroundImage type={BackgroundEnum.CROPPED} />
          <ButtonLayout>
            <Button variant={ButtonEnum.DEFAULT} onClick={() => setSignInVisible(!signInVisible)}>Sign in</Button>
            <Button variant={ButtonEnum.ACCENT} onClick={() => setSignUpVisible(!signUpVisible)}>Register</Button>
          </ButtonLayout>
          <Footer />
      </FlexLayout>
      
      <Modal visible={signInVisible} setVisible={setSignInVisible}>
        <SignIn />
      </Modal>

      <Modal visible={signUpVisible} setVisible={setSignUpVisible}>
        <SignUp />
      </Modal>
    </>
  )
}

export { SignPage };