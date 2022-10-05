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
    internshipData.sort((a, b) => b.application-a.application || b.oa-a.oa || b.interview-a.interview || b.offer-a.offer || a.rejected - b.rejected)
    localStorage.setItem('myData', JSON.stringify(internshipData))
}

export default updateJSON