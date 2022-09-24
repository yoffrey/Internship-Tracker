import internshipData from './internshipData.json'
import Box from './components/Box'

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
              
              {internshipData.map((item) => (
                <tr companyName={item.Company}>
                  <td>{item.Company}</td>
                  <td><Box boxInfo = {item.Application}/></td>
                  <td><Box boxInfo = {item.OA}/></td>
                  <td><Box boxInfo = {item.Interview}/></td>
                  <td><Box boxInfo = {item.Rejected}/></td>
                  <td><Box boxInfo = {item.Offer}/></td>
                </tr>
              ))} 
          </table>
    </div>
  );
}

export default App;
