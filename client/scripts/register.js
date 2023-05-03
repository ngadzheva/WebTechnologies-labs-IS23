(function() {
    /**
     * Get the register button
     */
    var register = document.getElementById('register');
  
    /**
     * Listen for click event on the register button
     */
    register.addEventListener('click', sendForm);
  })();
  
  /**
  * Handle the click event by sending an asynchronous request to the server
  * @param {*} event
  */
  function sendForm(event) {
    /**
     * Prevent the default behavior of the clicking the form submit button
     */
    event.preventDefault();
  
    /**
     * Get the values of the input fields
     */
    var userName = document.getElementById('user-name').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var email = document.getElementById('email').value;
  
    /**
     * Create an object with the user's data
     */
    var user = {
      username: userName,
      password: password,
      confirmPassword: confirmPassword,
      email: email
    };
  
    /**
     * Send POST request with user's data to registration.php
     */
    register(user);
  }
