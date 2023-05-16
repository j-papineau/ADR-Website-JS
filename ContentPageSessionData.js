//get session data 

hasData = sessionStorage.getItem("hasData");
sessionPhone = sessionStorage.getItem("phoneNumber");
sessionLocationFull = sessionStorage.getItem("locationFull");
sessionLocationShort = sessionStorage.getItem("locationShort");
sessionOriginURL = sessionStorage.getItem("originURL");

//hasData variable (stored in SD tells the code) tells
//the code whether or not such sessionData exists
if(hasData){
	
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
//if sessionData does not exist, values will be set to defaults, which can be
//defined below
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

	document.getElementById("test").innerHTML = "not found"
}


//other declarations and changes take place on element level
