import './app.scss';
import * as React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { hot } from 'react-hot-loader/root';
import Navigation from './components/navigation/navigation';
import HomeRoute from './routes/home-route';
import AboutRoute from './routes/about-route';
import SampleRoute from './routes/sample-route';

const App: React.FunctionComponent = () => {
  const location = useLocation()

  return (
    <div className="app">
      <Navigation location={location} />
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="route-transition" timeout={1200}>
          <Switch location={location}>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/about" component={AboutRoute} />
            <Route path="/sample" component={SampleRoute} />
            <Route path="*" component={HomeRoute} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default hot(App);
