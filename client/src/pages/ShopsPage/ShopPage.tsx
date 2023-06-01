import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Items } from './components/Items/Items';
import { Container, Col, Row } from 'react-bootstrap';
import { Header } from './ShopPage.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage';

const ShopsPage: React.FC = () => {
  const selectedShopId = useSelector((state: RootState) => state.cart.selectedShopId);
  const shops = useSelector((state: RootState) => state.cart.shops);

  const selectedShop = shops.find((shop) => shop.id === selectedShopId);
  const selectedShopProducts = selectedShop ? selectedShop.products : [];
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8}>
          {selectedShop ? (
            <Items selectedShop={selectedShop} selectedShopProducts={selectedShopProducts} />
          ) : (
            <Header>Please select a shop.</Header>
          )}
        </Col>
      </Row>
      <Row>
        <ShoppingCartPage />
      </Row>
    </Container>
  );
};

export default ShopsPage;
