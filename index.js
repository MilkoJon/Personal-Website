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
if (document.URL.includes("index")) {
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
    "“Motivated and detail-oriented frontend developer with a recent bootcamp certification in JavaScript React. Skilled in building responsive and user-friendly single page applications. Passionate about programming and committed to staying up-to-date with the latest technologies and industry trends. As a civil engineer with a interanational experiance, I bring a unique perspective to problem-solving. Excited to apply my skills and creativity to a new career in the dynamic and innovative field of IT.  Why do I see myself in the IT industry? I like challenges and enjoy solving problems. All my previous contacts with programming I enjoyed and it was something that drives me. I am also a big math lover. I have successfully created buildings in the construction industry, why not do the same in the IT industry?";
  var messageElement = "aboutMe";
  printLetterByLetter(messageElement, message, 50);
}

// Education & Liecenses

if (document.URL.includes("educationLiecenses")) {
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

  var bitSertificate = document.querySelector(".bit");
  bitSertificate.addEventListener("mouseenter", () => {
    sideHover(
      "./images/education/BITsertifikat.png",
      ".detailsEducationLiecenses"
    );
  });
  bitSertificate.addEventListener("mouseleave", () => {
    removeSideHover();
  });

  var grfMaster = document.querySelector(".grf");
  grfMaster.addEventListener("mouseenter", () => {
    sideHover("./images/education/grfMaster.png", ".detailsEducationLiecenses");
  });
  grfMaster.addEventListener("mouseleave", () => {
    removeSideHover();
  });

  var fimMaster = document.querySelector(".fim");
  fimMaster.addEventListener("mouseenter", () => {
    sideHover("./images/education/fimMaster.png", ".detailsEducationLiecenses");
  });
  fimMaster.addEventListener("mouseleave", () => {
    removeSideHover();
  });

  var iksLicence = document.querySelector(".iks");
  iksLicence.addEventListener("mouseenter", () => {
    sideHover(
      "./images/education/iksLicence.png",
      ".detailsEducationLiecenses"
    );
  });
  iksLicence.addEventListener("mouseleave", () => {
    removeSideHover();
  });
}
// IT Career - project details

if (document.URL.includes("itCareer")) {
  function projectDetails(divClassToAppear) {
    var arg = arguments;
    var div = document.createElement("div");
    div.setAttribute("id", "projectDetails");
    for (let i = 1; i < arg.length; i++) {
      var details = document.createElement("p");
      details.innerHTML = arg[i];
      div.append(details);
      console.log(i);
    }
    var close = document.createElement("button");
    close.setAttribute("id", "closeProjectDetails")
    close.innerHTML = "Close";
    close.addEventListener("click", () => {
      removeProjectDetails()
      event.stopPropagation()
    })
    div.append(close);

    var toAppear = document.querySelector(divClassToAppear);
    toAppear.append(div);
  }
  function removeProjectDetails() {
    var x = document.querySelector("#projectDetails");
    x.remove();
  }

  var detailsMarvel = document.querySelector(".aboutMarvel");
  detail1 = 'React SPA that allows you to see the Marvel heroes, as well as to choose your team of favorite Marvels.'
  detail2 = 'To find your favorite heroes, use the search. All hero data shown is taken from the Marvel API.'
  detail3 = 'You can see more information about the hero by clicking the INFO button. Click the ADD button to add the selected hero to your team. It is not possible to select the same hero twice in the team. Also, if you try to add more than 4 heroes to the team, you will get a warning message. Heroes can be removed from the team by clicking the X button.'
  detail4 = "And don't worry, the My Team list can be saved even when the page is reloaded."
  detail5 = 'The application has a responsive design for desktop, tablet and phone. Bootstrap and SCSS were used to design the application.'
  detail6 = 'Material UI was used for the modals and the switch button.'
  detail7 = 'Data about selected team members are stored in DOM.'
  // detailsMarvel.addEventListener("mouseenter", () => {
  //   projectDetails(".aboutMarvel", detail1, detail2, detail3, detail4, detail5, detail6, detail7);
  // });
  // detailsMarvel.addEventListener("mouseleave", () => {
  //   removeProjectDetails();
  // });

  detailsMarvel.addEventListener("click", () => {
    projectDetails(".aboutMarvel", detail1, detail2, detail3, detail4, detail5, detail6, detail7);
  });
  

  var detailsTvShows = document.querySelector(".aboutTvShows");
  detail1 = 'BIT bootcamp project - Responsive website whose main purpose is to provide information to the users about TV shows.'
  detail2 = 'All data shown are fetched from TvMaze API.'
  detail3 = 'Top 50 TV shows are presented on landing page.'
  detail4 = "The user can use search box on the page to search for another shows."
  detail5 = "When the user clicks on the show, he's redirected to the Show Info Page."
  detail6 = 'Show Info Page provides more detailed information such as lists of seasons, episodes, cast, photos, etc.'
  // detailsTvShows.addEventListener("mouseenter", () => {
  //   projectDetails(".aboutPersonalWebsite", detail1, detail2, detail3, detail4, detail5, detail6, detail7);
  // });
  // detailsTvShows.addEventListener("mouseleave", () => {
  //   removeProjectDetails();
  // });
  detailsTvShows.addEventListener("click", () => {
    projectDetails(".aboutTvShows", detail1, detail2, detail3, detail4, detail5, detail6);
  });


}

// work expirience
// modal


