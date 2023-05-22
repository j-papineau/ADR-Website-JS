//get session data 

hasData = sessionStorage.getItem("hasData");
sessionPhone = sessionStorage.getItem("phoneNumber");
sessionLocationFull = sessionStorage.getItem("locationFull");
sessionLocationShort = sessionStorage.getItem("locationShort");
sessionOriginURL = sessionStorage.getItem("originURL");

//create check var for hidden div
//check = document.getElementById("values")
//check.style.display = "none";

//first case is if the check div exists, meaning the url has a php id value



valid = document.getElementById("validID").value



if(valid){
	
	slug = document.getElementById("slug").value;
	phoneNumberValue = document.getElementById("phone").value;
	locationShort = document.getElementById("shortName").value;
	locationLong = document.getElementById("longName").value;
	
	phoneNumberLink = "tel:" + phoneNumberValue
	
	constructionURL = "https://affordabledumpsterrental.com/resources/" + slug + "/construction-dumpsters";
	residentialURL  = "https://affordabledumpsterrental.com/resources/" + slug + "/residential-dumpsters";
	
	
	//console prints just for checking
	console.log("slug = " + slug);
	console.log ("phoneNumber = " + phoneNumberValue);
	console.log("short = " + locationShort);
	console.log("long = " + locationLong);
	console.log("link = " + phoneNumberLink);

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

		phoneButtons[i].href = phoneNumberLink

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
