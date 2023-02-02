import { ButtonEnum, InputEnum } from 'common/enums';
import { Button } from 'conponents/primitives/button/component';
import { Input } from 'conponents/primitives/input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
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
      <Input type={InputEnum.TEXT} placeholder='First name' value={name} setValue={setName}/>
      <Input type={InputEnum.TEXT} placeholder='Last name' value={surname} setValue={setSurname}/>
      <Input type={InputEnum.PHONE} placeholder='Phone' value={phone} setValue={setPhone}/>
      <Input type={InputEnum.EMAIL} placeholder='Email' value={email} setValue={setEmail}/>
      <Input type={InputEnum.PASSWORD} placeholder='Password' value={password} setValue={setPassword}/>
      <Button variant={ButtonEnum.ACCENT} onClick={addUser}> Sign up </Button>
    </>
  )
}

export { SignUp };