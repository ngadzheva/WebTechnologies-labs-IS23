// const { getStudentsData } = require("./services/students-service");
// const { addStudent } = require('./utils/students-utils');

(function() {
    const studentsHeader = document.getElementsByTagName('header')[0];
    console.log(studentsHeader);
    studentsHeader.innerHTML += ' Marks';

    const headerRow = document.getElementById('header-row');
    const deleteHeader = document.getElementById('delete-header');

    const th = document.createElement('th');
    const thText = document.createTextNode('Mark');
    th.appendChild(thText);

    console.log(th);

    deleteHeader.before(th);

    const fnTd = document.querySelector('#fn');
    const td = document.createElement('td');
    td.setAttribute('id', 'mark');
    td.innerHTML = '6';

    fnTd.after(td);

    const deleteBtn = document.getElementById('delete').children[0];
    console.log(deleteBtn);
    deleteBtn.addEventListener('click', deleteStudent)

    const addBtn = document.getElementById('submit');
    addBtn.addEventListener('click', addStudent);

    getStudentsData();
}());