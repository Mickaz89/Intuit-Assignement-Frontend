import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/products', async () => {
    return HttpResponse.json([
      { _id: '1', name: 'Product 1', price: 100 },
      { _id: '2', name: 'Product 2', price: 200 },
    ]);
  }),
];
