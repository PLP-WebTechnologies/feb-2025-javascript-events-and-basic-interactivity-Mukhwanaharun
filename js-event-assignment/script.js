console.log("JavaScript loaded!");

// Change background color on button click
document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "lightpink";
});

// Double click action
document.getElementById("doubleClickBtn").addEventListener("dblclick", () => {
  alert("You double-clicked me!");
});

// Hover effects
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "orange";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightgray";
});

// Keypress detection
document.addEventListener("keypress", (event) => {
  console.log(Key, pressed, $,{event,key});
});

// Image gallery
function changeImage(el) {
  document.getElementById("mainImage").src = el.src;
}

// Form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let valid = true;

  // Reset errors
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Email format check
  if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    valid = false;
  }

  // Password length check
  if (password.value.length < 8) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});