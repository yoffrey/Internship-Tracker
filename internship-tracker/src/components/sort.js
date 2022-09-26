import checkLocalStorage from './checkLocalStorage';

function autoSort(index, boxCol, formatDate, checked) {
    let internshipData = checkLocalStorage()

    if (boxCol == "Application"){
        if (checked){

        }
        console.log(checked)
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
        }
        else {
            console.log(index)
            internshipData.push(internshipData.splice(index, 1)[0])
        }
    }
    else if (boxCol == 'Offer'){
        return internshipData
    }
    return internshipData
}

export default autoSort