import Moment from 'moment';
import React, { useState } from 'react';
import updateJSON from './updateJSON';
import checkLocalStorage from './checkLocalStorage';
import props from 'prop-types';

function Box(props){
    const formatDate = Moment().format('MM-DD-YYYY');
    const dataSet = props.boxInfo.a
    const index = props.boxInfo.b
    const boxCol = props.boxInfo.c
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

    let internshipData = checkLocalStorage()

    const [dateAppText, setAppText] = useState(initialDate);
    const [checked, setBoxChecked] = useState(setChecked);

    const handleBoxClick = event => {
        if (event.target.checked){
            // Change the date
            setAppText(formatDate);
        }
        else{
            setAppText(emptyDate);
        }

        setBoxChecked(!checked);
        updateJSON(index, boxCol, formatDate, checked);
        internshipData = checkLocalStorage();
        console.log(internshipData)
        props.setTableData(internshipData);
        console.log(props.tableData)
    }

    return (
        <td>
            <input type="checkbox" 
            onChange={handleBoxClick}
            checked={checked} 
            />
        </td>
    )
}

function GenTable(){
    let internshipData = checkLocalStorage()

    const [tableData, setTableData] = useState(internshipData);

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
                    <><tr key={i}></tr>
                    <td><div>{item.Company}</div></td>
                    <td><div><Box boxInfo={{'a': item.Application, 'b': i, 'c': 'Application'}} tableData={tableData} setTableData={setTableData} />
                        <div>{item.Application[1]}</div>
                        </div></td>
                    <td><div><Box boxInfo={{'a': item.OA, 'b': i, 'c': 'OA'}} tableData={tableData} setTableData={setTableData} />
                        <tr>{item.OA[1]}</tr>
                        </div></td>
                    <td><div><Box boxInfo={{'a': item.Interview, 'b': i, 'c': 'Interview'}} tableData={tableData} setTableData={setTableData} />
                        <tr>{item.Interview[1]}</tr>
                        </div></td>
                    <td><div><Box boxInfo={{'a': item.Rejected, 'b': i, 'c': 'Rejected'}} tableData={tableData} setTableData={setTableData} />
                        <tr>{item.Rejected[1]}</tr>
                        </div></td>
                    <td><div><Box boxInfo={{'a': item.Offer, 'b': i, 'c': 'Offer'}} tableData={tableData} setTableData={setTableData} />
                        <tr>{item.Offer[1]}</tr>
                        </div></td>
                    </>
                ))}
                </tbody>
        </table>
            
    );
}
 
export default GenTable