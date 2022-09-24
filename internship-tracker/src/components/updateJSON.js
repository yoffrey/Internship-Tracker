import internshipData from './../internshipData.json'

function updateJSON(boxInfo, formatDate, setBoxChecked) {
    if (setBoxChecked) {
        boxInfo['boxInfo'][0] = '0';
    }
    else {
        boxInfo['boxInfo'][0] = '1';
    }
    boxInfo['boxInfo'][1] = formatDate;
    console.log(internshipData)
}

export default updateJSON