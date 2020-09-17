import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../index'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div)
})

test('renders button correctly', () => {
    const {getByTestId} = render(<Button text="Load" />)
    expect(getByTestId('button')).toHaveTextContent('Load')
})