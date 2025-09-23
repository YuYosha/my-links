//var toggleBtn = document.getElementByld("theme-toggle-btn");
//let toggleBtn = document.getElementByld("theme-toggle-btn");
//const toggleBtn = document.getElementByld("theme-toggle-btn");
//const PI = 3.14; 

const toggleBtn = document.querySelector(".theme-toggle-btn");
const icon = document.querySelector(".theme-toggle-btn i");

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

toggleBtn.addEventListener("click", toggleTheme);
    // Fixed: Removed misplaced code block and else statement
    // (No code needed here, as the logic is already handled in toggleTheme function above. This block was erroneous.)
//alert("CLICK YESSIR");
