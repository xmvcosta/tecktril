var slide = 4000;

function slide1(){
    document.getElementById('slider').src="img/slider1.jpeg";
    setTimeout("slide2()", slide)
}

function slide2(){
    document.getElementById('slider').src="img/slider2.jpeg";
    setTimeout("slide3()", slide)
}

function slide3(){
    document.getElementById('slider').src="img/slider3.jpeg";
    setTimeout("slide1()", slide)
} 