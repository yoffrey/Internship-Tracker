import Moment from 'moment';
import React, { useState } from 'react';
import updateJSON from './updateJSON';
import checkLocalStorage from './checkLocalStorage';

function Box(boxInfo){
    const formatDate = Moment().format('MM-DD-YYYY');
    const dataSet = boxInfo.boxInfo.a
    const index = boxInfo.boxInfo.b
    const boxCol = boxInfo.boxInfo.c
    var initialDate = '';
    var emptyDate = '';
    var savedDate = dataSet[1];
    const savedCheck = dataSet[0];
    var setChecked = false;
    // See if checkbox is checked 
    if (savedCheck == '1'){
        setChecked = true;
    }
    // See if date is already stored
    if (savedDate != ''){
        initialDate = savedDate;
    };
    
    const [dateAppText, setAppText] = useState(initialDate);
    const [checked, setBoxChecked] = useState(setChecked);

    const handleBoxClick = event => {
        // If box is checked
        if (event.target.checked){
            // Change the date
            setAppText(formatDate);
        }
        else{
            setAppText(emptyDate);
        }
        setBoxChecked(!checked);
        updateJSON(index, boxCol, formatDate, checked)
    };

    return(
        <h4>
            <td>
                <input type="checkbox" 
                    onChange={handleBoxClick}
                    checked={checked} 
                /> 
                {dateAppText}
            </td>
        </h4>
    );
}

export default Box