
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");

const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

if (storedUsername && storedPassword) {
  existingBtn.style.display = "inline-block";
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = usernameInput.value.trim();
  const pass = passwordInput.value;

  if (!name || !pass) {
    alert("Enter both fields!");
    return;
  }

  setTimeout(() => {
  alert(`Logged in as ${name}`);
}, 0);

  if (checkbox.checked) {
    localStorage.setItem("username", name);
    localStorage.setItem("password", pass);
    existingBtn.style.display = "inline-block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

});

existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
  setTimeout(() => {
    alert(`Logged in as ${savedUser}`);
  }, 0);
}

});
