const showStudents = studentsData => {
    studentsData.students.forEach(student => {
        appendTable(student);
    });
};

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

    sendStudentData(studentInfo);
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

function deleteStudent(event) {
    const studentDeleteBtn = event.target;
    const studentFn = studentDeleteBtn.parentNode.previousElementSibling.previousElementSibling.innerHTML;

    deleteStudentByFn(studentFn);
   
    const studentToDelete = studentDeleteBtn.parentElement.parentElement;
    studentToDelete.parentElement.removeChild(studentToDelete);
}

// module.exports = { showStudents, addStudent };