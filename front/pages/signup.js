import React, { useState } from 'react'
import { Form, Input, Checkbox, Button } from 'antd'
const Signup = () => {
  const [id, setId] = useState('')
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [term, setTerm] = useState(false)

  const onSubmit = () => {
    
  }
  const onChangeId = (e) => {
    setId(e.target.value)
  }
  const onChangeNick = (e) => {
    setNick(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangePasswordChk = (e) => {
    setPasswordCheck(e.target.value)
  }
  const onChangeTerm = (e) => {
    setTerm(e.target.value)
  }

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
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
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
        </div>
        <div>
          <Button type="primary" htmlFor="submit">가입하기</Button>
        </div>
      </Form>
    </>
  )
}

export default Signup