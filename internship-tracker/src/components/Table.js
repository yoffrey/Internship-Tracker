import Box from './Box'
import React, { useReducer, useState, useEffect, Component } from 'react';
import checkLocalStorage from './checkLocalStorage';

function Table(){
    let internshipData = checkLocalStorage()
    
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

                {internshipData.map((item, i) => (
                <><tr key={item.Company}></tr>
                <td><div>{item.Company}</div></td>
                {console.log(item.Company)}
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