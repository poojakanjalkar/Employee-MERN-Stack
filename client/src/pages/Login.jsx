import React from 'react'
import Wrapper from '../assets/wrappers/LoginPage'
import Logo from '../components/logo'
import FormRow from '../components/FormRow'
export default function Login() {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow type='text' name='User Name' />
        <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block'>
          Login
        </button>
      </form>

    </Wrapper>

  )
}
