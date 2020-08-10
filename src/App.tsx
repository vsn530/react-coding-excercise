import React, { useState } from 'react';
import './App.css';
import menuData from './menu-data.json';
import Approuter from './components/AppRouter';
import AppContext from './context/AppContext';

function App() {
  const [menusData,setData]=useState({...menuData});
  

  function updateData(data:object):void{
    let id=data["itemId"];
    let tempdata = {...menusData}
    tempdata[id]= data;
    setData(tempdata);    
    console.log(data);    
  }

  return (
    <AppContext.Provider value={{menusData,updateData}}>
      <div>
        <Approuter />
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
