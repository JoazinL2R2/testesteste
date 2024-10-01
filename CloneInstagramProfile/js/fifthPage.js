const texts = [
    '5 perfis fakes criados te seguem',
    '3 pessoas compartilharam seu perfil com amigos',
];

let textIndex = 0;
const textBox = document.getElementById('dynamic-text');

function changeText() {
    textIndex = (textIndex + 1) % texts.length;
    textBox.innerText = texts[textIndex]; 
}
setInterval(changeText, 4500);

let loadersComplete = 0;

function animateLoader(loaderId, percentId, duration) {
    let loader = document.getElementById(loaderId);
    let percent = document.getElementById(percentId);
    let width = 0;

    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loadersComplete++;
            checkAllLoadersComplete();
        } else {
            width++;
            loader.style.width = width + '%';
            percent.innerText = width + '%';
        }
    }, duration);
}
function checkAllLoadersComplete() {
    if (loadersComplete === 5) { 
        window.location.href = "sixthPage.html";
    }
}

animateLoader('info-loader', 'info-percent', 50);
animateLoader('seguidores-loader', 'seguidores-percent', 100);
animateLoader('visitas-loader', 'visitas-percent', 80); 
animateLoader('prints-loader', 'prints-percent', 120);
animateLoader('stories-loader', 'stories-percent', 90);
