export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity?: number;
    total?: number;
  }

  export interface Item extends Product {
    quantity: number;
    total: number;
  }