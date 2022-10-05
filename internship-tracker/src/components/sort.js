import checkLocalStorage from './checkLocalStorage';

function autoSort(index, boxCol, checked) {
    // boxCol = "Rejected"
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
        if (checked == null){
            // Goes back to the top
            return internshipData
        }
        else {
            // if checked == '1'
            internshipData.sort((a, b) => a.Rejected - b.Rejected);
            return internshipData
        }
    }
    else if (boxCol == 'Offer'){
        return internshipData
    }
    return internshipData
}

export default autoSort