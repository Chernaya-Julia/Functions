function checkNumber (chNumber){
    let ans = prompt("Угадайте число или нажмите <Отмена>, чтобы выйти");

    if (ans == null) {
        return true;
    }

    if (Number(ans) == chNumber) {
        alert("Вы угадали!");
        return true;
    } else {
        alert ("Вы ошиблись!");
        return false;
    }
}

function loopCheck () {
    let res;
    do {
        res = checkNumber (myNumber); 
    } while (res == false);
}

let myNumber = Math.floor(Math.random() * 100);

console.log(myNumber);
loopCheck();