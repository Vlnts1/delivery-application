import { OrderData } from '../types/Types';

export const saveOrder = (orderData: OrderData): Promise<Response> => {
  return fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
};
