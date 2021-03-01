import React from 'react'

import { Container } from './styles';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

export default function Widgets() {
  return (
    <Container>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text"/>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1334000591756935169"} />

        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="FortniteGame"
          options={{ height: 100 }}
        />

        <TwitterShareButton
          url={"https://web.facebook.com/BrasilFN/?brand_redir=209696469107685"}
          options={{ text: "#reactjs is awesome", via: "FortniteGame" }}
        /> */}
      </div>
    </Container> 
  )
}
