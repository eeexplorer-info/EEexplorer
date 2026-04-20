// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// 260204

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
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
//    var x = document.getElementById("myLinks");
//    if (x.style.display === "block") {
//      x.style.display = "none";
//    } else {
//      x.style.display = "block";
//    }
//  }
//</script>


// https://www.w3schools.com/js/js_popup.asp
// 260209
// function myFnAlert() {
  // alert("An alert box!");
  // ALUMNI\nConnect Nights; Event Calendar; Feedback Paths; Honour Boards; Meetings; Publications; Site Tours; Social Network; Social Posts\n\n
  // ELSOC\nCampus Visits; Contacts; Event Calendar; Honour Board; Publications; Social Graphics; Social Network; Term Calendar\n\n
  // SCHOOL\nContacts; Event Calendar; RElated; Term Calendar\n\n");
// }


// function myFnConfirm() {
//   if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   } 
// }


// function myFnPrompt() {
//   let person = prompt("Please enter your name", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// } 
// }