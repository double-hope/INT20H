import { ButtonEnum, InputEnum } from 'common/enums';
import { SignLayout } from 'components/layouts/sign-layout';
import { Button } from 'components/primitives/button/component';
import { Input } from 'components/primitives/input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

type SignUpProps = {
  toggleModals: (value: boolean) => void;
}

const SignUp = ({ toggleModals }: SignUpProps) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    console.log({name, surname, phone, email, password});
    navigate('/home');
  }

  return (
    <>
      <SignLayout>
        <Input type={InputEnum.TEXT} placeholder='First name' value={name} setValue={setName}/>
        <Input type={InputEnum.TEXT} placeholder='Last name' value={surname} setValue={setSurname}/>
        <Input type={InputEnum.PHONE} placeholder='Phone' value={phone} setValue={setPhone}/>
        <Input type={InputEnum.EMAIL} placeholder='Email' value={email} setValue={setEmail}/>
        <Input type={InputEnum.PASSWORD} placeholder='Password' value={password} setValue={setPassword}/>
        <Button variant={ButtonEnum.ACCENT} onClick={addUser}> Sign up </Button>
        <Button variant={ButtonEnum.RESET} onClick={toggleModals}> or Sign in </Button>
      </SignLayout>
    </>
  )
}

export { SignUp };