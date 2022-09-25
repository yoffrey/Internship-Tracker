import checkLocalStorage from './components/checkLocalStorage';
import Box from './components/Box';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

function App() {
  const clientId = '111882747760-7ripd0hh6hpq5tuistbd79qg65nk7fb9.apps.googleusercontent.com'

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });

  const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

  let internshipData = {}
  internshipData = checkLocalStorage()
  
  return (
    
    <div>
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
              {Object.keys(internshipData).map((Company, i) => (
                <><tr key={Company}></tr>
                <td><div>{Company}</div></td>
                <td><div><Box boxInfo = {{'a': internshipData[Company].Application, 'b': Company, 'c': 'Application'}}/></div></td>
                <td><div><Box boxInfo = {{'a': internshipData[Company].OA, 'b': Company, 'c': 'OA'}}/></div></td>
                <td><div><Box boxInfo = {{'a': internshipData[Company].Interview, 'b': Company, 'c': 'Interview'}}/></div></td>
                <td><div><Box boxInfo = {{'a': internshipData[Company].Rejected, 'b': Company, 'c': 'Rejected'}}/></div></td>
                <td><div><Box boxInfo = {{'a': internshipData[Company].Offer, 'b': Company, 'c': 'Offer'}}/></div></td>
                </>
              ))}
              <span></span>

          </table>
    </div>
  );
}

export default App;
