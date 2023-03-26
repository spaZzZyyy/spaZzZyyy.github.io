const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const gallery = ["images/pic1.png", "images/pic2.jpg", "images/pic3.gif", "images/pic4.png", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const galleryText = [1,2,3,4,5];

/* Looping through images */
for (i = 0; i < gallery.length; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', gallery[i]);
newImage.setAttribute('alt', galleryText[i]);
const placeHolder  = i;
thumbBar.appendChild(newImage);
newImage.addEventListener("click", () => changeImage(placeHolder));
}

function changeImage(num)  {
    displayedImage.setAttribute('src',  gallery[num]);
    displayedImage.setAttribute('alt', galleryText[num]);
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => toggleOverlay());

function toggleOverlay(){
    if(btn.getAttribute("class") == "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent  = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
    
}