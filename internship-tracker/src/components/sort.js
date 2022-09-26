import checkLocalStorage from './checkLocalStorage';

function autoSort(index, boxCol, formatDate, checked) {
    let internshipData = checkLocalStorage()

    if (boxCol == "Application"){
        if (checked){

        }
        return internshipData
    }
    else if (boxCol == 'OA'){
        return internshipData
    }
    else if (boxCol == 'Interview'){
        return internshipData
    }
    else if (boxCol == 'Rejected'){
        if (checked){
            return internshipData
        }
        else {
            let i=index+1
            while (internshipData[index][boxCol][0] > internshipData[i][boxCol][0] && internshipData[index][boxCol][1] > internshipData[i][boxCol][1] && i<internshipData.length-1){
                i+=1
            }
            const element = internshipData.splice(index, 1)[0];
            internshipData.splice(i, 0, element);
        }
    }
    else if (boxCol == 'Offer'){
        return internshipData
    }
    return internshipData
}

export default autoSort