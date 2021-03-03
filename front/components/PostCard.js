import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Avatar, Button, Input, List, Comment, Form } from 'antd'
import PropTypes from 'prop-types'
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false)
  const [commentText, setCommentText] = useState('')
  const { me } = useSelector(state => state.user)
  const { commentAdded, isAddingComment } = useSelector(state => state.post)
  const dispatch = useDispatch()

  const onToggleComment = useCallback(() => {
    console.log('onToggleComment')
    setCommentFormOpened(prev => !prev)
  }, [])

  const onSubmitComment = useCallback(() => {
    if (!me) return alert('로그인이 필요합니다.')
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: post.id
      }
    })
  }, [me && me.id])

  useEffect(() => {
    setCommentText('')
  }, [commentAdded === true])

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value)
  }, [])

  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
          <RetweetOutlined />,
          <HeartOutlined />,
          <MessageOutlined onClick={onToggleComment} />,
          <EllipsisOutlined />
        ]}
        extra={<Button>팔로우</Button>}>
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content} />
      </Card>
      {commentFormOpened && (
        <>
          <Form onFinish={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment} >삐약</Button>
            <List
              header={`${post.Comments ? post.Comments.length : 0} 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comments || []}
              renderItem={item => (
                <li>
                  <Comment
                    author={item.User.nickname}
                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                    content={item.content}
                  />
                </li>
              )}
            >
            </List>
          </Form>
        </>
      )}
        
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object
}

export default PostCard