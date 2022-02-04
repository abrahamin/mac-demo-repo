// var button = document.getElementById(button);

// button.addEventListener("click", document.getElementById(p).style.fontcolor = "red");

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => {
                console.log(reg);
            });
    });
}