import React from 'react';
import './App.css';

import Header from './components/Header';
import List from './components/List';

const data: Array<string> = ['hey', 'ho', 'lets go'];

function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <List list={data} />
    </div>
  );
}

export default App;
