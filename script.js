/**************** SLIDE JQUERY *********************/
$(function(){
		$('.mySlides img:gt(0)').hide();
	
		setInterval(function(){
			
			$(".mySlides :first-child")
				
				.fadeOut(1000)
				.next("img")
				.show()
				.fadeIn(1000)
				.end()
				.appendTo('.mySlides');}, 
			5000);
});

/*window.onload = function () {"use strict";

let username = document.getElementById("username"); //Skriva in användarnamn	
let useremail = document.getElementById("useremail"); //Skriva in mailadress														 
let write = document.getElementById("write");        //Det meddelande man skriver 
let msgbox = document.getElementById("msgbox");      //Meddelandefönstret där allt hamnar
let submit = document.getElementById("submit");      //Skicka meddelande-knapp
let view = document.getElementById("view");          //Visa meddelanden-knapp
var table = document.getElementById("table");       //Tabell														 

let totalmsg = 0;
let user = localStorage.getItem("username");
let userEmail = localStorage.getItem("useremail");														 
	
														 
														 
/**********Firebase************
														 
submit.addEventListener("click", function(event) {
    console.log("Text: " + write.value + " hamnar i div");
        
totalmsg++;
let time = new Date(new Date().getTime()).toLocaleString();

let fb = firebase.database();

fb.ref("messages/" + totalmsg).set({
    name: user,
    message: write.value,
    time: time
				})
write.value = "";
    
 fb.ref().child("messages").once("value",function(snapshot){
  let data = snapshot.val();
  let count = Object.keys(data).length;
    });
});													

view.addEventListener("click", function(event){
table.innerHTML = "";
    
    firebase.database().ref("messages/").once("value", function(snapshot) {
	let allData = snapshot.val();
        Object.keys(allData).reverse().forEach(function(key){
    let messages = allData[key];
            
    let tr = document.createElement("tr");
tr.innerHTML = messages.name + "<td>" + messages.message + "<td>" + messages.time;
table.appendChild(tr);

        })
	
        
});

});														 



/**************** ACTIVE MENU *********************/






/**************** GUESTBOOK *********************/
