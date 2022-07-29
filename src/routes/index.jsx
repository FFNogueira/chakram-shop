import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Serviço de Proteção de rotas:
import ProtectedRoute from '../services/ProtectedRoute';
// páginas:
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/404';
import Products from '../pages/Products';
import Cart from '../pages/Cart';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signIn"
        element={<ProtectedRoute prevPath="/signIn" myElement={<SignIn />} />}
      />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MyRoutes;
