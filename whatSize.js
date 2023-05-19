//get session data 

hasData = sessionStorage.getItem("hasData");
sessionPhone = sessionStorage.getItem("phoneNumber");
sessionLocationFull = sessionStorage.getItem("locationFull");
sessionLocationShort = sessionStorage.getItem("locationShort");
sessionOriginURL = sessionStorage.getItem("originURL");

//create check var for hidden div
check = document.getElementById("values")

//first case is if the check div exists, meaning the url has a php id value

if(typeof(check) != 'undefined' && check != null){

testArea = document.getElementById("testArea")

block = document.getElementById("values").textContent


values = block.split("+");


slug = values[1];
phoneNumberValue = values[0];
locationFull = values[2];
locationShort = values[3];
	
	
phoneClass = document.getElementsByClassName("phoneClass")

	for(let i = 0; i < phoneClass.length; i++){

		phoneClass[i].innerHTML = "<strong>" + phoneNumberValue + "</strong>"

	}



testArea.innerHTML = slug




}
else if(hasData){
	
	phoneNumberValue = sessionPhone;
	phoneNumberLink = phoneNumberValue;
	locationFull = sessionLocationFull;
	locationShort = sessionLocationShort;
	
	
	telLink = "tel:" + phoneNumberValue;

	phoneClass = document.getElementsByClassName("phoneClass")

	for(let i = 0; i < phoneClass.length; i++){

		phoneClass[i].innerHTML = "<strong>" + phoneNumberValue + "</strong>"

	}



	phoneButtons = document.getElementsByClassName("phoneButton")

	for(let i = 0; i < phoneButtons.length; i++){

		phoneButtons[i].href = "tel:" + phoneNumberLink

	}
	
	constructionButtons = document.getElementsByClassName("constructionButton")
	
	for(i = 0; i < constructionButtons.length; i++){
		
		
		constructionButtons[i].href = sessionStorage.getItem("constructionURL");
		
	}
	
	
	
	
	homeownerButtons = document.getElementsByClassName("homeownerButton")
	
	for(i = 0; i < homeownerButtons.length; i++){
		
		homeownerButtons[i].href = sessionStorage.getItem("residentialURL");
		
	}
	
	
}
else{

	phoneNumberValue = '444-444-3444' //(xxx)-xxx-xxxx
	phoneNumberLink = phoneNumberValue //xxx-xxx-xxxx
	locationFull = 'Little Rock, AR' 
	locationShort = 'Little Rock' 


	//Do not edit below

	telLink = "tel:" + phoneNumberValue;

	phoneClass = document.getElementsByClassName("phoneClass")

	for(let i = 0; i < phoneClass.length; i++){

		phoneClass[i].innerHTML = "<strong>" + phoneNumberValue + "</strong>"

	}



	phoneButtons = document.getElementsByClassName("phoneButton")

	for(let i = 0; i < phoneButtons.length; i++){

		phoneButtons[i].href = "tel:" + phoneNumberLink

	}

	
}


//other declarations and changes take place on element level
