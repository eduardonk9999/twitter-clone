import React from 'react';

import { Container } from './style';
import { Avatar } from "@material-ui/core";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

export default function Post({ }) {
  return (
    <Container>
      <div className="post__avatar">
        <Avatar src="https://media.fortniteapi.io/images/cb39786-435451c-959b162-7bc6089/transparent.png" />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rex
              <span>
                <VerifiedUserIcon className="post__badge" />@rex
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Qunado é a proxima temporada?</p>
          </div>
        </div>
        <img src="https://i.pinimg.com/originals/58/e1/2d/58e12df5353498eec2ef5f47afca6c08.gif" alt="gif" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </Container>
  )
}
