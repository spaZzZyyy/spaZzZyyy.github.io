const volumeText = document.querySelector("#js-volume-text");

vol = -1;
increaseVolume();

document.addEventListener("keydown", () => {
    increaseVolume();
})

document.addEventListener("keyup", () => {
    decreaseVolume();
})

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    }

function increaseVolume() {
    vol++;
    random_bg_color();
    displayVol(vol);
}

function decreaseVolume() {
    vol -= 2;
    random_bg_color();
    displayVol(vol);
}

function displayVol(Vtext) {
    if (vol <= 0)
    {
        vol = 1;
        vText = 1;
    }
    if (vol >= 99)
    {
        vol = 99;
        vText = 99;
    }
    volumeText.textContent = Vtext;
}
