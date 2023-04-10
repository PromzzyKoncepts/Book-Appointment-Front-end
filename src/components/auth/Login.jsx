/* eslint-disable */
// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import { Form, FormBtn, FormDiv, H1, Input, P } from '../../Styles'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { loginFailure } from '../../redux/user/user'
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const loginUser = async (e) => {
    e.preventDefault()
    if (password === '' && email === '') {
      setErr('Complete all fields')
      return false
    } if (email === '') {
      setErr('Email field should be filled')
      return false
    } if (password === '') {
      setErr('Password cannot be empty')
      return false
    }
    try {
      await login(dispatch, {
        email,
        password
      }, navigate)
    } catch (err) {
      dispatch(loginFailure)
      console.error(err);
      setErr(err.response.data.message)
    }

    console.log(loginUser());
    
  };
  if (isLoggedIn) {
    setIsLoggedIn(true);
    navigate('/');
  }

  return (
    <FormDiv>
      <Form onSubmit={loginUser}>
        <H1>Login to your account</H1>
        <Input aria-label="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
        <Input aria-label="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
        <FormBtn type='submit'>Login</FormBtn>
        {err && setTimeout(() => { setErr(null) }, 2500) && <small>{err}</small>}
        <P>Don't have an account? <Link to='/register'>Register...</Link></P>
      </Form>
    </FormDiv>
  )
}

export default Login;