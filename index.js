var x = document.querySelectorAll(".navigation>a");

x.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("submenu");
  });

  e.addEventListener("mouseout", () => {
    e.classList.remove("submenu");
  });
});

var hamburger = document.querySelector(".hamburger");
console.log(hamburger);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('clicked')
    x.forEach((e) => {
        e.classList.toggle('hamburgerToggle')
    })
})
