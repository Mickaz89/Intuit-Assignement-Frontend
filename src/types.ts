export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }

  export interface Item extends Product {
    quantity: number;
    total: number;
  }