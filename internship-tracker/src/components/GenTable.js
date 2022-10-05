import Moment from 'moment';
import React, { useState } from 'react';
import updateJSON from './updateJSON';
import checkLocalStorage from './checkLocalStorage';
import props from 'prop-types';

function GenTable(){
    var internshipData = checkLocalStorage()
    const [tableData, setTableData] = useState(internshipData);

    internshipData.sort((a, b) => b.application-a.application || b.oa-a.oa || b.interview-a.interview || b.offer-a.offer || a.rejected - b.rejected)
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
        const formatDate = new Date()
        let checked = item[col]
        if (checked == null){
            checked = formatDate
        }
        else {
            checked = null
        }
        updateJSON(i, col, checked)
        setTableData(checkLocalStorage())
    }

    const convertToPrettyDate = (date) => {
        if (date !== null) {
            var d = new Date(date)
            var s = d.toLocaleDateString()
            return s
        } else {
            return null
        }
    }

    return(
        <table className="center" >
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Application</th>
                        <th>OA</th>
                        <th>Interview</th>
                        <th>Rejected</th>
                        <th>Offer</th>
                    </tr>
                  
                    {tableData.map((item, i) => (
                        <>  
                            <tr key={i}></tr>
                            <tr>
                            <td>
                                <div>{item.company}</div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    checked={item.application !== null}
                                    onChange = {event => handleClick(event, item, i, 'application')}/>
                                    {convertToPrettyDate(item.application)}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    checked={item.oa !== null}
                                    onChange = {event => handleClick(event, item, i, 'oa')}/>
                                    {convertToPrettyDate(item.oa)}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    checked={item.interview !== null}
                                    onChange = {event => handleClick(event, item, i, 'interview')}/>
                                    {convertToPrettyDate(item.interview)}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    checked={item.rejected !== null}
                                    onChange = {event => handleClick(event, item, i, 'rejected')}/>
                                    {convertToPrettyDate(item.rejected)}
                                </div>
                            </td>
                            <td>
                                <div><input type="checkbox"
                                    checked={item.offer !== null}
                                    onChange = {event => handleClick(event, item, i, 'offer')}/>
                                    {convertToPrettyDate(item.offer)}
                                </div>
                            </td>
                            </tr>
                            
                        </>
                    ))}
                    
                </tbody>
        </table>
            
    );
}
 
export default GenTable