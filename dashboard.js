document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check if user has a preferred theme saved in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.querySelector(".fa-moon").style.display = "none";
    themeToggle.querySelector(".fa-sun").style.display = "inline-block";
  }

  // Toggle Theme on Button Click
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Update the icon
    const moonIcon = themeToggle.querySelector(".fa-moon");
    const sunIcon = themeToggle.querySelector(".fa-sun");

    if (body.classList.contains("dark-theme")) {
      moonIcon.style.display = "none";
      sunIcon.style.display = "inline-block";
      localStorage.setItem("theme", "dark"); // Save preference
    } else {
      moonIcon.style.display = "inline-block";
      sunIcon.style.display = "none";
      localStorage.setItem("theme", "light"); // Save preference
    }
  });
});