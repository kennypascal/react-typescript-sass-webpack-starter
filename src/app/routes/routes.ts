import RouteHome from './route-home';
import RouteAbout from './route-about';
import RouteSample from './route-sample';

const routeConfig = [
  {
    path: '/',
    component: RouteHome
  },
  {
    path: '/about',
    component: RouteAbout
  },
  {
    path: '/sample',
    component: RouteSample
  }
];

export default routeConfig;
