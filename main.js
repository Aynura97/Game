let n = 4;
let A = [];
let B = [];
let ImgM = [];
let M = [0, 0, 0];
let start = false;


onload = function () {
    Start();

}

function Start() {

    Arr();
    Table();


}

setTimeout(Close, 2000);
setTimeout(TimerShow, 2000);

function Arr() {
    let x, k = 1;
    /**
      1 - 8 qədər 2 dəfə ( n  n) ədədlər hazırlayır
     */
    for (let i = 0; i < n * n; i++) {
        k = k > n * 2 ? 1 : k;
        A[i] = k++;
    }

    for (let i = 0; i < n; i++) {
        B[i] = [];
        ImgM[i] = [];
        for (let j = 0; j < n; j++) {
            x = Math.floor(Math.random() * A.length);
            B[i][j] = A[x];
            ImgM[i][j] = A[x];
            A.splice(x, 1);
        }
    }

}
function TimerShow() {
    

    let minute = 0;
    let sec = 59;
    setInterval(function () {
        document.getElementById("timer").innerHTML = minute + " : " + sec;
        sec--;
        if (sec == 0 && minute !==0) {
            minute--;
            sec = 59;
            if (minute == 0) {
                minute = 0;
            }
           
        }
    }, 1000);
    

}


function Table() {
    let tbl = "";
    for (let i = 0; i < n; i++) {
        tbl += "<tr>";
        for (let j = 0; j < n; j++) {
            if (B[i][j] !== 0) {
                tbl += `<td id="${i}_${j}"><img src="img/${B[i][j]}.png" /></td>`;
            }
            else {
                tbl += `<td id="${i}_${j}" onclick="Click(${i},${j})"><img src="img/${B[i][j]}.png" /></td>`;
            }
        }
        tbl += "</tr>";
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;
}

function Close() {
    start = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            B[i][j] = 0;
        }
    }
    Table();
}

function Click(i, j) {
    B[i][j] = ImgM[i][j];


    Table();

    if (M[0] == 0) {
        M[0] = ImgM[i][j];
        M[1] = i;
        M[2] = j;

    } else {

        if (M[0] != ImgM[i][j] && (M[1] != i || M[2] != j)) {
            B[M[1]][M[2]] = 0;
            B[i][j] = 0;
            setTimeout(Table, 400);
        }
        M[0] = 0;
    }
    setTimeout(Table, 400);

}



 