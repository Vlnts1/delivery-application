import React from 'react';
import { UserDataSidebar } from './components/UserDataSidebar/UserDataSidebar';
import { SummaryItems } from './components/Summary/SummaryItems';
import { Container, Col, Row } from 'react-bootstrap';
import { CartHeader } from './ShoppingCartPage.styled';

import { submitOrder } from '../../store/actions/submitOrderAction';
import { OrderData } from '../../types/Types';

const ShoppingCartPage: React.FC = () => {
  const handleSubmitOrder = async (orderData: OrderData) => {
    try {
      await submitOrder(orderData);
      console.log('Order saved successfully');
    } catch (error) {
      console.error('Failed to save order', error);
    }
  };

  return (
    <Container>
      <CartHeader> My Order </CartHeader>
      <Row>
        <Col sm={4}>
          <UserDataSidebar onSubmit={handleSubmitOrder} />
        </Col>
        <Col sm={8}>
          <SummaryItems />
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCartPage;
