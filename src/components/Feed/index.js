import React, { useState, useEffect } from 'react'

import { Container } from './style';

import TweetBox from '../TweetBox'
import Post from '../Post'

import db from '../../firebase';

export default function Feed() {
  const [ posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapashot => (
      setPosts(snapashot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <Container>
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post
        displayName="Rex"
        username="rerfortnite"
        verified={true}
        text="play one"
        avatar="https://media.fortniteapi.io/images/cb39786-435451c-959b162-7bc6089/transparent.png"
        image="https://i.pinimg.com/originals/58/e1/2d/58e12df5353498eec2ef5f47afca6c08.gif"
      />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />


    </Container>
  )
}
