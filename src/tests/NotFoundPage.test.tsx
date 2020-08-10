import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

test('renders home page properly', () => {
    let component = (
        <BrowserRouter>
            <NotFoundPage/>
        </BrowserRouter>
    )
  const { getByTestId } = render(component);
  const linkElement = getByTestId("notfound");
  expect(linkElement).toBeInTheDocument();
});
