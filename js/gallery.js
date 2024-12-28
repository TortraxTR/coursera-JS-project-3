/*Name this external file gallery.js*/

function upDate(previewPic) {
    let imgboard = document.getElementById("image");
    imgboard.style.backgroundImage = "url(" + previewPic.src + ")";
    imgboard.innerHTML = previewPic.alt;

}

function unDo() {
    
    let imgboard = document.getElementById("image");
    imgboard.style.backgroundImage = "url()";
    imgboard.innerHTML = "Hover over an image below to display here.";

}