import { ButtonEnum, InputEnum } from 'common/enums';
import { Button } from 'conponents/primitives/button/component';
import { Input } from 'conponents/primitives/input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {
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
      <Input type={InputEnum.EMAIL} placeholder='Email' value={email} setValue={setEmail}/>
      <Input type={InputEnum.PASSWORD} placeholder='Password' value={password} setValue={setPassword}/>
      <Button variant={ButtonEnum.ACCENT} onClick={checkUser}> Sign in </Button>
    </>
  )
}

export { SignIn }; 