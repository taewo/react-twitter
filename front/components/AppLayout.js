import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu, Input, Button } from 'antd'

const dummy = {
  nickname: 'taewo',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
}

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/">노드버드</Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile">프로필</Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Link href="/signup"><Button>회원가입</Button></Link>
      { children }
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node
}

export default AppLayout