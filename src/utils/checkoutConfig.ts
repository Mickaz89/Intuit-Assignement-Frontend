import React from 'react';
import FSM from '../lib/FSM';

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
      ...defaultTransitions
    },
  },
};

export const fsm = new FSM('cart', states);