// Fortune Cookie generator
// Rob Smith
// 11 Feb 2024

// Call up
//internal = <head> <script> javascript ; </script> </head>
//external = <script src="myScript.js"></script>

// Generate Random Number between 1 and 100
// Call up inside the HTML <script></script> tags
function random(){
    document.getElementById("one").innerHTML = Math.floor(Math.random() * 100)+1;
    }

