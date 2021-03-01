import React from 'react'

import { Container } from './style';

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export default function Menumobile() {
  return (
    <Container>
      <HomeIcon />
      <SearchIcon />
      <NotificationsNoneIcon />
      <MailOutlineIcon />
    </Container>
  )
}
