import React from 'react';
import Loadable from 'react-loadable';
import Loading from "../assets/utils/Loading";

export const HOME = Loadable({
  loader: () => import('../containers/HomeScreen'),
  loading: () => <Loading />,
});