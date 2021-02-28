import React, { useCallback } from 'react'
import Link from 'next/Link'
import { Input, Button, Form } from 'antd'
import { useInput } from '../pages/signup'
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/user'

const LoginForm = () => {
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')
  const dispatch = useDispatch()
  const onSubmitForm = useCallback(() => {
    dispatch(loginAction)
  }, [id, password])

  return (
    <Form style={{ padding: '10px' }} onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" required value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><Button>회원가입</Button></Link>
      </div>
    </Form>
  )
}

export default LoginForm