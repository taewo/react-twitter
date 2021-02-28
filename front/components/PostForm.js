import React from 'react'
import { Form, Button, Input } from 'antd'
import { useSelector } from 'react-redux'

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post)
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
      <Input.TextArea style={{ marginBottom: '10px' }} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlFor="submit">짹짹</Button>
      </div>
      <div>
        {imagePaths.map((el, i) => {
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
  )
}

export default PostForm