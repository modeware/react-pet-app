import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'


// As a basic setup, import your same slice reducers
import petReducer from '../features/pet/pet'



export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {pet: {pet:[], error: null, success: false}},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { pet: petReducer }, preloadedState }),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}><ChakraProvider>{children}</ChakraProvider></Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}   