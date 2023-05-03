// const sendRequest = require('../utils/fetch-utils');
// const showStudents = require('../utils/show-students');
// const handleError = require('../utils/handle-error');

const getStudentsData = () => {
    const url = 'http://localhost:3001/students';

    const options = {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    sendRequest(url, options, showStudents, handleError);
};

const sendStudentData = studentData => {
    const url = 'http://localhost:3001/students';

    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
    };

    sendRequest(url, options, handleSuccessMessage, handleError);
}

const deleteStudentByFn = studentFn => {
    const url = `http://localhost:3001/students/${studentFn}`;

    const options = {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    sendRequest(url, options, handleSuccessMessage, handleError);
};

// module.exports = { getStudentsData };