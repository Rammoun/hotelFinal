/////Gallery hotel///
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
showSlides(slideIndex += n);
}
function currentSlide(n) {
showSlides(slideIndex = n);
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
}
///Gallery Villa///
var slideIndexVilla = 1;
showSlidesVilla(slideIndexVilla);
function plusSlidesVilla(l) {
showSlidesVilla(slideIndexVilla += l);
}
function currentSlideVilla(l) {
showSlidesVilla(slideIndexVilla = l);
}
function showSlidesVilla(l) {
var k;
var slidesVilla = document.getElementsByClassName("mySlidesVilla");
var dotsVilla = document.getElementsByClassName("demoVilla");
var captionTextVilla = document.getElementById("captionVilla");
if (l > slidesVilla.length) {slideIndexVilla = 1}
if (l < 1) {slideIndexVilla = slidesVilla.length}
for (k = 0; k < slidesVilla.length; k++) {
slidesVilla[k].style.display = "none";
}
for (k = 0; k < dotsVilla.length; k++) {
dotsVilla[k].className = dotsVilla[k].className.replace(" activeVilla", "");
}
slidesVilla[slideIndexVilla-1].style.display = "block";
dotsVilla[slideIndexVilla-1].className += " activeVilla";
captionTextVilla.innerHTML = dotsVilla[slideIndexVilla-1].alt;
}
/////Galllery Spa//////
var slideIndexSpa = 1;
showSlidesSpa(slideIndexSpa);
function plusSlidesSpa(l) {
showSlidesSpa(slideIndexSpa += l);
}
function currentSlideSpa(l) {
showSlidesSpa(slideIndexSpa = l);
}
function showSlidesSpa(l) {
var k;
var slidesSpa = document.getElementsByClassName("mySlidesSpa");
var dotsSpa= document.getElementsByClassName("demoSpa");
var captionTextSpa = document.getElementById("captionSpa");
if (l > slidesSpa.length) {slideIndexSpa = 1}
if (l < 1) {slideIndexSpa = slidesSpa.length}
for (k = 0; k < slidesSpa.length; k++) {
slidesSpa[k].style.display = "none";
}
for (k = 0; k < dotsSpa.length; k++) {
dotsSpa[k].className = dotsSpa[k].className.replace(" activeSpa", "");
}
slidesSpa[slideIndexSpa-1].style.display = "block";
dotsSpa[slideIndexSpa-1].className += " activeSpa";
captionTextSpa.innerHTML = dotsSpa[slideIndexSpa-1].alt;
}
/*****Galllery Sport */
var slideIndexSport= 1;
showSlidesSport(slideIndexSport);
function plusSlidesSport(l) {
showSlidesSport(slideIndexSport += l);
}
function currentSlideSport(l) {
showSlidesSport(slideIndexSport = l);
}
function showSlidesSport(l) {
var k;
var slidesSport = document.getElementsByClassName("mySlidesSport");
var dotsSport= document.getElementsByClassName("demoSport");
var captionTextSport = document.getElementById("captionSport");
if (l > slidesSport.length) {slideIndexSport = 1}
if (l < 1) {slideIndexSport = slidesSport.length}
for (k = 0; k < slidesSport.length; k++) {
slidesSport[k].style.display = "none";
}
for (k = 0; k < dotsSport.length; k++) {
dotsSport[k].className = dotsSport[k].className.replace(" activeSport", "");
}
slidesSport[slideIndexSport-1].style.display = "block";
dotsSport[slideIndexSport-1].className += " activeSport";
captionTextSport.innerHTML = dotsSport[slideIndexSport-1].alt;
}
///////Gallery Bar/////
var slideIndexBar= 1;
showSlidesBar(slideIndexBar);
function plusSlidesBar(l) {
showSlidesBar(slideIndexBar += l);
}
function currentSlideBar(l) {
showSlidesBar(slideIndexBar= l);
}
function showSlidesBar(l) {
var k;
var slidesBar = document.getElementsByClassName("mySlidesBar");
var dotsBar= document.getElementsByClassName("demoBar");
var captionTextBar = document.getElementById("captionBar");
if (l > slidesBar.length) {slideIndexBar= 1}
if (l < 1) {slideIndexBar = slidesBar.length}
for (k = 0; k < slidesBar.length; k++) {
slidesBar[k].style.display = "none";
}
for (k = 0; k < dotsBar.length; k++) {
dotsBar[k].className = dotsBar[k].className.replace(" activeBar", "");
}
slidesBar[slideIndexBar-1].style.display = "block";
dotsBar[slideIndexBar-1].className += " activeBar";
captionTextBar.innerHTML = dotsBar[slideIndexBar-1].alt;
}


///Gallery              Fit///
var slideIndexFit = 1;
showSlidesFit(slideIndexFit);
function plusSlidesFit(m) {
showSlidesFit(slideIndexFit += m);
}
function currentSlideFit(m) {
showSlidesFit(slideIndexFit= m);
}
function showSlidesFit(m) {
var j;
var slidesFit = document.getElementsByClassName("mySlidesFit");
var dotsFit = document.getElementsByClassName("demoFit");
var captionTextFit = document.getElementById("captionFit");
if (m > slidesFit.length) {slideIndexFit = 1}
if (m < 1) {slideIndexFit= slidesFit.length}
for (j = 0; j < slidesFit.length; j++) {
slidesFit[j].style.display = "none";
}
for (j = 0; j < dotsFit.length; j++) {
dotsFit[j].className = dotsFit[j].className.replace(" activeFit", "");
}
slidesFit[slideIndexFit-1].style.display = "block";
dotsFit[slideIndexFit-1].className += " activeFit";
captionTextFit.innerHTML = dotsFit[slideIndexFit-1].alt;
}
///////////Gallery Food//////////////////////
var slideIndexFood = 1;
showSlidesFood(slideIndexFood);
function plusSlidesFood(m) {
showSlidesFood(slideIndexFood += m);
}
function currentSlideFood(m) {
showSlidesFood(slideIndexFood= m);
}
function showSlidesFood(m) {
var j;
var slidesFood = document.getElementsByClassName("mySlidesFood");
var dotsFood = document.getElementsByClassName("demoFood");
var captionTextFood = document.getElementById("captionFood");
if (m > slidesFood.length) {slideIndexFood = 1}
if (m < 1) {slideIndexFood= slidesFood.length}
for (j = 0; j < slidesFood.length; j++) {
slidesFood[j].style.display = "none";
}
for (j = 0; j < dotsFood.length; j++) {
dotsFood[j].className = dotsFood[j].className.replace(" activeFood", "");
}
slidesFood[slideIndexFood-1].style.display = "block";
dotsFood[slideIndexFood-1].className += " activeFood";
captionTextFood.innerHTML = dotsFood[slideIndexFood-1].alt;
}

