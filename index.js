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
  console.log(123455);
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
var messageElement = "aboutMe";
// printLetterByLetter(messageElement, message, 10);

// Education & Liecenses

// put this in function
var frontendBootcamp = document.querySelector(".bit");
console.log(frontendBootcamp);
frontendBootcamp.addEventListener("mouseenter", () => {
  var bitSlide = document.createElement("div");
  bitSlide.classList.add("bitSlide");
  bitSlide.setAttribute("id", "sideHover");
  var bitSertificateImg = document.createElement("img");
  $(bitSertificateImg).attr("src", "./images/education/BITsertifikat.png");
  var detailsEducationLiecenses = document.querySelector(
    ".detailsEducationLiecenses"
  );
  bitSlide.append(bitSertificateImg);
  detailsEducationLiecenses.append(bitSlide);
});
frontendBootcamp.addEventListener("mouseleave", () => {
  var bitSlide = document.querySelector("#sideHover");
  bitSlide.remove();
});


function sideHover(imagePath, pageClassToAppear) {
    var div = document.createElement("div");
    div.setAttribute("id", "sideHover");
    var image = document.createElement("img");
    $(image).attr("src", imagePath);
    var pageToAppera = document.querySelector(pageClassToAppear);
  div.append(image);
  pageToAppera.append(div);
}
function removeSideHover() {
    var x = document.querySelector("#sideHover");
    x.remove();
}

var grfMaster = document.querySelector(".grf");
grfMaster.addEventListener("mouseenter", () => {
  sideHover(
    "./images/education/grfMaster.png",
    ".detailsEducationLiecenses"
  );
});
grfMaster.addEventListener("mouseleave", () => {
    removeSideHover()
});

var fimMaster = document.querySelector(".fim");
fimMaster.addEventListener("mouseenter", () => {
  sideHover(
    "./images/education/fimMaster.png",
    ".detailsEducationLiecenses"
  );
});
fimMaster.addEventListener("mouseleave", () => {
    removeSideHover()
});

var iksLicence = document.querySelector(".iks");
iksLicence.addEventListener("mouseenter", () => {
  sideHover(
    "./images/education/iksLicence.png",
    ".detailsEducationLiecenses"
  );
});
iksLicence.addEventListener("mouseleave", () => {
    removeSideHover()
});