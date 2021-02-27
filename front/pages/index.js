import React from 'react'
import { Avatar, Button, Input, Form, Card } from 'antd'
import Icon from '@ant-design/icons';



const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '조르바',
    },
    content: '첫 번째 게시글',
    img: 'https://traveler.marriott.com/wp-content/uploads/2018/09/GI_931952270_SeongsanIlchulbong.jpg'
  }]
}

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && 
        <Form style={{ marginBottom: 20 }} encType="multipart/form-data">
          <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
          <div>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlFor="submit">짹짹</Button>
          </div>
          <div>
            {dummy.imagePaths.map((el, i) => {
              retur (
                <div key={el} style={{ display: 'inline-block' }}>
                  <img src={'html://localhost:3000/' + el} style={{ width: '200px' }} alt={el} />
                  <div>
                    <Button>제거</Button>
                  </div>
                </div>
              )
            })}
          </div>
        </Form>
      }
      {dummy.mainPosts.map(c => {
        return (
          <Card
            key={+c.createdAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellisis" key="ellisis" />
            ]}
            extra={<Button>팔로우</Button>}>
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content} />
          </Card>
        )
      })}
    </div>
  )
}

export default Home