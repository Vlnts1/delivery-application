export type Product = {
    id: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
  };
  
  export type Shop = {
    id: string;
    name: string;
    products: Product[];
  };
  
  export type OrderData = {
    email: string;
    phone: string;
    address: string;
    name: string;
    summaryItems: Product[];
  };
  