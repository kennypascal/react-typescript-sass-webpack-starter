// import { RouteObject } from 'react-router-dom';
import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import RouteHome from './route-home';
import RouteAbout from './route-about';
import RouteSample from './route-sample';

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <RouteHome />
  },
  {
    path: '/about',
    element: <RouteAbout />
  },
  {
    path: '/sample',
    element: <RouteSample />
  }
];

export default routeConfig;
