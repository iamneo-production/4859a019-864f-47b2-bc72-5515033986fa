import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminHomePage from '../../components/Admin/Events/Events';
import { MemoryRouter } from 'react-router';

describe('Home Page', () => {
  test('fe_react_adminEvents', () => {
    render(<MemoryRouter><AdminHomePage /></MemoryRouter>);

    const eventName = screen.getByTestId('eventName');
    const timing = screen.getByTestId('timing');
    const totalTeams = screen.getByTestId('totalTeams');

    expect(eventName).toBeTruthy();
    expect(timing).toBeTruthy();
    expect(totalTeams).toBeTruthy();
  });
});