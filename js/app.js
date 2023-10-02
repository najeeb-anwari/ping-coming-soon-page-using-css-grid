const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = form.querySelector("#email");
    const emailFormGroup = email.parentElement;
    const emailInvalidFeedback  = emailFormGroup.querySelector(".invalid-feedback");

    const emailValue = email.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(emailValue);
    if(!isValidEmail){
        emailFormGroup.classList.add("invalid");
        if(emailValue === "") {
            emailInvalidFeedback.innerHTML = "Whoops! It looks like you forgot to add your email";
        }
        else {
            emailInvalidFeedback.innerHTML = "Please provide a valid email address";
        }
        return;
    }
    else {
        emailFormGroup.classList.remove("invalid");
    }


    form.submit();  

});

