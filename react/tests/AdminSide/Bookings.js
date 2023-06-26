import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Bookings from '../../components/Admin/Bookings/Bookings';

describe('Bookings', () => {
    render(<MemoryRouter><Bookings /></MemoryRouter>);

    test('fe_react_adminBookings', () => {
        const teamName = screen.queryByTestId('teamName');
        const totalPlayers = screen.queryByTestId('totalPlayers');

        expect(teamName).toBeTruthy();
        expect(totalPlayers).toBeTruthy();
    })
    
})