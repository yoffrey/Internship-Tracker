import checkLocalStorage from './checkLocalStorage';

function updateJSON(index, boxCol, checked) {
    var internshipData = checkLocalStorage()
    if (checked == null) {
        internshipData[index][boxCol] = null;     
    }
    else {
        internshipData[index][boxCol] = checked;
    }
    internshipData.sort(function(a,b){
        return (new Date(b.application) - new Date(a.application) && new Date(b.oa) - new Date(a.oa))
    })
    localStorage.setItem('myData', JSON.stringify(internshipData))
}

export default updateJSON