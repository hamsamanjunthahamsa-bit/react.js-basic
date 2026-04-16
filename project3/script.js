function creatcount() {
    let count = 0;
    return function () {
        count++;
        document.getElementById("count").innerText = count;

    };
}   
const counter = creatcount();
document.getElementById("btn").addEventListener("click", counter);  