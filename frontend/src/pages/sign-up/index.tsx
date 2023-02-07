import { ButtonEnum, DataStatusEnum, InputEnum } from 'common/enums';
import { SignLayout } from 'components/layouts/sign-layout';
import { Button } from 'components/primitives/button/component';
import { Input } from 'components/primitives/input';
import { AuthContext } from 'context/auth';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useContext, useEffect, useState } from 'react';
import { signUp } from 'store/auth';

type SignUpProps = {
  toggleModals: (value: boolean) => void;
}

const SignUp = ({ toggleModals }: SignUpProps) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const { status, tokens } = useAppSelector(state => state.auth);
  const { setAuth } = useContext(AuthContext);

  const addUser = (e) => {
    e.preventDefault();

    const user = {
      firstName: name, 
      lastName: name,
      email, 
      password,
    }

    dispatch(signUp(user));
  }

  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS) {
      sessionStorage.setItem('accessToken', tokens.accessToken);
      sessionStorage.setItem('refreshToken', tokens.refreshToken);
      setAuth(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <SignLayout>
        <Input type={InputEnum.TEXT} placeholder='First name' value={name} setValue={setName}/>
        <Input type={InputEnum.TEXT} placeholder='Last name' value={surname} setValue={setSurname}/>
        <Input type={InputEnum.EMAIL} placeholder='Email' value={email} setValue={setEmail}/>
        <Input type={InputEnum.PASSWORD} placeholder='Password' value={password} setValue={setPassword}/>
        <Button variant={ButtonEnum.ACCENT} onClick={addUser}> Sign up </Button>
        <Button variant={ButtonEnum.RESET} onClick={toggleModals}> or Sign in </Button>
      </SignLayout>
    </>
  )
}

export { SignUp };