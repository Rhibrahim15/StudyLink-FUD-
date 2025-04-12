document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showLoginBtn = document.getElementById("show-login");
  const showSignupBtn = document.getElementById("show-signup");

  // Toggle Forms
  showLoginBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    showLoginBtn.classList.add("active");
    showSignupBtn.classList.remove("active");
  });

  showSignupBtn.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    showSignupBtn.classList.add("active");
    showLoginBtn.classList.remove("active");
  });

  // Dummy Logic
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Logging in...");
    window.location.href = "dashboard.html";
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signing up...");
    window.location.href = "dashboard.html";
  });

  // Password Match Validation
  const password = document.querySelector('#signup-form input[type="password"]:nth-of-type(1)');
  const confirmPassword = document.querySelector('#signup-form input[type="password"]:nth-of-type(2)');
  const signupButton = document.querySelector('#signup-form button');

  if (password && confirmPassword) {
    confirmPassword.addEventListener("input", () => {
      if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = "2px solid red";
        signupButton.disabled = true;
      } else {
        confirmPassword.style.border = "2px solid green";
        signupButton.disabled = false;
      }
    });
  }

  // Theme Toggle
  const toggleTheme = document.getElementById("theme-toggle");
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const forgotPasswordForm = document.getElementById("forgot-password-form");

  // Handle Forgot Password Form Submission
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("forgot-email").value;

      // Simulate sending a reset link
      alert(`Reset link sent to ${email}!`);

      // Redirect back to login page
      window.location.href = "auth.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const forgotPasswordForm = document.getElementById("forgot-password-form");

  // Handle Forgot Password Form Submission
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("forgot-email").value;

      // Simulate sending a reset link
      alert(`Reset link sent to ${email}!`);

      // Redirect back to login page
      window.location.href = "auth.html";
    });
  }
});
fetch('/api/forgot-password', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      alert('Reset link sent successfully!');
      window.location.href = 'auth.html';
    } else {
      alert('Failed to send reset link. Please try again.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  });