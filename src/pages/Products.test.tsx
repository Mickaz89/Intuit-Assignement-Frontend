import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Products from './Products';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

jest.mock('../components/Loading', () => jest.fn());

test('renders loading state', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(Loading).toHaveBeenCalled();
  });

  test('renders product card with correct data', () => {
    const mockProduct = {
      _id: '1',
      description: 'Test Description',
      name: 'Test Product',
      price: 100,
      image: 'test-image.jpg',
    };

    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );


    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toHaveAttribute('src', 'test-image.jpg');
  });
