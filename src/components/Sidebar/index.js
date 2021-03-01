import React from 'react'

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SidebarIcons from '../SidebarIcons/';
import { Container } from './style'
import { Button } from "@material-ui/core";


export default function Sidebar() {
  return (
    <Container>
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarIcons active Icon={HomeIcon} text="Home" />
      <SidebarIcons Icon={SearchIcon} text="Explore" />
      <SidebarIcons Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarIcons Icon={MailOutlineIcon} text="Messages" />
      <SidebarIcons Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarIcons Icon={ListAltIcon} text="Lists" />
      <SidebarIcons Icon={PermIdentityIcon} text="Profile" />
      <SidebarIcons Icon={MoreHorizIcon} text="More" />
    
      <Button variant="outlined" className="side__tweet" fullWidth>Tweet</Button>
    </Container>
  )
}
