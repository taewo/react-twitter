import React, { useState, useCallback } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { signupAction } from '../reducers/user'

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue)
  const handler = useCallback(e => {
    setter(e.target.value)
  }, [])
  return [value, handler]
}

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('')
  const [term, setTerm] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [termError, setTermError] = useState(false)

  const [id, onChangeId] = useInput('')
  const [nick, onChangeNick] = useInput('')
  const [password, onChangePassword] = useInput('')

  const dispatch = useDispatch()
  
  const onSubmit = useCallback((e) => {
    console.log({id, nick, password, passwordCheck, term})
    if (password !== passwordCheck) return setPasswordError(true)
    if (!termError) return setTermError(true)
    dispatch(signupAction({
      id,
      password,
      nick
    }))
  }, [password, passwordCheck, term])

  const onChangePasswordChk = useCallback((e) => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  }, [password])

  const onChangeTerm = useCallback((e) => {
    !e.target.checked && setTermError(false)
    setTerm(e.target.checked)
  }, [])

  return (
    <>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} type="password" required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-chk">비밀번호체크</label>
          <br />
          <Input name="user-password-chk" value={passwordCheck} type="password" required onChange={onChangePasswordChk} />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </>
  )
}

export default Signup