"use strict"
let conf =confirm("You must be above 18 in order to view the site")
let age =prompt("How old are you?","")

if(age<=17){
	alert("You're too young to view this content,log out now or you will be denied permanent access")
}
else{
	alert("You're old enough to view this content....Please PROCEED!!");
}
let prom = prompt("what's you actual age??","")
if (prom <=17){
	alert("You are NOT old enough to access this site....please EXIT!!")
}
else{
	alert("You're eligible to access this site....Welcome!!")
}

