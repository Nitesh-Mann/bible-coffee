$(document).ready(function () {
  // Function to toggle the login box
  $(document).ready(function () {
    // Function to toggle the login box
    $(".ph-list").click(function () {
      $(".ph-list").toggleClass("ph-x");
      $(".header2").toggleClass("show");
    });
  });

  // Function to remove the "show" class when an anchor tag inside "header2" is clicked
  $(".header2 a").click(function () {
    $(".ph-list").removeClass("ph-x").addClass("ph-list");
    $(".header2").removeClass("show");
  });
});

$(document).ready(function () {
  $(".cont-btn").click(function () {
    $(".contact-box").toggleClass("show");
  });

  $(".ph-x-circle").click(function () {
    $(".contact-box").removeClass("show");
  });
});

$(document).ready(function () {
  $(".inst-btn").click(function () {
    $(".box2").toggleClass("show");
  });

  $(".ph-x-circle").click(function () {
    $(".box2").removeClass("show");
  });
});

$(document).ready(function () {
  $(".privacy-btn").click(function () {
    $(".box3").toggleClass("show");
  });

  $(".ph-x-circle").click(function () {
    $(".box3").removeClass("show");
  });
});

$(document).click(function (event) {
  if (
    !$(event.target).closest(".contact-box").length &&
    !$(event.target).is(".cont-btn")
  ) {
    $(".contact-box").removeClass("show");
  }
});

const colors = ["#F8E4A0", "#FDB5A4", "#fdcbd0"];
let colorIndex = 0;

function toggleColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  return colors[colorIndex];
}

const tl = gsap.timeline();

tl.to(".section1 p", {
  backgroundColor: toggleColor,
  duration: 4,
  repeat: -1,
  yoyo: true,
});

function playbtnAnimation() {
  var videocont = document.querySelector(".video-cont");
  var playbtn = document.querySelector(".playbtn");
  videocont.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocont.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 0,
      top: dets.y - 0,
    });
  });
}
playbtnAnimation();

// Get references to the elements
const videoContainer = document.querySelector(".video-cont");
const video = videoContainer.querySelector("video");

// Toggle play/pause when the video container is clicked
videoContainer.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

var tl1 = gsap.timeline({ duration: 0.2, delay: 0.5 });

tl1.from(".head-a1", {
  y: -50,
  opacity: 0,
});

tl1.from(".a1, .a2, .a3, .a4", {
  y: 80,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".a5", {
  scrollTrigger: {
    trigger: ".section3",
    markers: false,
    start: "-20% center",
  },
  x: -200,
  duration: 0.6,
  opacity: 0,
});
gsap.from(".a6", {
  scrollTrigger: {
    trigger: ".section3",
    markers: false,
    start: "-20% center",
  },
  x: 200,
  duration: 0.6,
  opacity: 0,
});

gsap.from(".a7", {
  scrollTrigger: {
    trigger: ".section5",
    markers: false,
    start: "top center",
  },
  y: 100,
  duration: 0.7,
  opacity: 0,
});
gsap.from(".a7 span", {
  scrollTrigger: {
    trigger: ".section5",
    markers: false,
    start: "top center",
  },
  delay: 1,
  backgroundColor: "transparent",
  duration: 0.6,
});

gsap.from(".a8", {
  scrollTrigger: {
    trigger: ".section5",
    markers: false,
    start: "10% center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
});

gsap.from(".a9", {
  scrollTrigger: {
    trigger: ".all-points",
    markers: false,
    start: "-10% center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
});

gsap.from(".a10", {
  scrollTrigger: {
    trigger: ".a10",
    markers: false,
    start: "-50% center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
});

gsap.from(".a11", {
  scrollTrigger: {
    trigger: ".a11",
    markers: false,
    start: "-50% center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
});

gsap.from(".a12", {
  scrollTrigger: {
    trigger: ".a12",
    markers: false,
    start: "-50% center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
});

gsap.from(".a13", {
  scrollTrigger: {
    trigger: ".section8",
    markers: false,
    start: "-20% center",
  },
  y: 200,
  duration: 0.6,
});

gsap.from(".a17", {
  scrollTrigger: {
    trigger: ".section7",
    markers: false,
    start: "-35% center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".a15", {
  scrollTrigger: {
    trigger: ".section6",
    markers: false,
    start: "-2% center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
});

gsap.to(".cover", {
  scrollTrigger: {
    trigger: ".section6",
    markers: false,
    start: "top center",
  },
  x: "100%",
  duration: 0.6,
  stagger: 0.2,
});

gsap.from(".a14", {
  scrollTrigger: {
    trigger: ".section8",
    markers: false,
    start: "-20% center",
  },
  x: 100,
  duration: 0.6,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".a16", {
  scrollTrigger: {
    trigger: ".section10",
    markers: false,
    start: "top center",
  },
  y: 100,
  duration: 0.6,
  opacity: 0,
  stagger: 0.3,
});

function increaseValue() {
  // Get the current value
  var currentValue = parseInt(document.querySelector(".number").innerText);

  // Add 250 to the price value
  var priceValue =
    parseInt(document.getElementById("priceValue").innerText) + 250;

  // Update the number and price value
  document.querySelector(".number").innerText = currentValue + 1;
  document.getElementById("priceValue").innerText = priceValue;
}

function decreaseValue() {
  // Get the current value
  var currentValue = parseInt(document.querySelector(".number").innerText);

  if (currentValue > 1) {
    // Subtract 250 from the updated price value
    var priceValue = Math.max(
      250,
      parseInt(document.getElementById("priceValue").innerText) - 250
    );

    // Update the number and price value
    document.querySelector(".number").innerText = currentValue - 1;
    document.getElementById("priceValue").innerText = priceValue;
  } else {
    // If the number is 1, set the price value to 250
    document.getElementById("priceValue").innerText = 250;
  }
}
