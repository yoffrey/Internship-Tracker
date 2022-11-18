import checkLocalStorage from './checkLocalStorage';

function addCompany(name) {
    var set = {}
    set['company'] = name
    set['application'] = null
    set['oa'] = null
    set['interview'] = null
    set['rejected'] = null
    set['offer'] = null
    set['link'] = ''
    var internshipData = checkLocalStorage()
    internshipData.push(set)
    internshipData.sort((a,b) => a.rejected-b.rejected || b.application-a.application || b.oa-a.oa || b.interview-a.interview ||  b.offer-a.offer)
    localStorage.setItem('myData', JSON.stringify(internshipData))
}

export default addCompany