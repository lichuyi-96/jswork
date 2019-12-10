
function $(id) {
    return document.getElementById(id);
}

$('smallBox').onmouseover = function () {
    $('mask').style.display = 'block';
    $('bigBox').style.display = 'block';
};

$('smallBox').onmousemove  = function () {

$('mask').style.display = 'none';
$('bigBox').style.display = 'none';
};


$('smallBox').onmousemove  = function (event) {
var event = event || window.event;
var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;


var boxX = pageX - $('box').offsetLeft;
var boxY = pageY - $('box').offsetTop;

var maskX = boxX - $('mask').offsetWidth/2;
var maskY = boxY - $('mask').offsetTop/2;

if(maskX < 0) {
    maskX = 0;
}
if (maskX >$('smallBox').offsetWidth - $('mask').offsetWidth){
    maskX = $('smallBox').offsetWidth - $('mask').offsetWidth;
}
if(maskY <0){
    maskY = 0;
}
if (maskY > $('smallBox').offsetHeight - $('mask').offsetHeight){
    maskY = $('smallBox').offsetHeight - $('mask').offsetHeight;
}
}
