## Overview
This React application represents a basic restaurant app, featuring a product list and checkout process. The primary aim is to showcase Finite State Machine (FSM) principles in managing the order checkout flow.

## Features
- Product List: Display of products with details and images.
- Responsive Design: Seamless adaptation to various screen sizes.
- Cart management: Add items to the cart, increment or decrement quantity.
- FSM Checkout Process: Illustration of FSM in handling order states.

## FSM Usage
The FSM manages the order checkout process:

- Cart: Users can see and edit items to their cart.
- Shipping: Users fill shipping informations form.
- Review: Users review their order.
- Complete: Users confirm and receive a confirmation message.

## Tech
- React
- Redux
- TypeScript
- Tailwind CSS

## Installation

```bash
$ npm install
```

## Environment Variables

This application uses different sets of environment variables for different environments. These are defined in `.env.local` and `.env.dev` files.

- `.env.local`: This file is used for local development. The variables defined in this file will only be loaded when the application is running on your local machine.

- `.env.dev`: This file is used for the development environment. The variables defined in this file will be loaded when the application is running in the development environment.

To set up your environment variables for each environment:

1. Create a new file in the root directory of the project named `.env.local` or `.env.dev` depending on the environment.
2. Open the corresponding `.env.example` file in the project.
3. Copy the contents of the `.env.example` file into the `.env.local` or `.env.dev` file.
4. Replace the placeholder values in the `.env.local` or `.env.dev` file with your actual values.

## Running the app

```bash
# local
$ npm run start:local

# dev
$ npm run start:dev


## Test

```bash
$ npm run test

