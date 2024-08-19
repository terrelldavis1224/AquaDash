// Race.js
var racers = {
  "Caeleb Dressel": 47.02, "Emma Mckeon": 51.71,
  "Sidewinder Snake": 12.42, "stone": 99999,
  "Yellowfin": 4.74,"Basilisk lizard":14.91,
  "SwordFish": 3.73, "turtle": 117.73378168101601,
    "Sarah Sjöström": 52.16, "Zhanle Pan": 46.40,
    "Sunflower Sea Star":1980,"U.S. Masters Average":120
  
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
    var tableWidth = document.querySelector('table').offsetWidth;
    var percentageToMove = calculateMovementPercentage(window.innerWidth); // Determine movement percentage based on window size

    for (let i = 0; i <= size; i++) {
        let element = document.getElementById('pos' + i);
        if (element) {
            element.style.transform = `translateX(${percentageToMove}%)`;
        }
    }
}

function calculateMovementPercentage(windowWidth) {
    if (windowWidth > 1200) { 
        return 95;
    } else if (windowWidth > 768) {
        return 90;
    } else { 
        return 85;
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
            }, 1); 
        }
    }
}

function removeElements() {
    let initialSize = size; 
    for (let i = 0; i <= initialSize; i++) {
        let element = document.getElementById('pos' + i);
        let nameElement = document.getElementById("namepos"+i);

        if (element && nameElement) { 
            element.remove();
            nameElement.remove();
        }
        
    }
    size = 0; 
}

function createRacer(x) {
    if (size >= 6) {
        console.log("Maximum number of racers reached.");
    } else {
        size += 1;
        let element = document.getElementById("pool");
        let nameElement = document.getElementById("heat");
        element.innerHTML += `<tr><td id='pos${size}'><img class ='${x}'  src='${imageUrls[x]}' alt='${x}'></td></tr>`;
        nameElement.innerHTML += `<p id='namepos${size}'>${size}. ${x}</p>`;
        let curRacer = document.getElementById(`pos${size}`);
        curRacer.style.transition = `${racers[x]}s linear`;
        console.log(String(curRacer.style.animation));
        resetElements();

    }
}
