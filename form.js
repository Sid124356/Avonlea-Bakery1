document.addEventListener("DOMContentLoaded", function() {
    validateForm();
});

function validateForm() {
    const submitButton = document.querySelector(".button");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const orderInput = document.getElementById("order");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
    
        if (!emailInput.value || !phoneInput.value || !orderInput.value || !lastNameInput.value || !firstNameInput.value) {
            submitButton.textContent = "Please fill in all fields";
            submitButton.style.backgroundColor = "red";
        } else if (!emailInput.value.includes("@")) {
            submitButton.textContent = "Email is not valid";
            submitButton.style.backgroundColor = "red";
        } else if (!phoneInput.value.match(/^\d{3}-\d{3}-\d{4}$/)) {
            submitButton.textContent = "Phone Number should be in the format xxx-xxx-xxxx";
            submitButton.style.backgroundColor = "red";
        } else {
            submitButton.textContent = "Form submitted successfully!";
            submitButton.style.backgroundColor = "green";
            document.getElementById("myForm").submit();
        }
    });
}
