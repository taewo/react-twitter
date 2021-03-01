import React, { useState, useCallback, useEffect } from 'react'
import { Form, Button, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_POST_REQUEST } from '../reducers/post'

const PostForm = () => {
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post)
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  useEffect(() => {
    setText('')
  }, [postAdded === true])
  
  const onSubmitForm = useCallback(() => {
    console.log('onSubmitForm')
    dispatch({
      type: ADD_POST_REQUEST,
      text
    })
  }, [])

  const onChangeText = useCallback((e) => {
    setText(e.target.value)
  }, [])
    
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmitForm}>
      <Input.TextArea value={text} onChange={onChangeText} style={{ marginBottom: '10px' }} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
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