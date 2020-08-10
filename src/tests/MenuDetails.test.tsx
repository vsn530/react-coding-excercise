import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MenuDetails from '../components/MenuDetails';
import AppContext from '../context/AppContext';
import menuData from '../menu-data.json';
import { BrowserRouter } from 'react-router-dom';



const defaultProps = {
    match:{
        params:{
            id:'16299'
        } 
    }
}

describe("tests menu details component",()=>{
        
    test('renders menudetails page properly', () => {
        let component = (
            <AppContext.Provider value={{menusData:menuData,updateData:()=>jest.fn()}}>
                <BrowserRouter>
                    <MenuDetails {...defaultProps}/>
                </BrowserRouter>
            </AppContext.Provider>            
        );
        const { getByText } = render(component);
        const buttonElement = getByText(/UPDATE DETAILS/i);
        fireEvent.click(buttonElement,{})
        expect(buttonElement).toBeInTheDocument();
      });
})


