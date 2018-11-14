document.getElementById("newsletter-sub").addEventListener("click",subscribe);
function subscribe(e){
	e.preventDefault;
	var verif= /^[^.][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~][^..]+@[\w\d.-_~]+[^!#$%&'*+/=?^"`{@|}..].[a-z]{2,4}[^\-]$/g;
	if (document.getElementById("newsletter-input").value.match(verif)){
	$("#alert").prepend("<div class='alert alert-success fade show my-3 col-12'><h3>You have successfully subscribed to our newsletter!</h3></div>");
	setTimeout(function(){ $(".alert").alert('close'); }, 5000);
	} else{
	$("#alert").prepend("<div class='alert alert-danger fade show my-3 col-12'><h3>Please verify your email address!</h3></div>");
	setTimeout(function(){ $(".alert").alert('close'); }, 5000);
	}
}
var validname=""; var validemail=""; var validepostnumber=""; var valideaddress=""; var validecity=""; var validepostnumber=""; var validefidelity=""; var validecountry ="";
var cards=document.getElementsByClassName("cred");
for (var i of cards){
	i.addEventListener("click", cardselect);
}
function cardselect(e){
	var id=e.target.getAttribute("id");
	for (var i of cards){//console.log(i.firstChild.getAttribute("id")+"***"+id);
		if (i.firstChild.getAttribute("id")!=id){
			i.firstChild.style.opacity=0.3;
			i.firstChild.style.border="none";
		}
	}
	e.target.style.opacity=1;
	e.target.style.border="2px solid green";
	
	/*for (var i of cards){//console.log(i.firstChild.getAttribute("id")+"***"+id);
		if (i.firstChild.getAttribute("id")!=id){
		i.style.opacity=0.3;	
		}
	}	*/	
}
document.getElementById("toprint").style.display="none";
document.getElementById("rooms").style.display="none";
document.getElementById("payment-section").style.display="none";
document.getElementById("pr-div").style.opacity="0";
document.getElementById('book-sub').addEventListener("click", payment);
document.getElementById('book-reset').addEventListener("click", bookreset);
//var nbr=document.getElementById('nbr-rooms').value;
var arrdate1=""; var arrdate2=""; var days=0; 
var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dpd1').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
		arrdate1=checkin.date.valueOf(); arrdate2=checkout.date.valueOf();
      checkout.hide(); countdays(); $("#room-type").focus();
    }).data('datepicker');
//console.log($('#dpd1').value);
function countdays() {console.log(arrdate1+"Hi"+arrdate2); 

 /*var arrdate1 = $('#dpd1').value;
 var arrdate2 = $('#dpd2').value;*/
 var timeDiff = arrdate2-arrdate1;//Math.abs(arrdate2.getTime() - arrdate1.getTime());
 var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
 days=diffDays; console.log(days); 
  }
  //});

var priceSingle =1800; 
var priceDouble=2500;
var priceDoubleBaby=3000;
var pricetriple=3500;
//console.log(days);
/*function date(){
    var date=document.getElementById('date').value;
    var arrdate=date.split("-");
    console.log(date);//console.log(arrdate);
 var arrdate1 = new Date(arrdate[0]);
 var arrdate2= new Date(arrdate[1]);
 var timeDiff = Math.abs(arrdate2.getTime() - arrdate1.getTime());
 var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
 days=diffDays;
 //alert(diffDays);
 }*/
function roomsPlus(){
    //console.log(typeof days)
	var nbr=document.getElementById('nbr-rooms').value;
 nbr++;  
 document.getElementById('nbr-rooms').value=nbr;
 //var pricetotale=Number(document.getElementById('price').value);
 var roomtype=document.getElementById('room-type').value; 
 if(roomtype=="single"){
     var price=priceSingle*nbr*days;
document.getElementById('price').value=price;}
else if(roomtype=="double"){
    var price=priceDouble*nbr*days;
    document.getElementById('price').value=price;
}
else if(roomtype=="doublewithbaby"){
    var price=priceDoubleBaby*nbr*days;
    document.getElementById('price').value=price;
}
else if(roomtype=="triple"){
    var price=pricetriple*nbr*days;
    document.getElementById('price').value=price;
}
 
}
function roomminus(){
 var nbr=document.getElementById('nbr-rooms').value;
 if(nbr>0){
     nbr--;
     document.getElementById('nbr-rooms').value=nbr;
      var roomtype=document.getElementById('room-type').value; 
 if(roomtype=="single"){
     var price=priceSingle*nbr*days;
document.getElementById('price').value=price;}
else if(roomtype=="double"){
    var price=priceDouble*nbr*days;
    document.getElementById('price').value=price;
}
else if(roomtype=="doublewithbaby"){
    var price=priceDoubleBaby*nbr*days;
    document.getElementById('price').value=price;
}
else if(roomtype=="triple"){
    var price=pricetriple*nbr*days;
    document.getElementById('price').value=price;
}
 }
}
function childrenPlus(){
    var roomstype=document.getElementById('room-type').value;
    var nbr=document.getElementById('nbr-children').value;
	var nbrooms=document.getElementById('nbr-rooms').value;
    nbr++;      
    if((nbr<=1*nbrooms)&& (roomstype=="single")&&(document.getElementById('nbr-rooms')!==0)){     
    document.getElementById('nbr-children').value=nbr;}
    else if((nbr<=2*nbrooms)&& (roomstype=="double")&&(document.getElementById('nbr-rooms')!==0)){     
    document.getElementById('nbr-children').value=nbr;}
    else if((nbr<=3*nbrooms)&& (roomstype=="doublewithbaby")&&(document.getElementById('nbr-rooms')!==0)){     
     document.getElementById('nbr-children').value=nbr;}
    else if((nbr<=4*nbrooms)&& (roomstype=="triple")&&(document.getElementById('nbr-rooms')!==0)){     
    document.getElementById('nbr-children').value=nbr;}      
}
   function childrenMinus(){
    var nbr=document.getElementById('nbr-children').value;
if(nbr>0){
        nbr--;
        document.getElementById('nbr-children').value=nbr;
}
}
function adultesPlus(){
    var roomstype=document.getElementById('room-type').value;
    var nbr=document.getElementById('nbr-adultes').value;
	var nbrooms=document.getElementById('nbr-rooms').value;
    nbr++;
    if((nbr<=1*nbrooms)&& (roomstype=="single")&&(document.getElementById('nbr-rooms')!==0)){     
        document.getElementById('nbr-adultes').value=nbr;}
        else if((nbr<=2*nbrooms)&& (roomstype=="double")&&(document.getElementById('nbr-rooms')!==0)){     
        document.getElementById('nbr-adultes').value=nbr;}
        else if((nbr<=2*nbrooms)&& (roomstype=="doublewithbaby")&&(document.getElementById('nbr-rooms')!==0)){     
         document.getElementById('nbr-adultes').value=nbr;}
        else if((nbr<=2*nbrooms)&& (roomstype=="triple")&&(document.getElementById('nbr-rooms')!==0)){     
        document.getElementById('nbr-adultes').value=nbr;} 
}
   function adultesMinus(){
    var nbr=document.getElementById('nbr-adultes').value;
if(nbr>0){
        nbr--;
        document.getElementById('nbr-adultes').value=nbr;
}
}
function roomstype(){  
	//console.log (r)  
	var roomtype=document.getElementById('room-type').value; 
    if(roomtype=="single"){
        var x=1800;
        document.getElementById('nbr-rooms').value=1; //console.log(document.getElementById('nbr-rooms').value);
        var price=Number(document.getElementById('price').value);
       document.getElementById('price').value=x*days; //console.log(document.getElementById('nbr-rooms').value+"***"+(x*days));
    }
    else if(roomtype=="double"){
        var x=2500;
        document.getElementById('nbr-rooms').value=1;
        var price=Number(document.getElementById('price').value);
       document.getElementById('price').value=x*days;

    }
    else if(roomtype=="doublewithbaby"){
        var x=3000;
        document.getElementById('nbr-rooms').value=1;
        var price=Number(document.getElementById('price').value);
       document.getElementById('price').value=x*days;

    }
    else if(roomtype=="triple"){
        var x=3500;
        document.getElementById('nbr-rooms').value=1;
        var price=Number(document.getElementById('price').value);
       document.getElementById('price').value=x*days; 

    }
document.getElementById("rooms").style.display="block";
document.getElementById("pr-div").style.opacity="1";
}
/*document.getElementById('collapseTrig').addEventListener("click", collapse);
document.getElementById('rooms-plus').addEventListener("click", roomsPlus);
document.getElementById('rooms-minus').addEventListener("click", roomminus);
document.getElementById('children-plus').addEventListener("click", childrenPlus);
document.getElementById('children-minus').addEventListener("click", childrenMinus);
document.getElementById('adults-plus').addEventListener("click", adultsPlus);
document.getElementById('adults-minus').addEventListener("click", adultsMinus);*/
document.getElementById('form-reservation').style.display="none";
var nbr=document.getElementById('nbr-rooms').value;
var days=0;
var bookbtns=document.getElementsByClassName('book'); 
for (var i of bookbtns){
	i.addEventListener("click", showres);
}
function showres(){
	document.getElementById('form-reservation').style.display="block";	
	document.getElementById('dpd1').focus();
}

function collapse (e){
	e.preventDefault();
	$('#reservation').collapse('toggle');
	//$('#').collapse();
}
function payment(e){	
	e.preventDefault();
	document.getElementById("payment-section").style.display="flex";
	document.getElementById('form-reservation').style.display="none";	
	document.getElementById('fullname').focus();
	document.getElementById("summary-rooms").value=document.getElementById("nbr-rooms").value;
	document.getElementById("summary-children").value = document.getElementById("nbr-children").value;
	document.getElementById("summary-adults").value=document.getElementById("nbr-adultes").value;
	document.getElementById("summary-total").value=document.getElementById("price").value;
}
function bookreset(e){
	document.getElementById("room-type").value="Select room type";
	document.getElementById('nbr-adultes').value=0;
	document.getElementById('nbr-children').value=0;
	document.getElementById('nbr-rooms').value=0;
	document.getElementById('price').value=0;
	document.getElementById('dpd1').focus();
}
document.getElementById("modify").addEventListener("click", back);
function back(e){
	e.preventDefault;
	document.getElementById("payment-section").style.display="none";
	document.getElementById('form-reservation').style.display="block";
	document.getElementById('dpd1').focus();
}
/*function validatepayment(){
	document.getElementById("toprint").style.display="block";	
	document.getElementById("final-name").value=document.getElementById("fullname").value;
	document.getElementById("final-email").value=document.getElementById("email").value;
	document.getElementById("final-phone").value=document.getElementById("phone").value;
	document.getElementById("final-name").value=document.getElementById("fullname").value;//address; city; country; post;
	document.getElementById("final-address").value=
		document.getElementById("address").value+" "+document.getElementById("city").value+" "+document.getElementById("country").value+" "+document.getElementById("post").value;
	document.getElementById("final-rooms").value=
		document.getElementById("nbr-rooms").value+" "+document.getElementById("room-type").value;
	document.getElementById("final-children").value = document.getElementById("nbr-children").value;
	document.getElementById("final-adults").value=document.getElementById("nbr-adultes").value;
	document.getElementById("final-total").value=document.getElementById("price").value;
	print();
}
function print(){
	var divToPrint=document.getElementById("toprint");
	newWin= window.open("");
	newWin.document.write("<style>#last-logo{width: 70%; position: relative; left: 15%;}</style>")
	newWin.document.write("<style>.final-logo{font-family: \"Great Vibes\"; font-size: 2.5em; font-weight: bolder; letter-spacing: 5px; text-shadow: 2px 2px 2px orange, -2px -2px 2px deeppink; line-height: 1.7em; color: rgba(29,118,225,1.00);}</style>");
	newWin.document.write("<style>.final-label{font-size: 1.5em; margin-right: 15px;}</style>")
	newWin.document.write("<style>.final-txt{font-size: 1.25em; color: #411083;}</style>")
	newWin.document.write(divToPrint.outerHTML);
	newWin.print();
	newWin.close();
}*/