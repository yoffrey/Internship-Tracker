import Moment from 'moment';
import React, { useState } from 'react';
import updateJSON from './updateJSON';

function Box(boxInfo){

    const formatDate = Moment().format('MM-DD-YYYY');
    const dataSet = boxInfo['boxInfo'];
    var initialDate = '__________';
    var emptyDate = '__________';
    var savedDate = dataSet[1];
    const savedCheck = dataSet[0];
    var setChecked = false
    // See if checkbox is checked 
    if (savedCheck == '1'){
        setChecked = true;
    }
    // See if date is already stored
    if (savedDate != '__________'){
        initialDate = savedDate;
    };
    
    const [dateAppText, setAppText] = useState(initialDate);
    const [checked, setBoxChecked] = useState(setChecked)
    const handleAppChange = event => {
        // If box is checked
        if (event.target.checked){
            // Change the date
            setAppText(formatDate);
        }
        else{
            setAppText(emptyDate);
        }
        setBoxChecked(!checked);
        updateJSON(boxInfo, formatDate, setBoxChecked)
    };

    return(
        <h4>
            <td>
                <input type="checkbox" 
                    onChange={handleAppChange}
                    checked={checked}
                /> 
                {dateAppText} 
            </td>
        </h4>
    );
}

export default Box