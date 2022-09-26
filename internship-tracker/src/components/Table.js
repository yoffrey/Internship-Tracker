import Box from './Box'
import React, { useReducer, useState, useEffect, Component } from 'react';
import checkLocalStorage from './checkLocalStorage';
import Moment from 'moment';

function Table(){
    
    let internshipData = checkLocalStorage
    const formatDate = Moment().format('MM-DD-YYYY');

    const [tableInfo, setTableInfo] = useState(internshipData);

    console.log(tableInfo)

    /*const dataSet = boxInfo.boxInfo.a
    const index = boxInfo.boxInfo.b
    const boxCol = boxInfo.boxInfo.c

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
        setTableInfo(checkLocalStorage)
    };
    */

    {
        return (
            <table class="center" >
                <tr>
                <th>Company</th>
                <th>Application</th>
                <th>OA</th>
                <th>Interview</th>
                <th>Rejected</th>
                <th>Offer</th>
                </tr>

                {tableInfo.map((item, i) => (
                <><tr key={item.Company}></tr>
                <td><div>{item.Company}</div></td>
                <td><div><Box boxInfo = {{'a': item.Application, 'b': i, 'c': 'Application'}} /></div></td>
                <td><div><Box boxInfo = {{'a': item.OA, 'b': i, 'c': 'OA'}}/></div></td>
                <td><div><Box boxInfo = {{'a': item.Interview, 'b': i, 'c': 'Interview'}}/></div></td>
                <td><div><Box boxInfo = {{'a': item.Rejected, 'b': i, 'c': 'Rejected'}}/></div></td>
                <td><div><Box boxInfo = {{'a': item.Offer, 'b': i, 'c': 'Offer'}}/></div></td>
                </>
            ))}
                <span></span>
            </table>
            )
    }
}

export default Table