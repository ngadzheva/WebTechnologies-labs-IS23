const handleError = error => {
    const errorLabel = document.getElementById('errors');

    errorLabel.innerHTML = error;
    errorLabel.style.color = 'red';
};

// module.exports = { handleError };