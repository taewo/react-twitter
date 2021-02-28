import React, { useEffect } from 'react'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from '../reducers/user'

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
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(123, user)
  useEffect(() => {
    dispatch(loginAction)
    dispatch(logoutAction)
  }, [])
  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map(c => {
        return (
          <PostCard key={c} post={c} />
        )
      })}
    </div>
  )
}

export default Home