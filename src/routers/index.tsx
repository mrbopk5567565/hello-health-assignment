import React from "react";
import {  
  Switch,
  Route,
} from 'react-router-dom';
import Assignment1 from 'modules/Assignment1';
import Assignment2 from 'modules/Assignment2';
import { routes } from './routes';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.assignment1} component={Assignment1}/>
      <Route path={routes.assignment2} component={Assignment2}/>
    </Switch>
  )
}

export default Routes;