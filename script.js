
let box = 20;
let score  = 0;


const target = document.querySelector('.target');
const start = document.querySelector('button')
start.addEventListener('click', started);
let interval;

function started() {
    start.style.visibility="hidden";
    target.style.visibility='visible';
    document.querySelector('.score').innerHTML = `Score: ${score}`;
    document.querySelector('.score').style.visibility="visible";
    interval = setInterval(game, 600);
    setTimeout(stop, 36000);
}

function stop() {
    clearInterval(interval);
    target.style.visibility='hidden';
    again.style.visibility="visible";
    again.innerHTML = `You scored ${(score == 1 || score == 0) ? '' : score}, ${(score < 40) ? 'Ohh, you are still a freshman' : 'You strong enough'}, shall we play again?)`;
}

function clicked() {
    score ++;
    document.querySelector('.score').innerHTML = `Score: ${score}`;
}

 let again = document.querySelector('.again');

function game() {
    let aim = {
        x: Math.floor((Math.random() * 28)) * box,
        y: Math.floor((Math.random() * 28)) * box,
    };
    target.style.top = `${aim.x}px`;
    target.style.left = `${aim.y}px`;

    target.addEventListener("click", clicked);
    again.addEventListener('click', playagain);
}

function playagain() {
    score = 0;
    document.querySelector('.score').innerHTML = `Score: ${score}`;
    again.style.visibility="hidden";
    started();
}
