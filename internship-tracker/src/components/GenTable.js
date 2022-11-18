import React, { useState, useRef } from 'react';
import updateJSON from './updateJSON';
import updateLink from './updateLink';
import addCompany from './addCompany';
import removeCompany from './removeCompany'
import checkLocalStorage from './checkLocalStorage';



function GenTable(){
    const ref = useRef(null);
    var internshipData = checkLocalStorage()
    internshipData.sort((a,b) => a.rejected-b.rejected || b.application-a.application || b.oa-a.oa || b.interview-a.interview ||  b.offer-a.offer)
    localStorage.setItem('myData', JSON.stringify(internshipData));
    const [tableData, setTableData] = useState(internshipData);
    const [company, setCompany] = useState('')

    const handleLink = (i, link) => {
        updateLink(i, link);
        setTableData(checkLocalStorage())
    }

    const handleNewCompany = event => {
        setCompany(event.target.value)
    }

    const handleSubmission = event => {
        event.preventDefault();
        addCompany(company)
        setTableData(checkLocalStorage())
        setCompany('')
    }

    const handleRemove = (event, i) => {
        removeCompany(i)
        setTableData(checkLocalStorage())
    }

    const handleClick = (event, item, i, col) => {
        var formatDate = new Date()
        var epochDay = Math.floor(formatDate/8.64e7)
        let checked = item[col]
        if (checked == null){
            checked = epochDay
        }
        else {
            checked = null
        }
        updateJSON(i, col, checked)
        setTableData(checkLocalStorage())
    }

    const convertToPrettyDate = (days) => {
        if (days !== null){
            var ms = (days*8.64e7)+2.64e7
            var d = new Date(ms)
            var s = d.toLocaleDateString()
            return s
        } else {
            return null
        }
    }

    return(
        <>
        <label>
            Add Company <span></span>
            <input type="text" id="company" name="company"
                onChange={handleNewCompany}
                value={company}   
            />
            <button onClick={handleSubmission}>Submit</button>
        </label>    
        <div></div>
        <table className="center">
                <tbody>
                    <tr>
                        <th>Remove</th>
                        <th>Company</th>
                        <th>Application</th>
                        <th>OA</th>
                        <th>Interview</th>
                        <th>Rejected</th>
                        <th>Offer</th>
                        <th>Link</th>
                    </tr>

                    {tableData.map((item, i) => (
                        <>
                        <tr key={i}/>
                            <tr>
                                <td>
                                    <button onClick={event => handleRemove(event, i)}>Remove</button>
                                </td>
                                
                                <td>
                                    <div>{item.company}</div>
                                </td>
                                <td>
                                    <div><input type="checkbox"
                                        checked={item.application !== null}
                                        onChange={event => handleClick(event, item, i, 'application')} />
                                        {convertToPrettyDate(item.application)}
                                    </div>
                                </td>
                                <td>
                                    <div><input type="checkbox"
                                        checked={item.oa !== null}
                                        onChange={event => handleClick(event, item, i, 'oa')} />
                                        {convertToPrettyDate(item.oa)}
                                    </div>
                                </td>
                                <td>
                                    <div><input type="checkbox"
                                        checked={item.interview !== null}
                                        onChange={event => handleClick(event, item, i, 'interview')} />
                                        {convertToPrettyDate(item.interview)}
                                    </div>
                                </td>
                                <td>
                                    <div><input type="checkbox"
                                        checked={item.rejected !== null}
                                        onChange={event => handleClick(event, item, i, 'rejected')} />
                                        {convertToPrettyDate(item.rejected)}
                                    </div>
                                </td>
                                <td>
                                    <div><input type="checkbox"
                                        checked={item.offer !== null}
                                        onChange={event => handleClick(event, item, i, 'offer')} />
                                        {convertToPrettyDate(item.offer)}
                                    </div>
                                </td>
                                <td>
                                    <form>
                                        <input value={item.link}
                                            onChange={event => handleLink(i, event.target.value)} />
                                    </form>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table></>
    );
}
 
export default GenTable