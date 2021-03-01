import React from 'react';

import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
      <GlobalStyle />

    </div>
  );
}

export default App;
