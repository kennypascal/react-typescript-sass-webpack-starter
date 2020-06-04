import './app.scss';
import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AboutRoute from './routes/about-route';
import HomeRoute from './routes/home-route';
import Navigation from './components/navigation/navigation';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App: React.FunctionComponent = () => {
  let location = useLocation();
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

export default App;
