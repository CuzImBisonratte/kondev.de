const scrollNote = document.getElementById("scrollNoteContainer");

function scrollEvent() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollNote.style.cursor = "initial";
        scrollNote.style.opacity = "0";
    } else {
        scrollNote.style.cursor = "pointer";
        scrollNote.style.opacity = "1";
    }
}

window.addEventListener("scroll", scrollEvent);
scrollEvent();

scrollNote.addEventListener("click", () => window.scrollTo(0, window.innerHeight));