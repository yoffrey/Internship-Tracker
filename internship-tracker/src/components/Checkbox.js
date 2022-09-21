import Moment from 'moment';
import React, { useState } from 'react';

function Checkbox(props){
    const formatDate = Moment().format('MM-DD-YYYY')
    const emptyDate = '__________'
    const [dateAppText, setAppText] = useState(emptyDate)
    const [dateOAText, setOAText] = useState(emptyDate)
    const [dateInterviewText, setInterviewText] = useState(emptyDate)
    const [dateRejectText, setRejectText] = useState(emptyDate)
    const [dateOfferText, setOfferText] = useState(emptyDate)

    const handleAppChange = event =>{
        if (event.target.checked){
            setAppText(formatDate);
        }
        else{
            setAppText(emptyDate);
        }
    };

    const handleOAChange = event =>{
        if (event.target.checked){
            setOAText(formatDate);
        }
        else{
            setOAText(emptyDate);
        }
    };

    const handleInterviewChange = event =>{
        if (event.target.checked){
            setInterviewText(formatDate);
        }
        else{
            setInterviewText(emptyDate);
        }
    };

    const handleRejectChange = event =>{
        if (event.target.checked){
            setRejectText(formatDate);
        }
        else{
            setRejectText(emptyDate);
        }
    };

    const handleOfferChange = event =>{
        if (event.target.checked){
            setOfferText(formatDate);
        }
        else{
            setOfferText(emptyDate);
        }
    };

    return(
        
        <h4>

            <td>{props.text}</td>
            <td><input type="checkbox" onChange={handleAppChange}/> {dateAppText} </td>
            <td><input type="checkbox" onClick={handleOAChange}/>{dateOAText}</td>
            <td><input type="checkbox" onClick={handleInterviewChange}/>{dateInterviewText}</td>
            <td><input type="checkbox" onClick={handleRejectChange}/>{dateRejectText}</td>
            <td><input type="checkbox" onClick={handleOfferChange}/>{dateOfferText}</td>
    
        </h4>
    );
}

export default Checkbox