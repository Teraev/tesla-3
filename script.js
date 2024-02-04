let km = document.querySelector(".text_km b")
let drive = document.querySelector(".text1 b")
let five = 5

let speed_up = document.querySelector("#plus_speed")
let speed_down = document.querySelector("#minus_speed")

speed_up.onclick = () => {
    let currentValue = parseInt(drive.innerHTML);
    if (currentValue < 300) {
        drive.innerHTML = currentValue + 5;

        let km_minus = parseInt(km.innerHTML);
        km.innerHTML = km_minus - 10;
    }
};

speed_down.onclick = () => {
    let currentValue = parseInt(drive.innerHTML);
    if (currentValue > 0) {
        drive.innerHTML = currentValue - 5;

        let km_minus = parseInt(km.innerHTML);
        km.innerHTML = km_minus + 10;
    }
};

let temperage = document.querySelector(".text2 b")

let temparage_up = document.querySelector("#plus_temperage")
let temperage_down = document.querySelector("#minus_temperage")


temparage_up.onclick = () => {

    let currentValue = parseInt(temperage.innerHTML);
    temperage.innerHTML = currentValue + 1;

    if (temperage.innerHTML < 20) {
        document.querySelector("#cont").textContent = " Печка";
    } else {

        document.querySelector("#cont").textContent = "Кондиционер";
    }

}

temperage_down.onclick = () => {
    let currentValue = parseInt(temperage.innerHTML);
    temperage.innerHTML = currentValue - 1;

    if (temperage.innerHTML < 20) {
        document.querySelector("#cont").textContent = " Печка";
    } else {

        document.querySelector("#cont").textContent = "Кондиционер";
    }
}


let condition = document.querySelector("#condition")


condition.onclick = () => {
    let km_minus = parseInt(km.innerHTML);
    if (km_minus > 730) {

        km.innerHTML = km_minus - 20;
    } 
}









console.log(km, drive, speed_up, speed_down);