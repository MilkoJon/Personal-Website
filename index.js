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
  hamburger.classList.toggle("clicked");
  x.forEach((e) => {
    e.classList.toggle("hamburgerToggle");
  });
});

// Personal Info // About Me
function printLetterByLetter(destination, message, speed) {
    console.log(123455)
  var i = 0;
  var interval = setInterval(function () {
    document.getElementById(destination).innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, speed);
}
var message =
  "“Civil Engineer with international experience looking for entry-level positions in the IT industry. Highly motivated, just finished an intensive JavaScript React bootcamp. Excited for new opportunities, ready to dedicate and always eager to learn more and improve as much as possible.     Why do I see myself in the IT industry? I like challenges and enjoy solving problems. All my previous contacts with programming I enjoyed and it was something that drives me. I am also a big math lover. I have successfully created buildings in the construction industry, why not do the same in the IT industry?”";
// var messageElement = document.getElementById("aboutMe");
// console.log(messageElement)

var messageElement = "aboutMe";
// printLetterByLetter(messageElement, message, 10);
