import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';

function Home(){
    const { menusData } = useContext(AppContext);
    
    let menuKeys = Object.keys(menusData);

    return(
        <div className="container">
            <h3>Available Menu items</h3>
            <ul className="menulist">
                {
                    menuKeys.map((key) => {
                        return (
                            <li key={key}>
                                <Link to={"/details/" + key} style={{ textDecoration: 'none' }}>
                                    <div className="menu-item">
                                        <span style={{fontStyle:'italic',fontWeight:'bold'}}>{menusData[key].name}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Home;