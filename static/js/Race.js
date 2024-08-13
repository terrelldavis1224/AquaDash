// Race.js
var racers = {
  "Caeleb": 47.02, "Emma": 51.71,
  "snake": 12.42, "stone": 99999,
  "Yellowfin": 4.74,"lizard":14.91,
  "SwordFish": 3.73, "turtle": 117.73378168101601,
  "Sarah": 52.16, "Zhenle":46.40
};


var size = 0;

window.addEventListener('load', function() {
    var imagesToPreload = Object.values(imageUrls);
    imagesToPreload.forEach(function(imageUrl) {
        var img = new Image();
        img.src = imageUrl;
    });
});

function startRace() {
    for (let i = 0; i <= size; i++) {
        let element = document.getElementById('pos' + i);
        if (element) {
            element.style.transform = 'translateX(100%)';
        }
    }
}

function resetElements() {
    for (let i = 0; i <= size; i++) {
        let element = document.getElementById('pos' + i);
        if (element) {
            let originalTransition = element.style.transition;
            element.style.transition = 'none';
            element.style.transform = 'translateX(0%)';
            setTimeout(() => {
                element.style.transition = originalTransition;
            }, 20); 
        }
    }
}

function createRacer(x) {
    if (size >= 6) {
        console.log("Maximum number of racers reached.");
    } else {
        size += 1;
        let element = document.getElementById("pool");
        element.innerHTML += `<tr><td id='pos${size}'><img class ='${x}'  src='${imageUrls[x]}' alt='${x}'></td></tr>`;

        let curRacer = document.getElementById(`pos${size}`);
      curRacer.style.transition = `${racers[x]}s linear`;
      console.log(String(curRacer.style.animation));
    }
}
