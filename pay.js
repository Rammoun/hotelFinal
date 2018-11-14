document.getElementById('myDIV1').style.display="none";
document.getElementById('myDIV2').style.display="none";
function myFunction1() {    var x = document.getElementById("myDIV1");
   if (x.style.display === "none") {
       x.style.display = "block";
   } else {
       x.style.display = "none";
   }
}

function myFunction2() {

   var x = document.getElementById("myDIV2");

   if (x.style.display === "none") {

       x.style.display = "block";

   } else {

       x.style.display = "none";

   }

}
document.getElementById("pay-sub").addEventListener("click", validation);
var validname="o";
var validemail="o";
 var validepostnumber="o";
 var valideaddress="o";
  var validecity="o";
 var validephonenumber="o";
 var validefidelity="o";
 var validecountry ="o";
  var validenameoncard="o";
  var validecardnumber="o";
  var validedate="o";

 function validation(e){//console.log("uhrfeiu1");
	 e.preventDefault();
    var name=document.getElementById('fullname').value;
    var email=document.getElementById('email').value; 
    var phone=document.getElementById('phone').value;
    var address=document.getElementById('address').value;
    var city=document.getElementById('city').value;
    var post=document.getElementById('post').value;
    var country=document.getElementById('country').value;
    var fidelity=document.getElementById('fidelity-card').value; 
    var nameoncard=document.getElementById('name-card').value;
    var cardnum= document.getElementById('card-num').value;
    var date=document.getElementById('exdate').value;


    var regrex= /^[0-9]+$/g;
    var regrexstr= /^[a-zA-Z ]+$/g;
    var verif= /^[^.][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~][^..]+@[\w\d.-_~]+[^!#$%&'*+/=?^"`{@|}..].[a-z]{2,4}[^\-]$/g;
    var regrexstrnum= /^[a-zA-Z0-9 ]+$/g;
    var ret= email.match(verif);


    if(document.getElementById('fullname').value==''){
        alert("Please enter your name."); validname=false;
        return false;
    }
     else if(document.getElementById('email').value==''){
         alert("Please enter your email."); validemail=false;
         return false;
     }
     else if(ret==null){
         alert("Invalide mail"); validemail=false;
         return false;
     }
     else if(phone==''){
         alert("Insert your phone number");  validephonenumber=false;
     }
     else if((!phone.match(regrex))||(phone.length<8)){
         alert("Invalid phone number"); validephonenumber=false;
         return false;
     }
     else if(address==''){
         alert("Insert your address"); valideaddress=false;
     }
     else if(!address.match(regrexstrnum)){
        alert("Invalid address"); valideaddress=false;
        return false;

    }
    else if(city==''){
        alert('Insert your city'); validecity=false;
    }
    else if(!city.match(regrexstr)){
        alert("Invalid city"); validecity=false;
        return false;
    }
    else if (country=='0'){
        alert ("Select your country"); validecountry =false;
        return false;
    }
     else if(post==''){
         alert("Insert your post number"); validecountry =false;
     }
     else if((post.match(regrex)) && (post.length!=5)){
        alert("Invalid post number"); validepostnumber=false;
        return false;

     }

     else if(fidelity.match(regrex)){
        alert("Invalid fidelity-card"); validefidelity=false;
        return false;
    }
    else if(nameoncard==''){
        alert("Insert your name on card"); validenameoncard=false;
        return false;
    }
    else if(!nameoncard.match(regrexstr)){
        alert("Invalid name"); validenameoncard=false;
        return false;
    }
    else if(cardnum==''){
        alert("Insert your card number"); validecardnumber=false;
        return false;
    }
    else if((cardnum.match(regrex))&&(cardnum.length!=16)){
        alert("Invalid card number"); validecardnumber=false;
        return false;
    }
    else if(date==''){
        alert ("Insert Expiration card "); validedate=false;
        return false;
    }  
    
	 if ((validname!=false) && (validemail!=false) && (validepostnumber!=false) && (valideaddress!=false) && (validecity!=false) && (validephonenumber!=false) && (validecountry!=false) && (validenameoncard!=false) && (validecardnumber!=false) && (validedate!=false) && (validefidelity!=false) ){ console.log("riehbs");
	 document.getElementById("toprint").style.display="block";	
	document.getElementById("final-name").textContent=document.getElementById("fullname").value;
	document.getElementById("final-email").textContent=document.getElementById("email").value;
	document.getElementById("final-phone").textContent=document.getElementById("phone").value;
	document.getElementById("final-name").textContent=document.getElementById("fullname").value;//address; city; country; post;
	document.getElementById("final-address").textContent=
		document.getElementById("address").value+" "+document.getElementById("city").value+" "+document.getElementById("country").value+" "+document.getElementById("post").value;
	document.getElementById("final-in").textContent = document.getElementById("dpd1").value;
	document.getElementById("final-out").textContent = document.getElementById("dpd2").value;
	document.getElementById("final-rooms").textContent=
		document.getElementById("nbr-rooms").value+" "+document.getElementById("room-type").value;
	document.getElementById("final-children").textContent = document.getElementById("nbr-children").value;
	document.getElementById("final-adults").textContent=document.getElementById("nbr-adultes").value;
	document.getElementById("final-price").textContent=document.getElementById("price").value+" $";
	print();}// else alert("ghalet");
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
	document.getElementById("toprint").style.display="none";	
}