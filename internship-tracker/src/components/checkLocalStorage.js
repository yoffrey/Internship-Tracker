import internshipData from './../internshipData.json'

function checkLocalStorage(){
    if (localStorage.getItem('myData') == null){
        return internshipData
    }
    else {
        return JSON.parse(localStorage.getItem('myData'))
    }
}

export default checkLocalStorage