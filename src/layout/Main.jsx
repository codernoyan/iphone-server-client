/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h3>My Iphone Hunter</h3>
      <Outlet />
    </div>
  );
}

export default Main;
