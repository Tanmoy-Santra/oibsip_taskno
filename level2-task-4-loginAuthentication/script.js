let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let signupBtn = document.querySelector("#signupbtn")
let loginBtn = document.querySelector("#loginbtn")
signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});
loginBtn.addEventListener('click', () => {
    let emailInput = document.querySelector(".login-box .email");
    let passwordInput = document.querySelector(".login-box .password");

    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert("Please fill in all fields.");
        return;
    }
    if (emailInput.value.indexOf("@gmail.com") === -1) {
        alert("Please enter a valid Gmail email address.");
        return;
    }
    alert("You've successfully logged in!");
	location.reload();
});

signupBtn.addEventListener('click', () => {
    let nameInput = document.querySelector(".signup-box .name");
    let emailInput = document.querySelector(".signup-box .email");
    let passwordInput = document.querySelector(".signup-box .password");
    let confirmPasswordInput = document.querySelectorAll(".signup-box .password")[1];

    if (!nameInput.value.trim() || !emailInput.value.trim() || !passwordInput.value.trim() || !confirmPasswordInput.value.trim()) {
        alert("Please fill in all fields!");
        return;
    }	

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match");
        return;
    }

    if (emailInput.value.indexOf("@gmail.com") === -1) {
        alert("Please enter a valid Gmail email address.");
        return;
    }
    alert("You've successfully signed up!");	
	location.reload();
});
