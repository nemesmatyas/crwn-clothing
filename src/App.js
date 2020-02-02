import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shoppage/shoppage.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
