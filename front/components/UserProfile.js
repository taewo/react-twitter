import React, { useCallback } from 'react'
import Link from 'next/link'
import { Card, Button, Avatar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_OUT_REQUEST } from '../reducers/user'


const UserProfile = () => {
  const { mainPosts } =  useSelector(state => state.post)
  const { me } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST
    })
  }, [])
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{me.Post.length}</div>,
        <div key="following">팔로잉<br />{me.Followings.length}</div>,
        <div key="follower">팔로워<br />{me.Followers.length}</div>,
      ]}>
      <Card.Meta 
        avatar={<Avatar>{mainPosts[0].User.nickname[0]}</Avatar>}
        title={mainPosts[0].User.nickname}/>
      <Link href="/signup"><Button>회원가입</Button></Link>
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile