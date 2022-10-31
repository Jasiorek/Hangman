var passwords = ["Kozica", "Niedźwiedź brunatny", "Ryś" ,"Wiewiórka", "Wilk","Żubr",

"Jeż europejski",

"Foka szara",

"Bóbr europejski"];

var password_random = Math.floor(Math.random()*passwords.length);

if(password_random > passwords.length-1) password_random = 1;

var password = passwords[password_random];
password = password.toUpperCase();


var length = password.length;
var fails = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";

for(i=0; i<length; i++)
{
	if(password.charAt(i)==" ")password1 = password1 + " ";
	else password1 = password1 + "-";
}

function writedown_password()
{
	document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var words ="EDĆCBĄAKJIHGFĘÓOŃNMŁLUTŚSRQPŹŻZYXWV";




function start()
{
	var content = "";
	
	for(i=0; i<=34; i++)
	{
	  var element = "lit" + i;
	  content = content+'<div class="word" onclick="check('+i+')" id="'+element+'">'+words[i]+'</div>';
	  if ( (i+1) % 7==0) content = content + '<div style="clear:both;"></div>'
	}
	
	document.getElementById("alphabet").innerHTML = content;
	
	
	writedown_password()
	
}

String.prototype.setSign = function(place,sign)
{
	if(place > this.length - 1) return this.toString();
	else return this.substr(0, place)+sign + this.substr(place+1);
}

function check(nr)
{
	
	var hit = false;
	
	for(i=0; i<length; i++)
	{
		if(password.charAt(i) == words[nr])
		{
			password1 = password1.setSign(i, words[nr]);
			hit = true;
		}
	}
	
	if(hit==true)
	{
			yes.play();
			  var element = "lit" + nr;
			  document.getElementById(element).style.background ="#368f01"
			  document.getElementById(element).style.color ="black"
			  document.getElementById(element).style.border ="3px solid black"
			  document.getElementById(element).style.cursor ="default"
			  
			writedown_password();
	}
	else
	{
		no.play();
	  var element = "lit" + nr;
			  document.getElementById(element).style.background ="#a80000"
			  document.getElementById(element).style.color ="black"
			  document.getElementById(element).style.border ="3px solid black"
			  document.getElementById(element).style.cursor ="default"
			
			
			  	 document.getElementById(element).setAttribute("onclick",";");
			  
			  
			  fails++;
			  var image = "img/s"+fails+".jpg";
			  document.getElementById("gallow").innerHTML = '<img src="'+image+'" alt=""/>';
	}
	if(password == password1)
		document.getElementById("alphabet").innerHTML = "Wygrałeś!!! Hasło to: "+password+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ???</span>';			
	
	if(fails>=9)
	document.getElementById("alphabet").innerHTML = "Przegrałeś :*( Hasło to: "+password+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ???</span>';

}