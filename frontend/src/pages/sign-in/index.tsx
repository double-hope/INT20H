import { ButtonEnum, InputEnum } from 'common/enums';
import { SignLayout } from 'conponents/layouts/sign-layout';
import { Button } from 'conponents/primitives/button/component';
import { Input } from 'conponents/primitives/input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

type SignInProps = {
  toggleModals: (value: boolean) => void;
}

const SignIn = ({ toggleModals }: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const checkUser = (e) => {
    e.preventDefault();
    console.log({email, password});
    navigate('/home');
  }

  return (
    <>
      <SignLayout>
        <Input type={InputEnum.EMAIL} placeholder='Email' value={email} setValue={setEmail}/>
        <Input type={InputEnum.PASSWORD} placeholder='Password' value={password} setValue={setPassword}/>
        <Button variant={ButtonEnum.ACCENT} onClick={checkUser}> Sign in </Button>
        <Button variant={ButtonEnum.RESET} onClick={toggleModals}> or Sign up </Button>
      </SignLayout>
    </>
  )
}

export { SignIn }; 