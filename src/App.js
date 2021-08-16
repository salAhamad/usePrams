import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cards from './Componants/Cards';
import FullCard from './Componants/FullCard';

function App() {
  return (
    <div>
    <BrowserRouter>
          <Switch>
              <Route exact path="/cards" component={Cards} />
              <Route exact path="/cards/:id" component={FullCard} />
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
