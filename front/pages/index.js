import React, { useEffect } from 'react'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from '../reducers/user'

const Home = () => {
  const { me } = useSelector(state => state.user)
  const { mainPosts } = useSelector(state => state.post)
  return (
    <div>
      {me && <PostForm />}
      {mainPosts.map(c => {
        return (
          <PostCard key={c} post={c} />
        )
      })}
    </div>
  )
}

export default Home