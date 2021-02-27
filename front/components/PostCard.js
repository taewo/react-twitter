import React from 'react'
import { Card, Avatar, Button } from 'antd'
import PropTypes from 'prop-types'
import Icon from '@ant-design/icons';

const PostCard = ({ post }) => {
  console.log('post-', post)
  return (
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellisis" key="ellisis" />
      ]}
      extra={<Button>팔로우</Button>}>
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content} />
    </Card>
  )
}

PostCard.propTypes = {
  post: PropTypes.object
}

export default PostCard