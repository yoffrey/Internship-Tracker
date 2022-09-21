import Moment from 'moment';
import React, { useState } from 'react';

function Checkbox(){
    const formatDate = Moment().format('MM-DD-YYYY')
    const emptyDate = '__________'
    const [dateAppText, setAppText] = useState(emptyDate)
 

    const handleAppChange = event =>{
        if (event.target.checked){
            setAppText(formatDate);
        }
        else{
            setAppText(emptyDate);
        }
    };


    return(
        
        <h4>
            <td><input type="checkbox" onChange={handleAppChange}/> {dateAppText} </td>
        </h4>
    );
}

export default Checkbox