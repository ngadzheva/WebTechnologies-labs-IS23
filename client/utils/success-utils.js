const handleSuccessMessage = message => {
    const label = document.getElementById('success-message');
    label.innerHTML = message.message;
    label.style.color = 'green';
    label.style.display = 'block';
};