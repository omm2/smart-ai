import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../app/store'
import { Intents } from './Intents'

test('renders page title', () => {
 render(
    <Provider store={store}>
      <Intents />
    </Provider>
  )

  expect(screen.getByText('Please choose your Intents')).toBeInTheDocument()
})

test('renders list of intentions', () => {
  render(
    <Provider store={store}>
      <Intents />
    </Provider>
  )

  const items = screen.queryAllByRole('gridcell')
  expect(items).toHaveLength(10)
})

test('selects/diselects all items', async () => {
  render(
    <Provider store={store}>
      <Intents />
    </Provider>
  )
  let selectedItems = screen.queryAllByTestId('selected')
  expect(selectedItems).toHaveLength(0)
  let unselectedItems = screen.queryAllByTestId('unselected')
  expect(unselectedItems).toHaveLength(10)
  expect(screen.getByTestId('counter')).toHaveTextContent('0')

  // Click button
  fireEvent.click(screen.getByText('Select All'))

  selectedItems = screen.queryAllByTestId('selected')
  expect(selectedItems).toHaveLength(10)
  unselectedItems = screen.queryAllByTestId('unselected')
  expect(unselectedItems).toHaveLength(0)
  expect(screen.getByTestId('counter')).toHaveTextContent('10')

  // Click button
  fireEvent.click(screen.getByText('Deselect All'))

  selectedItems = screen.queryAllByTestId('selected')
  expect(selectedItems).toHaveLength(0)
  unselectedItems = screen.queryAllByTestId('unselected')
  expect(unselectedItems).toHaveLength(10)
  expect(screen.getByTestId('counter')).toHaveTextContent('0')
})

test('Toggle one item', async () => {
  render(
    <Provider store={store}>
      <Intents />
    </Provider>
  )

  const cell = screen.queryAllByRole('gridcell')[0]

  // Click button
  fireEvent.click(cell)

  let selectedItems = screen.queryAllByTestId('selected')
  expect(selectedItems).toHaveLength(1)
  let unselectedItems = screen.queryAllByTestId('unselected')
  expect(unselectedItems).toHaveLength(9)
  expect(screen.getByTestId('counter')).toHaveTextContent('1')

  // Click button
  fireEvent.click(cell)

  selectedItems = screen.queryAllByTestId('selected')
  expect(selectedItems).toHaveLength(0)
  unselectedItems = screen.queryAllByTestId('unselected')
  expect(unselectedItems).toHaveLength(10)
  expect(screen.getByTestId('counter')).toHaveTextContent('0')
})