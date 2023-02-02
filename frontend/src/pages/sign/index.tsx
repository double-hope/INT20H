import { ButtonEnum } from 'common/enums';
import { Button } from 'conponents/primitives/button/component';
import { Footer } from 'conponents/primitives/footer';
import React from 'react'

const SignPage = () => {
  return (
    <div>
        <h1>The Sunday bite</h1>

        <Button variant={ButtonEnum.ACCENT}>dasd</Button>
        <Footer />
    </div>
  )
}

export { SignPage };