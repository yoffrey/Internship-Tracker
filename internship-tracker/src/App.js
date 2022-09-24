import internshipData from './internshipData.json'
import Box from './components/Box';

function App() {
  return (
    <div>
      <h2>Internship Application Tracker</h2>
          <table>
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
                <td>{Company}</td>
                <td><Box boxInfo = {{'a': internshipData[Company].Application, 'b': Company, 'c': 'Application'}}/></td>
                <td><Box boxInfo = {{'a': internshipData[Company].OA, 'b': Company, 'c': 'OA'}}/></td>
                <td><Box boxInfo = {{'a': internshipData[Company].Interview, 'b': Company, 'c': 'Interview'}}/></td>
                <td><Box boxInfo = {{'a': internshipData[Company].Rejected, 'b': Company, 'c': 'Rejected'}}/></td>
                <td><Box boxInfo = {{'a': internshipData[Company].Offer, 'b': Company, 'c': 'Offer'}}/></td>
                </>
              ))}
            </table>
    </div>
  );
}

export default App;
