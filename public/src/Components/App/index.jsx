import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Left from '../LeftScreen';
import Center from '../CenterScreen';
import Right from '../RightScreen';
import Ramen from '../Ramen';

const App = () => (
  <div id="wrapper">
    <Left />
    <Center />
    <Right />
    <Ramen />
    {/* <Switch>
      <Route exact path="/left" component={Left}/>
      <Route exact path="/middle" component={Center}/>
      <Route exact path="/right" component={Right}/>
    </Switch> */}
  </div>
);

export default App;