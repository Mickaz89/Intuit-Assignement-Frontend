import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../utils/test-utils';
import Products from '../pages/Products';
import MockAdapter from "axios-mock-adapter";
import { fetchProducts } from '../redux/slices/productSlice';
import axiosInstance from '../utils/axiosInstance';

const apiURL = process.env.REACT_APP_API_URL;

const productsData = [
    { _id: '1', name: 'Product 1', price: 100 },
    { _id: '2', name: 'Product 2', price: 200 },
]

const mock = new MockAdapter(axiosInstance);

const mockNetworkRequests = (products = productsData) => {
    mock.onGet(apiURL + "/product").reply(200, products);
};

const unMockNetworkRequests = () => {
    mock.resetHistory();
};

describe('Products tests', () => {
    beforeEach(() => {
        mockNetworkRequests();
    });
    afterEach(() => {
        unMockNetworkRequests();
    });

    it("should fetch products", async () => {
        const { data } = await axiosInstance.get(apiURL + "/product");
        expect(data).toEqual(data);
    });
    it("should fetch products with the fetchProducts thunk", async () => {
        const { store } = renderWithProviders(<Products />);
        await store.dispatch(fetchProducts());
        const state = store.getState().product;
        expect(state.products).toEqual(productsData);
    });
    it("should renders loading state and successfully displays products", async () => {
        renderWithProviders(<Products />);

        expect(screen.getByRole('progressbar')).toBeInTheDocument();

        expect(await screen.findByText(/menu/i)).toBeInTheDocument();
        expect(await screen.findByText(productsData[0].name)).toBeInTheDocument();
        expect(await screen.findByText(productsData[1].name)).toBeInTheDocument();

    });
    it("should add product to cart", async () => {
        mockNetworkRequests([{ _id: '1', name: 'Product 1', price: 100 }]);

        const item = { ...productsData[0], quantity: 1, total: 100 };

        const { store } = renderWithProviders(
            <Router>
                <Products />
            </Router>
        );

        const button = await screen.findByText('Add to Cart');
        fireEvent.click(button);

        const state = store.getState().cart;

        expect(state.items[0]).toEqual(item);
    })
    it("should increment product quantity", async () => {
        mockNetworkRequests([{ _id: '1', name: 'Product 1', price: 100 }]);
        const item = { ...productsData[0], quantity: 2, total: 200 };

        const { store } = renderWithProviders(
            <Router>
                <Products />
            </Router>
        );

        const button = await screen.findByText('Add to Cart');
        fireEvent.click(button);

        const incrementButton = await screen.findByText('+');
        fireEvent.click(incrementButton);

        const state = store.getState().cart;

        expect(state.items[0]).toEqual(item);
    })
})


