import React from 'react';
import {Link} from 'react-router-dom';

const Atag = ({ ...state }) => {

  const {
    children,
    href,
    ...other
  } = state;

  return (
    <Link
      {...other}
      style={{
       textDecoration: "none",
       }}to={href}>
      {children}
    </Link>
  );
};

export default Atag;