import React from 'react'

import { Container } from './styles';

export default function Widgets() {
  return (
    <Container>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text"/>
      </div>
    </Container>
  )
}
