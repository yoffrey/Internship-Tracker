import internshipData from './../internshipData.json'

function checkLocalStorage(){
    if (localStorage.getItem('myData.json') == null){
        return internshipData
    }
    else {
        return JSON.parse(localStorage.getItem('myData.json'))
    }
}

export default checkLocalStorage