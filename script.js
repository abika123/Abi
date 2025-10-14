// Hardcoded credentials for demo
const validUsername = "user";
const validPassword = "pass123";

document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault(); // prevent form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if(username === validUsername && password === validPassword){
    message.style.color = "green";
    message.textContent = "Login successful! Welcome " + username + ".";
    // Optionally, redirect here: window.location.href = "welcome.html";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});