import React from 'react';
import Loadable from 'react-loadable';
import Loading from "../assets/utils/Loading";

export const Landing = Loadable({
  loader: () => import('../containers/Landing'),
  loading: () => <Loading />
});