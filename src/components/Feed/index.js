import React, { useState, useEffect } from 'react'

import { Container } from './style';

import TweetBox from '../TweetBox';
import Post from '../Post';
import api from '../../services/api';



export default function Feed() {
  const [users, setUsers] = useState([])
  async function handlePosts() {
    const response = await api.get(`v1/playlists`)
    const postsapi = response.data;
    setUsers([postsapi])
  }

  useEffect(() => {
    handlePosts()

  }, [])

  return (
    <Container>
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {
        users.map(user => (
          user.data.map(usr => (
            <Post
              displayName={usr.name}
              username={usr.subName}
              verified={true}
              text={usr.description}
              avatar="https://i.pinimg.com/originals/1d/5e/8d/1d5e8d8c8a2c983dfcaa6df18607dba7.png"
              image={usr.images.showcase}
            />
          ))
        ))
      }

    </Container>
  )
}
