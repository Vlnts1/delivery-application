import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Header } from './components/Navbar';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import ShopsPage from './pages/ShopsPage/ShopPage';
import { Shop } from './types/Types';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/actions/types';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/shops');
        const data: Shop[] = await response.json();
        dispatch(fetchProducts(data));
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    fetchShops();
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<ShopsPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
      </Route>,
    ),
  );

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};
