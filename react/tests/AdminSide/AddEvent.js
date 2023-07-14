import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddEvent from '../../components/Admin/AddEvent/AddEvent';
import { MemoryRouter } from 'react-router';

describe('AddEvent', () => {
  test('fe_react_adminAddEvent', () => {
    render(<MemoryRouter><AddEvent /></MemoryRouter>);

    const eventName = screen.getByTestId('eventName');
    const timing = screen.getByTestId('timing');
    const totalTeams = screen.getByTestId('totalTeams');
    const submitEventButton = screen.getByTestId('submitEventButton');

    expect(eventName).toBeTruthy();
    expect(timing).toBeTruthy();
    expect(totalTeams).toBeTruthy();
    expect(submitEventButton).toBeTruthy();

  });
});