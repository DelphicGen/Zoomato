import React from 'react'
import LandingPage from './components/landing-page'
import App from './App'
import {render, fireEvent, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Zoomato from 'components/cheat-sheets/api-call/api'

const mockLoadData = (Zoomato.searchRestaurants = jest.fn());

test('load new data', async () => {
    mockLoadData.mockResolvedValueOnce([
        {
            restaurant: {
                id: '1',
                name: 'AMA Cafe',
                location: {
                    city: ''
                },
                featured_image: '',
                cuisines: '',
                average_cost_for_two: '',
                currency: '',
                user_rating: {
                    aggregate_rating: ''
                }
            }
        }
    ]);

    const {getByText, getByTestId} = render(<App />)

    const input = getByTestId('input')

    fireEvent.change(input, {target: {value: 1}})
    fireEvent.click(getByText('Load'))

    await wait(() => getByText('AMA Cafe'))
    expect(mockLoadData).toHaveBeenCalledTimes(2);

})