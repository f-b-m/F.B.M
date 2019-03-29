import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './Content';
import DrillDetail from './DrillDetail';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Content} />
      <Route path="/detail" component={DrillDetail} />
    </Router>
  );
}

export default AppRouter;
