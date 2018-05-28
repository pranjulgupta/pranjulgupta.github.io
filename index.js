function click1(){

var $ch=$("#c1").clone();
var p1 = prompt("Please enter the image");
var p2=prompt("please enter the name");
var p3=prompt("please enter the detail");
var p4=prompt("please enter the status");
var p5=prompt("please enter the person image");
$("#ig",$ch).attr("src",p1);
$("#name",$ch).text(p2);
 $("#name1",$ch).text(p3);
 $("#name2",$ch).text(p4);
$("#pi",$ch).css("background-image","url("+p5+")");
$("#r1").append($ch);
// var i
// while(i<120)
// setInterval(function(){$("#b1").css({"transform": "rotate("+i*5+"deg)"});},2000)

} 