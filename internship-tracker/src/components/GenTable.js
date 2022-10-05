import Moment from 'moment';
import React, { useState } from 'react';
import updateJSON from './updateJSON';
import checkLocalStorage from './checkLocalStorage';
import props from 'prop-types';

function GenTable(){
    let internshipData = checkLocalStorage()
    console.log(internshipData)
    const [tableData, setTableData] = useState(internshipData);
    internshipData.sort((a, b) => a.company - b.company)
    console.log(internshipData)
    localStorage.setItem('myData', JSON.stringify(internshipData))

    const handleClick = (event, item, i, col) => {
        /* 
        On Change
        Get the date
        Check/Uncheck the box
        Save date/check to file
        Update the file
        Update tableData
        */
        const today = new Date()
        const formatDate = today.toLocaleDateString()
        let checked = item[col]
        if (checked == null){
            checked = formatDate
        }
        else {
            checked = null
        }
        updateJSON(i, col, checked)
        internshipData = checkLocalStorage()
        setTableData(internshipData)
    }

    return(
        <table class="center" >
                <tr>
                    <th>Company</th>
                    <th>Application</th>
                    <th>OA</th>
                    <th>Interview</th>
                    <th>Rejected</th>
                    <th>Offer</th>
                </tr>
                <tbody>
                    {tableData.map((item, i) => (
                        <>  
                            <tr key={i}></tr>
                            <td>
                                <div>{item.company}</div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    defaultChecked={item.application}
                                    onChange = {event => handleClick(event, item, i, 'application')}/>
                                    {item.application}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    defaultChecked={item.oa}
                                    onChange = {event => handleClick(event, item, i, 'oa')}/>
                                    {item.oa}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    defaultChecked={item.interview}
                                    onChange = {event => handleClick(event, item, i, 'interview')}/>
                                    {item.interview}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    defaultChecked={item.rejected}
                                    onChange = {event => handleClick(event, item, i, 'rejected')}/>
                                    {item.rejected}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    defaultChecked={item.offer}
                                    onChange = {event => handleClick(event, item, i, 'offer')}/>
                                    {item.offer}
                                </div>
                            </td>
                        </>
                    ))}
                </tbody>
        </table>
            
    );
}
 
export default GenTable