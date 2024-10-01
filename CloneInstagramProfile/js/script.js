let progress = 0;
let isRequestCompleted = false;
let attempt = 0;
const maxAttempts = 4;

function fetchData() {
    const username = localStorage.getItem("instagramUsername");
    let url = `https://thiagocesar.pythonanywhere.com/profile?username=${encodeURIComponent(username)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        localStorage.setItem('UserData', JSON.stringify(data));
        isRequestCompleted = true;
        if (progress < 100) {
            clearInterval(interval);
            window.location.href = "fourthPage.html";
        }
        })
        .catch(error => {
        console.error('Erro na requisição:', error);
        attempt++;
        if (attempt < maxAttempts) {
            console.log(`Tentando novamente... Tentativa ${attempt} de ${maxAttempts}`);
            fetchData();
        } else {
            console.error('Máximo de tentativas alcançado. Não foi possível completar a requisição.');
        }
        });
}
fetchData();
let interval = setInterval(() => {
  if (progress >= 100 && isRequestCompleted) {
    clearInterval(interval);
    window.location.href = "fourthPage.html";
  } else {
    progress += 1;
    document.getElementById('loader-fill').style.width = progress + '%';
    document.getElementById('loading-percentage').innerText = `Carregando... ${progress}%`;
  }
}, 200);