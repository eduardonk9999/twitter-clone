import React from 'react'

import { SidebarIcon } from './style';

export default function SidebarIcons({ text, Icon }) {
  return (
    <SidebarIcon>
      <Icon />
      <h2>{text}</h2>
    </SidebarIcon>
  )
}
