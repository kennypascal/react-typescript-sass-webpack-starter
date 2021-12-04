import './app.scss';
import * as React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import routeConfig from './routes/routes';
import Navigation from './components/navigation/navigation';

const COMPONENT_NAME = 'app';

const App: React.FunctionComponent = () => {
  const location = useLocation();
  const element = useRoutes(routeConfig);

  return (
    <div className={COMPONENT_NAME}>
      <Navigation />
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames="route-transition" timeout={400}>
          {element}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default App;
