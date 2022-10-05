import internshipData from './../internshipData.json'

function checkLocalStorage(){
    if (localStorage.getItem('myData') == null){
        console.log('Data from default')
        return internshipData
    }
    else {
        console.log('Data from local storage')
        return JSON.parse(localStorage.getItem('myData'))
    }
}

export default checkLocalStorage