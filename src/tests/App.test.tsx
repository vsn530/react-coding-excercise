import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe("test App component",()=>{ 

  test('renders home page properly', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Inventory Management/i);
    expect(linkElement).toBeInTheDocument();
  });


  test('test the update Data function',()=>{
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const {getByText} = render(<App/>);
    const menuitem = getByText(/Twist/i);
    fireEvent.click(menuitem)

    const btn = getByText(/UPDATE DETAILS/i)
    fireEvent.click(btn)
    spy.mockRestore();
  })
})


