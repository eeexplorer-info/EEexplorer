// Rob Smith
// 10 Jun 2024
// libImgGallery.js

// Call up
//internal = <head> <script> javascript ; </script> </head>
//external = <script src="myScript.js"></script>

/* Image Gallery functions */

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg(pic){
    fullImgBox.style.display = "none";
}