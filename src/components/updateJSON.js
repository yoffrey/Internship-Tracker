import checkLocalStorage from './checkLocalStorage';

function updateJSON(index, boxCol, checked) {
    var internshipData = checkLocalStorage()
    if (checked == null) {
        internshipData[index][boxCol] = null;     
    }
    else {
        internshipData[index][boxCol] = checked;
    }
    internshipData.sort((a,b) => a.rejected-b.rejected || b.offer-a.offer || b.application-a.application || b.oa-a.oa || b.interview-a.interview)
    localStorage.setItem('myData', JSON.stringify(internshipData))
}

export default updateJSON