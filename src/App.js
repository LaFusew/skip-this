import React from 'react';
import { Route } from 'react-router-dom';
import EnigmeFinale from './EnigmeFinale';
import Header from './header';
import Solutions from './Solutions';

function App() {
  return (
    <div className="App" style={{background: '#48454A', fontFamily:"'Roboto Slab', serif", paddingBottom: 24, }}>
      <Header/>
      <Route exact path='/' component={Solutions}/>
      <Route exact path='/final' component={EnigmeFinale}/>
    </div>
  );
}

export default App;
