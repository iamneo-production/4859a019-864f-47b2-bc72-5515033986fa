import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import BookedEvents from '../../components/Organizer/BookedEvents/BookedEvents';


describe('BookedEvents', () => {
    
    render(<MemoryRouter><BookedEvents /></MemoryRouter>)

    test('fe_react_organizerBookedEvents', () => {
       const  eventName = screen.queryByTestId('eventName');
	   
	   expect(eventName).toBeTruthy();
    })

})