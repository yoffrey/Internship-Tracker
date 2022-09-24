import internshipData from './../internshipData.json'
import Cookies from 'js-cookie';

function updateJSON(companyName, boxCol, formatDate, checked) {
    if (checked) {
        internshipData[companyName][boxCol][0] = '0';
        internshipData[companyName][boxCol][1] = '__________';
    }
    else {
        internshipData[companyName][boxCol][0] = '1';
        internshipData[companyName][boxCol][1] = formatDate;
    }
}

export default updateJSON