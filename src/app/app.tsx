import './app.scss';
import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { hot } from 'react-hot-loader/root';
import routeConfig from './routes/routes';
import Navigation from './components/navigation/navigation';

const App: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation />
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames="route-transition" timeout={400}>
          <Switch location={location}>
            {routeConfig.map((route) => (
              <Route exact path={route.path} component={route.component} />
            ))}
          </Switch>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default hot(App);
