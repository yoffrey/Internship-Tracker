import checkLocalStorage from './checkLocalStorage';

function updateJSON(companyName, boxCol, formatDate, checked) {
    let internshipData = checkLocalStorage()
    if (checked) {
        internshipData[companyName][boxCol][0] = '0';
        internshipData[companyName][boxCol][1] = '';
    }
    else {
        internshipData[companyName][boxCol][0] = '1';
        internshipData[companyName][boxCol][1] = formatDate;
    }
    localStorage.setItem('myData.json', JSON.stringify(internshipData))
    checkLocalStorage()
}

export default updateJSON