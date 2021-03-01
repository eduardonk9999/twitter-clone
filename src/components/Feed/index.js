import React from 'react'

import { Container } from './style';

import TweetBox from '../TweetBox'
import Post from '../Post'

export default function Feed() {
  return (
    <Container>
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />


    </Container>
  )
}
