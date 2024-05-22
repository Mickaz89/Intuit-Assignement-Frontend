import React from 'react';
import FSM from '../lib/FSM';
import Cart from '../pages/Checkout/components/Cart';
import Shipping from '../pages/Checkout/components/Shipping';
import Review from '../pages/Checkout/components/Review';
import Complete from '../pages/Checkout/components/Complete';

export type CheckoutComponent = React.FC<{
  handleBack?: () => void;
  handleNext?: () => void;
}>;

const defaultTransitions = {
  cancel: { target: 'cart' }
};

export const states = {
  cart: {
    on: {
      next: { target: 'shipping' },
      ...defaultTransitions
    },
  },
  shipping: {
    on: {
      previous: { target: 'cart' },
      next: { target: 'review' },
      ...defaultTransitions
    },
  },
  review: {
    on: {
      previous: { target: 'shipping' },
      next: { target: 'complete' },
      ...defaultTransitions
    },
  },
  complete: {
    on: {
      previous: { target: 'review' },
      ...defaultTransitions
    },
  }
};

export const steps = Object.keys(states);

export const mapStateToComponent: Record<string, CheckoutComponent> = {
  'cart': Cart,
  'shipping': Shipping,
  'review': Review,
  'complete': Complete,
}

export const fsm = new FSM('cart', states);