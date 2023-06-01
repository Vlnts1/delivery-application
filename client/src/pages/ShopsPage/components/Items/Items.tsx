import React from 'react';
import { ButtonCol, CardGroup, ItemsContainer } from './Items.styled';
import { Button, Card } from 'react-bootstrap';
import { Product, Shop } from '../../../../types/Types';
import { useDispatch } from 'react-redux';
import { addToCart, updateSummaryItems } from '../../../../store/actions/types';
import { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';

type ItemsProps = {
  selectedShop: Shop;
  selectedShopProducts: Product[];
};

export const Items: React.FC<ItemsProps> = ({ selectedShop, selectedShopProducts }) => {
  const dispatch = useDispatch();
  const summaryItems = useSelector((state: RootState) => state.cart.summaryItems);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));

    const updatedSummaryItems = [...summaryItems, product];
    dispatch(updateSummaryItems(updatedSummaryItems));
  };

  return (
    <>
      {selectedShop && (
        <ItemsContainer>
          <CardGroup>
            {selectedShopProducts.map((product) => (
              <Card style={{ width: '18rem' }} key={product.id}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <ButtonCol>
                    <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  </ButtonCol>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </ItemsContainer>
      )}
    </>
  );
};
