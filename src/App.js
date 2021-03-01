import React from 'react';

import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Menumobile from './components/Menumobile';

import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
      <Menumobile />
      <GlobalStyle />

    </div>
  );
}

export default App;
