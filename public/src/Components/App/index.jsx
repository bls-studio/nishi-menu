import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Left from '../LeftScreen';
import Center from '../CenterScreen';
import Right from '../RightScreen';
import Soon from '../Soon';

const App = () => (
  <div id="wrapper">
    <Soon />
  </div>
);
    {/* <Switch>
      <Route exact path="/left" component={Left}/>
      <Route exact path="/middle" component={Center}/>
      <Route exact path="/right" component={Right}/>
      <Route exact path='/soon' component={Soon} />
    </Switch> */}

export default App;