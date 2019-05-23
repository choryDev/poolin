import React from 'react';
import Loadable from 'react-loadable';
import Loading from "../assets/utils/Loading";

export const HOME = Loadable({
  loader: () => import('../containers/workspace/HomeScreen'),
  loading: () => <Loading />,
});

export const ENTRANCE = Loadable({
  loader: () => import('../containers/EntranceScreen'),
  loading: () => <Loading />,
});