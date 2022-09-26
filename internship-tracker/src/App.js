import checkLocalStorage from './components/checkLocalStorage';
import Box from './components/Box';
import { useEffect } from 'react';

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
 
  let internshipData = checkLocalStorage()
  
  return (
    <div>
      <div className="App" style={{display: "flex"}}>
        <div id='singInDiv' style={{marginLeft: "auto"}}></div>
      </div>
      <h2>Internship Application Tracker</h2>
        <table class="center">
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
            <td><div><Box boxInfo = {{'a': item.Application, 'b': i, 'c': 'Application'}}/></div></td>
            <td><div><Box boxInfo = {{'a': item.OA, 'b': i, 'c': 'OA'}}/></div></td>
            <td><div><Box boxInfo = {{'a': item.Interview, 'b': i, 'c': 'Interview'}}/></div></td>
            <td><div><Box boxInfo = {{'a': item.Rejected, 'b': i, 'c': 'Rejected'}}/></div></td>
            <td><div><Box boxInfo = {{'a': item.Offer, 'b': i, 'c': 'Offer'}}/></div></td>
            </>
          ))}
          <span></span>
        </table>
    </div>
  );
}

export default App;
