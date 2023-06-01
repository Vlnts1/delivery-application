import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import {
  BtnCol,
  CardCol,
  CardContainer,
  HeaderPrice,
  HeaderProductName,
  NoItemsHeader,
  ProductQuantity,
  ProductQuantityCol,
  SummaryAmountContainer,
  SummaryContainer,
  SummaryHeader,
} from './Summary.styled';
import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import { Product } from '../../../../types/Types';
import { useDispatch } from 'react-redux';
import {
  DecrementProductCount,
  IncrementProductCount,
  removeProduct,
} from '../../../../store/actions/types';

export const SummaryItems: React.FC = () => {
  const summaryItems = useSelector((state: RootState) => state.cart.summaryItems);
  const dispatch = useDispatch();

  const handleRemoveProduct = (product: Product) => {
    dispatch(removeProduct(product.id));
  };

  const calculateTotalAmount = (): number => {
    let totalAmount = 0;
    summaryItems.forEach((product: Product) => {
      totalAmount += product.price * product.quantity;
    });
    return Math.round(totalAmount);
  };

  const handleIncrement = (id: string) => {
    dispatch(IncrementProductCount(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(DecrementProductCount(id));
  };

  return (
    <>
      <SummaryContainer>
        {summaryItems.length > 0 ? (
          <CardContainer>
            {summaryItems.map((product: Product) => (
              <CardCol>
                <Card key={product.id}>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Img variant="top" src={product.img} />
                      </Col>
                      <Col>
                        <HeaderProductName>{product.name}</HeaderProductName>
                        <HeaderPrice>Price: {product.price}</HeaderPrice>
                        <ProductQuantityCol>
                          <Button onClick={() => handleIncrement(product.id)}>+</Button>
                          <ProductQuantity>{product.quantity}</ProductQuantity>
                          <Button onClick={() => handleDecrement(product.id)}>-</Button>
                        </ProductQuantityCol>
                        <BtnCol>
                          <Button onClick={() => handleRemoveProduct(product)}>Remove</Button>
                        </BtnCol>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </CardCol>
            ))}
          </CardContainer>
        ) : (
          <NoItemsHeader>No items added to the cart.</NoItemsHeader>
        )}
      </SummaryContainer>

      <SummaryAmountContainer>
        <Row>
          <Col>
            <SummaryHeader>Total price: {calculateTotalAmount()}</SummaryHeader>
          </Col>
        </Row>
      </SummaryAmountContainer>
    </>
  );
};
