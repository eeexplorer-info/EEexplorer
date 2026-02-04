// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// 260204

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 


// Slide in from the side
// https://www.w3schools.com/howto/howto_js_curtain_menu.asp
// 260204
//
/* Open when someone clicks on the span element */
//function openNav() {
//  document.getElementById("myNav").style.width = "100%";
//}

/* Close when someone clicks on the "x" symbol inside the overlay */s
//function closeNav() {
//  document.getElementById("myNav").style.width = "0%";
//} 

//<script>


// <!-- https://www.w3schools.com/howto/howto_js_mobile_navbar.asp -->
// 260204
//
// function myMenu() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
    // x.style.display = "none";
//   } else {
    // x.style.display = "block";
//   }
// }
//</script>

