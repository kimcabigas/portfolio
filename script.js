console.log("Portfolio Loaded");

// DARK MODE TOGGLE
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("darkMode", "enabled");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("darkMode", "disabled");
    }
});
