
let start__Btn = document.querySelector('.gameStart_btn');
let reStart__Btn = document.querySelector('.reStart_btn');
let holes = document.querySelectorAll('.hole img')

let randomNum;
let preNum;
let count = 0;
let score = 0;
let repeatMole;   // 두더지가 다시 나오게 한다 


//랜덤 홀 만들기
function randomHole() {
    randomNum = Math.floor(Math.random() * 8); //소수점으로 떨어지면 안된다,
    if (preNum !== randomNum) {
        preNum = randomNum;
        return randomNum;
    }
    return randomHole();
}


//스타트 버튼을 눌렀을때 작동될 로직 

gameStart = function () {
    function fn() {
        if (count < 10) {
            let randomIndex = randomHole();
            holes[randomIndex].src = './images/mole.jpg';
            count++;

            setTimeout(function () {
                holes[randomIndex].src = './images/hole.jpg';
            }, 3000);
        } else clearInterval(repeatMole);
    }
    setTimeout(fn, 1000);
    repeatMole = setInterval(fn, 4000);
}

//게임리스타트 
start__Btn.addEventListener('click', gameStart);

reStart__Btn.addEventListener('click', function () {
    holes[randomNum].src = './images/hole.jpg ';
    count = 0;
    score = 0;
    clearInterval(repeatMole);
    gameStart();
});


// 점수추가 

function hideMole(moleIdx) {
    let moleNumber = document.getElementById(`${randomNum}`);
    if (moleIdx === randomNum) {
        score = score + 10;
        document.getElementById('score').innerHTML = score;
        moleNumber.src = './images/hole.jpg';
    }
}

