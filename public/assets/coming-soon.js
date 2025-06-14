
function updateTimer() {
  future = Date.parse("Dec 19, 2026 11:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer")
      .innerHTML =
      '<div><div class=""><p class="mb-1 text-xs">DAYS</p><div class="flex items-center justify-center"><h4 class="mb-0 avatar block  text-primary dark:!text-primary avatar-xxl hexagon clip-hexagon">' + d + '</h4></div></div></div>' +
      '<div><div class=""><p class="mb-1 text-xs">HOURS</p><div class="flex items-center justify-center"><h4 class="mb-0 avatar block  text-primary dark:!text-primary avatar-xxl hexagon clip-hexagon">' + h + '</h4></div></div></div>' +
      '<div><div class=""><p class="mb-1 text-xs">MINUTES</p><div class="flex items-center justify-center"><h4 class="mb-0 avatar block  text-primary dark:!text-primary avatar-xxl hexagon clip-hexagon">' + m + '</h4></div></div></div>' +
      '<div><div class=""><p class="mb-1 text-xs">SECONDS</p><div class="flex items-center justify-center"><h4 class="mb-0 avatar block  text-primary dark:!text-primary avatar-xxl hexagon clip-hexagon">' + s + '</h4></div></div></div>'
}
setInterval('updateTimer()', 1000);


particlesJS("particles-js", {
"particles": {
    "number": {
        "value": 80,
        "density": {
            "enable": true,
            "value_area": 800
        }
    },
    "color": {
        "value": "#845adf"
    },
    "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#845adf"
        },
        "polygon": {
            "nb_sides": 5
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
    },
    "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
    },
    "size": {
        "value": 2,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
        }
    },
    "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#845adf",
        "opacity": 0.4,
        "width": 1
    },
    "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
    }
},
"interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
            "enable": true,
            "mode": "grab"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
            "distance": 150,
            "line_linked": {
                "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
    }
},
"retina_detect": true
});
requestAnimationFrame(()=>{
});
