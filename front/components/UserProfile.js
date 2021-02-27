import React from 'react'
import Link from 'next/link'
import { Card, Button, Avatar } from 'antd'

const dummy = {
  nickname: 'taewo',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: true
}

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{dummy.Post.length}</div>,
        <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
        <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
      ]}>
      <Card.Meta 
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}/>
      <Link href="/signup"><Button>회원가입</Button></Link>
    </Card>
  )
}

export default UserProfile