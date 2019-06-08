import React from 'react';
import Loadable from 'react-loadable';
import Loading from "../assets/utils/Loading";

export const Landing = Loadable({
  loader: () => import('../containers/LandingContainer'),
  loading: () => <Loading />
});
export const Sign_001 = Loadable({
  loader: () => import('../containers/sign/SIGN_001Container'),
  loading: () => <Loading />
});
export const Sign_002 = Loadable({
  loader: () => import('../containers/sign/SIGN_002Container'),
  loading: () => <Loading />
});
export const Sign_003 = Loadable({
  loader: () => import('../containers/sign/SIGN_003Container'),
  loading: () => <Loading />
});
export const Find_PW004 = Loadable({
  loader: () => import('../containers/findpw/FINDPW_004Container'),
  loading: () => <Loading />
});