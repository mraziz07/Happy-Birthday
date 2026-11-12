const continueBtn = document.getElementById('continueBtn');
const nameInput = document.getElementById('userName');
const displayName = document.getElementById('displayName');
const pageVideo = document.getElementById('pageVideo');

// --- Page 1: Click continue -> Save name -> Open page2.html ---
if (continueBtn && nameInput) {
    function goToPage2() {
        const name = nameInput.value.trim();
        if (!name) {
            alert("Please enter your name first!");
            return;
        }

        localStorage.setItem("userName", name);
        window.location.href = "page2.html";
    }

    continueBtn.addEventListener('click', goToPage2);

    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') goToPage2();
    });
}

// --- Page 2: Show name & Play video ---
if (pageVideo) {
    const savedName = localStorage.getItem("userName");
    if (savedName && displayName) {
        displayName.textContent = savedName;
    }

    // Try playing the video as soon as the page loads
    pageVideo.play().catch(function() {
        // Mobile browsers (especially Safari/iPhone) often block audio autoplay
        // If blocked, it mutes the video so it can still start playing
        pageVideo.muted = true;
        pageVideo.play();
    });
}


// --- Page 2: "Touch here" button redirect ---
const touchHereBtn = document.getElementById('touchHereBtn');

if (touchHereBtn) {
    touchHereBtn.addEventListener('click', function() {
        window.location.href = "page3.html";
    });
}





// --- Page 3: NO Button Redirect ---
document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById('noBtn');

    if (noBtn) {
        noBtn.addEventListener('click', function() {
            window.location.href = "messages.html";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById('yesBtn');

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            window.location.href = "no.html";
        });
    }
});

//no button

//go back btn

document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById('yesBtn');
    const goBackBtn = document.getElementById('goBackBtn');

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            window.location.href = "no.html";
        });
    }

    if (goBackBtn) {
        goBackBtn.addEventListener('click', function() {
            window.location.href = "page3.html";
        });
    }
});


// messages buttons

document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById('yesBtn');
    const goBackBtn = document.getElementById('goBackBtn');
    const msg1Btn = document.getElementById('msg1Btn');
    const msg2Btn = document.getElementById('msg2Btn');
    const giftBtn = document.getElementById('giftBtn');

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            window.location.href = "no.html";
        });
    }

    if (goBackBtn) {
        goBackBtn.addEventListener('click', function() {
            window.location.href = "page3.html";
        });
    }

    if (msg1Btn) {
        msg1Btn.addEventListener('click', function() {
            window.location.href = "message1.html";
        });
    }

    if (msg2Btn) {
        msg2Btn.addEventListener('click', function() {
            window.location.href = "message2.html";
        });
    }

    if (giftBtn) {
        giftBtn.addEventListener('click', function() {
            window.location.href = "gift.html";
        });
    }
});