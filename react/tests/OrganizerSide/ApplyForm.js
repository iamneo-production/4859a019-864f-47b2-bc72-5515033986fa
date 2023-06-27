import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import ApplyForm from '../../components/Organizer/ApplyForm/ApplyForm';


describe('HomePage Component', () => {
    
    render(<MemoryRouter><ApplyForm /></MemoryRouter>)

    test('fe_react_organizerApplyEvent', () => {
       const  teamName = screen.queryByTestId('teamName');
       const  totalPlayers = screen.queryByTestId('totalPlayers');
       const  place = screen.queryByTestId('place');
       const  timing = screen.queryByTestId('timing');
       const  submitFormButton = screen.queryByTestId('submitFormButton');

       expect(teamName).toBeTruthy();
       expect(totalPlayers).toBeTruthy();
       expect(place).toBeTruthy();
       expect(timing).toBeTruthy();
       expect(submitFormButton).toBeTruthy();
    })

})