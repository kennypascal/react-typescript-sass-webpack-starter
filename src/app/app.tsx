import './app.scss';
import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { hot } from 'react-hot-loader/root';
import AboutRoute from './routes/about-route';
import HomeRoute from './routes/home-route';
import Navigation from './components/navigation/navigation';

const App: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation location={location} />
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="route-transition" timeout={600}>
          <Switch location={location}>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/about" component={AboutRoute} />
            <Route path="*" component={HomeRoute} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default hot(App);
