function openPopup() {
    document.getElementById('popup-overlay').style.display = 'flex';
}


function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}
function openPopupA() {
    document.getElementById('popup-overlay1').style.display = 'flex';
}


function closePopupA() {
    document.getElementById('popup-overlay1').style.display = 'none';
}
function openPopup2() {
    document.getElementById('popup-overlay2').style.display = 'flex';
}


function closePopup2() {
    document.getElementById('popup-overlay2').style.display = 'none';
}
function openPopup3() {
    document.getElementById('popup-overlay3').style.display = 'flex';
}


function closePopup3() {
    document.getElementById('popup-overlay3').style.display = 'none';
}
function openPopup4() {
    document.getElementById('popup-overlay4').style.display = 'flex';
}


function closePopup4() {
    document.getElementById('popup-overlay4').style.display = 'none';
}
function openPopup5() {
    document.getElementById('popup-overlay5').style.display = 'flex';
}


function closePopup5() {
    document.getElementById('popup-overlay5').style.display = 'none';
}
function openPopup6() {
    document.getElementById('popup-overlay6').style.display = 'flex';
}


function closePopup6() {
    document.getElementById('popup-overlay6').style.display = 'none';
}
function openPopup7() {
    document.getElementById('popup-overlay7').style.display = 'flex';
}


function closePopup7() {
    document.getElementById('popup-overlay7').style.display = 'none';
}
function openPopup8() {
    document.getElementById('popup-overlay8').style.display = 'flex';
}


function closePopup8() {
    document.getElementById('popup-overlay8').style.display = 'none';
}
function openPopup9() {
    document.getElementById('popup-overlay9').style.display = 'flex';
}


function closePopup9() {
    document.getElementById('popup-overlay9').style.display = 'none';
}
function openPopup10() {
    document.getElementById('popup-overlay10').style.display = 'flex';
}


function closePopup10() {
    document.getElementById('popup-overlay10').style.display = 'none';
}
function openPopup11() {
    document.getElementById('popup-overlay11').style.display = 'flex';
}


function closePopup11() {
    document.getElementById('popup-overlay11').style.display = 'none';
}
function openPopup12() {
    document.getElementById('popup-overlay12').style.display = 'flex';
}


function closePopup12() {
    document.getElementById('popup-overlay12').style.display = 'none';
}
function openPopup13() {
    document.getElementById('popup-overlay13').style.display = 'flex';
}


function closePopup13() {
    document.getElementById('popup-overlay13').style.display = 'none';
}
function openPopup14() {
    document.getElementById('popup-overlay14').style.display = 'flex';
}


function closePopup14() {
    document.getElementById('popup-overlay14').style.display = 'none';
}


const stars = document.querySelectorAll('.star');
const result = document.getElementById('rating-result');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateRating(index + 1);
    });
});

function updateRating(rating) {
    stars.forEach((star, i) => {
        star.style.color = i < rating ? 'gold' : 'lightgray';
    });
    result.textContent = `Rating: ${rating}`;
}


let userLocation = "Location: Not Available";

function fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            userLocation = `Pak: ${latitude.toFixed(2)}, Karachi: ${longitude.toFixed(2)}`;
        }, function () {
            userLocation = "Location: Not Available";
        });
    }
}

function updateTicker() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    document.getElementById('tickerContent').textContent = `Date: ${date} | Time: ${time} | ${userLocation}`;
}

fetchLocation();

setInterval(updateTicker, 1000);

updateTicker();

let visitorCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;

visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

document.getElementById('visitorCount').textContent = `Visitors: ${visitorCount}`;
