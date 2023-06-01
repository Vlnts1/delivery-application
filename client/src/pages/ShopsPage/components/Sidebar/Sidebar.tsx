import React from 'react';
import { Button, Header, SidebarContainer } from './Sidebar.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setSelectedShop } from '../../../../store/actions/types';
import { useDispatch } from 'react-redux';

export const Sidebar: React.FC = () => {
  const shops = useSelector((state: RootState) => state.cart.shops);
  const selectedShopId = useSelector((state: RootState) => state.cart.selectedShopId);

  const dispatch = useDispatch();

  const handleShopSelect = (shopId: string) => {
    dispatch(setSelectedShop(shopId));
  };

  return (
    <SidebarContainer>
      <Header>Shops:</Header>
      {shops.map((shop) => (
        <Button
          key={shop.id}
          onClick={() => handleShopSelect(shop.id)}
          disabled={selectedShopId !== '' && selectedShopId !== shop.id}
        >
          {shop.name}
        </Button>
      ))}
    </SidebarContainer>
  );
};
