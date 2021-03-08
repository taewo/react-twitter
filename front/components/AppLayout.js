import React, { useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import { useSelector, useDispatch } from 'react-redux'
import { LOAD_USER_REQUEST } from '../reducers/user'

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!me) {
      dispatch({
        type: LOAD_USER_REQUEST
      })
    }
  }, [])
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/">노드버드</Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile">프로필</Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {me
            ? <UserProfile />
            : <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout