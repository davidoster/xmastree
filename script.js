// let divTree = document.getElementById("xmastree");
// divTree.innerHTML = "<h1>Hello World!</h1>";
function printTopStars(noOfStars) {
    var star = "";
    for(var i = 0; i < noOfStars + 1; i++) {
        if(noOfStars % 2 == 0) {
            star += "   *";
        } else {
            star += "  *";
        }
        
    }
    console.log(star);
}

function printBodyStars(noOfStars) { // 3
    var star = "";
    for(var i = 0; i < noOfStars; i++) {
        if(noOfStars % 2 == 0) {
            star += "* ";
        } else {
            star += " *";
        }
    }
    console.log(star);
}

// printTopStars(4);
// printTopStars(3);

function xmasTree() {
    topOfTree(2);
    bodyOfTree(3);
    bottomOfTree();
}


function topOfTree(lines) {
    for(var i = 0; i < lines; i++) {
        // console.log();
        printTopStars(i);
    }
}

function bodyOfTree(lines) {
    printBodyStars(3);
    printBodyStars(4);
}


function bottomOfTree() {

}


xmasTree();