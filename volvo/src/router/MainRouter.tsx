import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grade } from '../components';

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/grade" component={Grade}/>
      </Switch>
    </>
  );
};

export default MainRouter;
