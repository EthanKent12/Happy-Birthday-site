document.addEventListener("DOMContentLoaded", function() {
    // draw cake animation
    gsap.fromTo("#cake-drawing", { drawSVG: "0%"}, {drawSVG: "100%", duartion: 2, delay: 1 });

    // Interactive click me text
    const clickMeText = document.getElementById("click-me-text");
    clickMeText.addEventListener("click", function(){
        //  Transition new page
        gsap.to("#cake-drawing", { scale: 2, opacity: 0, duration: 1, onComplete: function() {
            window.location.href = "newpage.html";
        } });
    });
});
