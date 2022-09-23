import Moment from 'moment';
import React, { useState } from 'react';

function Box(boxInfo){
    const formatDate = Moment().format('MM-DD-YYYY');
    const dataSet = boxInfo['boxInfo'];
    var initialDate = '__________';
    var emptyDate = '__________';
    var savedDate = dataSet[1];

    const savedCheck = dataSet[0];

    if (savedDate != '__________'){
        initialDate = savedDate;
    }
    

    const [dateAppText, setAppText] = useState(initialDate);

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

export default Box