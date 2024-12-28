/*Name this external file gallery.js*/

function tabAccess() {
    const images = document.querySelectorAll(".preview");
    for(let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", 0);
        images[i].setAttribute("onfocus", "upDate(this)");
        images[i].setAttribute("onblur", "unDo()");
    }
}

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