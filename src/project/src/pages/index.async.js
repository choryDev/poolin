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
export const OVERVIEW = Loadable({
  loader: () => import('../containers/VI_CMPY/VI_CMPY_001Container'),
  loading: () => <Loading />,
});
export const MyTasks = Loadable({
  loader: () => import('../containers/VI_CMPY/MyTasks'),
  loading: () => <Loading />,
});
export const loading = Loadable({
  loader: () =>  import('../assets/utils/Loading'),
  loading: () => <Loading />,
});