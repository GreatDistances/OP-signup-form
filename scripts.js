const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-conf");
const matchPassword = document.getElementById("match");
const passwordReq = document.getElementById("form-req-password");

const tel = document.getElementById("phone");
const telReq = document.getElementById("form-req-tel");

tel.addEventListener("input", (event) => {
    const value = event.target.value

    const telRegex = /^[0-9]*$/;
    
    if (value.length && !telRegex.test(value)) {
        telReq.classList.add('red');
        telReq.classList.remove('hidden');
    } else {
        telReq.classList.remove('red');
        telReq.classList.add('hidden');
    }
});

password.addEventListener("input", (event) => {
    const value = event.target.value

    const passwordRegex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    
    if (value.length && !passwordRegex.test(value)) {
        passwordReq.style.color = "red";
    } else if (value.length && passwordRegex.test(value)) {
        passwordReq.style.color = "blue";
    } else {
        passwordReq.style.color = "#333";
    }
});


password.addEventListener("input", (event) => {
    const value = event.target.value
    
    if (value.length && value != confirmPassword.value) {
      matchPassword.classList.remove('hidden')
    } else {
      matchPassword.classList.add('hidden')
    }
  })

confirmPassword.addEventListener("input", (event) => {
  const value = event.target.value
  
  if (value.length && value != password.value) {
    matchPassword.innerText = "Passwords do not match!";
    matchPassword.style.color = "red";
    matchPassword.classList.remove('hidden')
  } else {
    matchPassword.classList.add('hidden')
  }
})

function submitForm(event) {
    event.preventDefault();
    alert('Form submitted!');
    document.getElementById("form-signup").reset();
    passwordReq.style.color = "#333";
}