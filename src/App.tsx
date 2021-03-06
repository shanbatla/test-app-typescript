import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Counter from './components/Counter';
import Users from './components/Users';

const listData: Array<string> = ['hey', 'ho', 'lets go'];

const counterData = 0;

function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <List list={listData} />
      <Counter initialCount={counterData} />
      <Users/>
    </div>
  );
}

export default App;
