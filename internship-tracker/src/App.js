import Checkbox from './components/Checkbox'
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
              <tr key={item.Company}>
                <td>{item.Company}</td>
                
                <td><Box /></td>
                <td><Box /></td>
                <td><Box /></td>
                <td><Box /></td>
                <td><Box /></td>
              </tr>
              ))}
          </table>
              
              
      
    </div>
  );
}

export default App;
