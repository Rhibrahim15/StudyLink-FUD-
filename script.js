window.addEventListener('load', () => {
  const splash = document.getElementById('splash');

  // Delay for 3.5 seconds to allow full animations
  setTimeout(() => {
    splash.classList.add('fade-out'); // Start fade-out animation

    // Wait for fade-out animation to complete
    setTimeout(() => {
      splash.style.display = 'none'; // Hide splash screen

      // Redirect to the next page
      window.location.href = 'pages/auth.html';
    }, 800); // Match this with fade-out animation duration
  }, 3500); // 3500ms for splash screen visibility
});