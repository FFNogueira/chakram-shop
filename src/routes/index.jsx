import React from 'react';
import { Route, Routes } from 'react-router-dom';
// páginas:
import Home from '../pages/Home';
import SignIn from '../components/SignIn';
import NotFound from '../pages/404';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MyRoutes;
