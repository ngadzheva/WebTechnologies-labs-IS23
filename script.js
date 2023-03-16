window.onload = function () {

}

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
//     headerRow.append(th);
//     th.after(deleteHeader);

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
}());

function deleteStudent(event) {
    const elementToDelete = event.target.parentElement.parentElement;
    elementToDelete.parentElement.removeChild(elementToDelete);
}

function addStudent(event) {
    event.preventDefault();

    const firstName = document.getElementsByName('first-name')[0];
    console.log(firstName)
    const lastName = document.getElementsByName('last-name')[0];
    const fn = document.getElementsByName('fn')[0];
    const mark = document.getElementsByName('mark')[0];

    const studentInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        fn: fn.value,
        mark: mark.value
    };

    appendTable(studentInfo);

    firstName.value = '';
    lastName.value = '';
    fn.value = '';
    mark.value = '';
}

function appendTable(student) {
    const tbody = document.getElementsByTagName('tbody')[0];

    const tr = document.createElement('tr');
    tr.setAttribute('class', 'student');

    const firstName = document.createElement('td');
    firstName.innerHTML = student.firstName;

    const lastName = document.createElement('td');
    lastName.innerHTML = student.lastName;

    const fn = document.createElement('td');
    fn.innerHTML = student.fn;

    const mark = document.createElement('td');
    mark.innerHTML = student.mark;

    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', deleteStudent);
    deleteTd.appendChild(deleteBtn);

    tr.append(firstName, lastName, fn, mark, deleteTd);

    tbody.append(tr);
}