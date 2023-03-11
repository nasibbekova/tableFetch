import {
    deleteData,
    editeData,
    getData,
    postData
} from "./modules/helpers"


getData().then(data => reload(data, tbody))

form.onsubmit = (event) => {
    event.preventDefault()

    let st = {
        id: Math.random(),
    }

    let fm = new FormData(form)
    fm.forEach((value, key) => {
        st[key] = value
    })

    if (st.name.length > 0) {
        postData(st)
            .then(res => {
                if (res.ok) {
                    getData().then(data => reload(data, tbody))
                }
            })
    }
}

let form = document.forms.user
// let cont = document.querySelector('container')

function reload (arr, place) {
    place.innerHTML  = ""
    for(let item of arr){
    // createElements
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let No = document.createElement('th')
    let studentsName = document.createElement('th')
    let date = document.createElement('th')
    let action = document.createElement('th')
    let tbody = document.createElement('tbody')
    let tr2 = document.createElement('tr')
    let td = document.createElement('td')
    let indexNumber = document.createElement('td')
    let name = document.createElement('td')
    let age = document.createElement('td')
    let td2 = document.createElement('td')
    let btnEdit = document.createElement('button')
    let btnDel = document.createElement('btnDel')
    let imgEdit = document.createElement('img')
    let imgDel = document.createElement('img')
    // class
    btnEdit.classList.add('edit')
    btnDel.classList.add('del')
    // innerHTML
    imgDel.src = './img/del.svg'
    imgEdit.src = './img/edit-icon.png'
    No.innerHTML = 'No'
    studentsName.innerHTML = "Student's name"
    date.innerHTML = 'Date of birth'
    action.innerHTML = "Action"

    indexNumber.innerHTML = item.length
    name.innerHTML = item.name
    age.innerHTML = item.age

    // append
    table.append(thead, tbody )
    thead.append(tr, No, studentsName, date, action)
    tbody.append(tr2, td, name, age)


    imgDel.onclick = () => {
        deleteData(item.id)
            .then(res => {
                if (res.ok) {
                    getData().then(data => reload(data, tbody))
                }
            })
    }
}
}
