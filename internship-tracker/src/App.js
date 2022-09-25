import checkLocalStorage from './components/checkLocalStorage';
import Box from './components/Box';

function App() {
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

          </table>
    </div>
  );
}

export default App;
