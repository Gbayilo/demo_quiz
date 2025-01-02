document.addEventListener("DOMContentLoaded", () => {
    // Password toggle functionality
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("toggle-password");
  
    togglePasswordBtn.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
  
      // Change the icon/text for the button
      togglePasswordBtn.textContent = type === "password" ? "👁️" : "🙈";
    });
  
    // Basic form validation
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (!email || !password) {
        e.preventDefault();
        alert("Please fill in all fields.");
      } else if (password.length < 6) {
        e.preventDefault();
        alert("Password must be at least 6 characters long.");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Define a demo user for testing
    const demoUser = {
      email: "demoUser@example.com",
      username: "demoUser",
      password: "demoPass123"
    };
  
    // Select the login form
    const loginForm = document.getElementById("login-form");
  
    // Handle form submission
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get the input values
      const enteredEmailOrUsername = document.getElementById("email").value.trim();
      const enteredPassword = document.getElementById("password").value.trim();
  
      // Validate credentials
      const isValid =
        (enteredEmailOrUsername === demoUser.email || enteredEmailOrUsername === demoUser.username) &&
        enteredPassword === demoUser.password;
  
      if (isValid) {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "dashboard.html"; // Redirect to the quiz dashboard
      } else {
        alert("Invalid email/username or password. Please try again.");
      }
    });
  });
  