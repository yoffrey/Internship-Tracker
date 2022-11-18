import checkLocalStorage from './checkLocalStorage';

function updateLink(index, link) {
    var internshipData = checkLocalStorage()
    internshipData[index]['link'] = link;
    localStorage.setItem('myData', JSON.stringify(internshipData))
}

export default updateLink