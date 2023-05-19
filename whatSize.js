//get session data 

hasData = sessionStorage.getItem("hasData");
sessionPhone = sessionStorage.getItem("phoneNumber");
sessionLocationFull = sessionStorage.getItem("locationFull");
sessionLocationShort = sessionStorage.getItem("locationShort");
sessionOriginURL = sessionStorage.getItem("originURL");

//create check var for hidden div
check = document.getElementById("values")
check.style.display = "none";

//first case is if the check div exists, meaning the url has a php id value

if(typeof(check) != 'undefined' && check != null){

	block = document.getElementById("values").textContent
	values = block.split("+");


	slug = values[1];
	phoneNumberValue = values[0];
	locationFull = values[2];
	locationShort = values[3];
	
	phoneNumberLink = "tel:" + phoneNumberValue
	
	constructionURL = "https://affordabledumpsterrental.com/resources/" + slug + "/construction-dumpsters";
	residentialURL  = "https://affordabledumpsterrental.com/resources/" + slug + "/residential-dumpsters";

}

else if(hasData){
	
	//session data case
	
	phoneNumberValue = sessionPhone;
	phoneNumberLink = phoneNumberValue;
	locationFull = sessionLocationFull;
	locationShort = sessionLocationShort;
	
	constructionURL = sessionStorage.getItem("constructionURL");
	residentialURL = sessionStorage.getItem("residentialURL");
	
	
	telLink = "tel:" + phoneNumberValue;
	
}

else{
	
	//default case

	phoneNumberValue = '444-444-3444' //(xxx)-xxx-xxxx
	phoneNumberLink = phoneNumberValue //xxx-xxx-xxxx
	locationFull = 'Little Rock, AR' 
	locationShort = 'Little Rock' 

	constructionURL = "https://affordabledumpsterrental.com"
	residentialURL = "https://affordabledumpsterrental.com"
	//Do not edit below

	telLink = "tel:" + phoneNumberValue;
	
}


//set all based on vars

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
		
		
		constructionButtons[i].href = constructionURL
		
	}
	
	
	homeownerButtons = document.getElementsByClassName("homeownerButton")
	
	for(i = 0; i < homeownerButtons.length; i++){
		
		homeownerButtons[i].href = residentialURL

	}

//other declarations and changes take place on element level
