import React from 'react'

import { Container } from './style';
import { Avatar, Button } from '@material-ui/core'

export default function TweetBox() {
  return (
    <Container>
      <form action="">
        <div>
          <Avatar src="https://media.comicbook.com/2020/12/fortnite-1247744-1280x0.jpeg" />
          <input placeholder="What's happening ?" type="text" />
          {/* <input placeholder="Enter image URL" type="text" /> */}
        </div>
        <Button>Tweet</Button>
      </form>
    </Container>
  )
}
