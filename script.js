// let divTree = document.getElementById("xmastree");
// divTree.innerHTML = "<h1>Hello World!</h1>";

function xmasTree() {
    topOfTree();
    bodyOfTree();
    bottomOfTree();
}


function topOfTree() {
    var star = " * ";
    for(var i = 0; i < 2; i++) {
        console.log(star);
        star += " "  + star;
    }
}

function bodyOfTree() {

}


function bottomOfTree() {

}


xmasTree();