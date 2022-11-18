import { useEffect } from 'react';
import React, { useState } from 'react';
import checkLocalStorage from './components/checkLocalStorage';
import GenTable from './components/GenTable';

function App() {

  function handleCallbackResponse(response){
    console.log("encoded jwt id token: " + response.credential)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
    client_id: '111882747760-7ripd0hh6hpq5tuistbd79qg65nk7fb9.apps.googleusercontent.com',
    callback: handleCallbackResponse
  }); 

  google.accounts.id.renderButton(
    document.getElementById("singInDiv"),
    {theme: 'outline', size: 'large'}
    );
  }, []);

  return (
    <div>
      <div className="App" style={{display: "flex"}}>
        <div id='singInDiv' style={{marginLeft: "auto"}}></div>
      </div>
      <h2>Internship Application Tracker</h2>
      <div><GenTable /></div>
    </div>
  );
}

export default App;
