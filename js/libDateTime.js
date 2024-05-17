// Shows current Date
// Rob Smith
// 17 May 2024
// libDateTime.js

// Call up
//internal = <head> <script> javascript ; </script> </head>
//external = <script src="myScript.js"></script>

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
    
    document.writeln(sDayOfWk[idow] + ", ");
    document.writeln(iday + " " + sMonthNames[imth] + " " + iyr);
    // document.writeln(" -- (" + ihr + ":" + smins + " " + sampm + ")");
}

