import checkLocalStorage from './checkLocalStorage';

function removeCompany(i) {
    var internshipData = checkLocalStorage()
    if (i > -1){
        internshipData.splice(i, 1)
    }
    internshipData.sort((a,b) => a.rejected-b.rejected || b.application-a.application || b.oa-a.oa || b.interview-a.interview ||  b.offer-a.offer)
    localStorage.setItem('myData', JSON.stringify(internshipData))
}

export default removeCompany