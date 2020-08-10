import React, { useContext, useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import AppContext from '../context/AppContext';

function MenuDetails(props) {
    let history = useHistory();
    const { menusData,updateData } = useContext(AppContext);
    let item = menusData[props.match.params.id];

    const [price,setPrice]= useState(item.price);
    const [isAvailable,setIsAvailable] = useState(item.available);

    function updateMenuDetails(){
        let data = {
            ...item,
            price,
            available:isAvailable
        }
        updateData(data)
        history.push("/");  
    }
    

    return (
        <div className="container">
            <div>
                <Link to="/" style={{marginLeft:'10px',  color: 'crimson'}}>Go Back</Link>
            </div>
            
            <div id="item-details">
                <div className="item-info">
                    <div className="group">
                        <label htmlFor="name">Item Name:</label>
                        <input readOnly id="name" value={item.name} />
                    </div>
                    <div className="group">
                        <label htmlFor="">Description : </label>
                        <textarea readOnly id="description" value={item.description}  />
                    </div>

                    <div className="group">
                        <label htmlFor="itemprice">Price: </label>
                        <input id="itemprice" value={price} onChange={(e)=>setPrice(e.target.value)} />
                    </div>
                    <div className="group">
                        <label htmlFor="itemavailablity">Available:</label>
                        <input id="itemavailablity" type="checkbox" checked={isAvailable} onChange={(e)=>setIsAvailable(e.target.checked)} />
                    </div>

                    <button id="update" type="button" onClick={updateMenuDetails}>UPDATE DETAILS</button>
                </div>

                <div className="img">
                    <img src={item.imageUrl} alt="No Image Available" />
                </div>
            </div>
        </div>
    )
}

export default MenuDetails;