import checkLocalStorage from './checkLocalStorage';
import autoSort from './sort';

function updateJSON(index, boxCol, checked) {
    let internshipData = checkLocalStorage()
    if (checked == null) {
        internshipData[index][boxCol] = null;     
    }
    else {
        internshipData[index][boxCol] = checked;
    }
    internshipData.sort((a, b) => a.rejected>b.rejected)
    console.log(internshipData)
    localStorage.setItem('myData', JSON.stringify(internshipData))
    // internshipData = autoSort(index, boxCol, checked)
    // localStorage.setItem('myData.json', JSON.stringify(internshipData))
}

export default updateJSON