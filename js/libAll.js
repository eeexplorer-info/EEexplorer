// Call up
//internal = <head> <script> javascript ; </script> </head>
//external = <script src="myScript.js"></script>


// 240211 - Generate Random Number between 12 and 100
// It works in the HTML <script></script> tags
function random(){
    document.getElementById("one").innerHTML = Math.floor(Math.random() * 100)+1;
    }


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
            }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}


function showDate() {
    var rightnow = new Date();
    const sMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const sDayOfWk = ["Sun"," Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //https://stackoverflow.com/questions/1643320/get-month-name-from-date

    ihr = rightnow.getHours();	// i = integer prefix
    imin = rightnow.getMinutes();
    idow = rightnow.getDay();	// day of week where sun = 0, mon = 1,..
    //if Min < 10 {minstr = "0" + min} else {minstr = Min};	// variable assgt is wrong
    iday = rightnow.getDate();
    imth = rightnow.getMonth();
    iyr = rightnow.getYear() + 1900;
    
    // sampm = "am"; smins = imin;		
    // if (ihr > 12) {ihr = ihr - 12; sampm = "pm"};
    // if (imin < 10) {smins = "0" + imin};
    
    document.writeln(sDayOfWk[idow] + "day, ");
    document.writeln(iday + " " + sMonthNames[imth] + " " + iyr);
    // document.writeln(" -- (" + ihr + ":" + smins + " " + sampm + ")");
}

