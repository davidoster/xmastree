for(var i = 0; i < 3; i++) {
    // console.log();
    printXStars(i);
}

function printXStars(noOfStars) {
    var star = "";
    for(var i = 0; i < noOfStars + 1; i++) {
        if(noOfStars % 2 == 0) {
            star += " *";
        } else {
            star += "* ";
        }
        
    }
    console.log(star);
}