import checkLocalStorage from './checkLocalStorage';
import autoSort from './sort';

function updateJSON(index, boxCol, formatDate, checked) {
    let internshipData = checkLocalStorage()
    if (checked) {
        internshipData[index][boxCol][0] = '0';
        internshipData[index][boxCol][1] = '';        
    }
    else {
        internshipData[index][boxCol][0] = '1';
        internshipData[index][boxCol][1] = formatDate;
    }
    localStorage.setItem('myData.json', JSON.stringify(internshipData))
    internshipData = autoSort(index, boxCol, formatDate, checked)
    localStorage.setItem('myData.json', JSON.stringify(internshipData))
    console.log(internshipData)
}

export default updateJSON